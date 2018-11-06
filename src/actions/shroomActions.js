import axios from "axios";

export const FETCH_SHROOMS_BEGIN = "FETCH_SHROOMS_BEGIN";
export const FETCH_SHROOMS_SUCCESS = "FETCH_SHROOMS_SUCCESS";
export const FETCH_SHROOMS_FAILURE = "FETCH_SHROOMS_FAILURE";

export const fetchShroomsBegin = () => ({
  type: FETCH_SHROOMS_BEGIN
});

export const fetchShroomsSuccess = shrooms => ({
  type: FETCH_SHROOMS_SUCCESS,
  payload: { shrooms }
});

export const fetchShroomsError = error => ({
  type: FETCH_SHROOMS_FAILURE,
  payload: { error }
});

export const fetchShrooms = () => async dispatch => {
  dispatch(fetchShroomsBegin());
  return axios
    .get("/api/shrooms")
    .then(res => {
      dispatch(fetchShroomsSuccess(res.data));
      return res.data;
    })
    .catch(error => dispatch(fetchShroomsError(error)));
};

export const postShroom = (values, history) => async dispatch => {
  const res = await axios.post("/api/shrooms", values);
  history.push("/shrooms");
};
