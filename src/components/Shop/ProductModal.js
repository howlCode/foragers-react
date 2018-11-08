import React from "react";
import "./ProductModal.css";
import { connect } from "react-redux";
import { addProducts } from "../../actions/shoppingActions";
import { Link } from "react-router-dom";

const ProductModal = props => {
  if (!props.show) {
    return null;
  }

  const handleAdd = product => {
    if (props.auth !== false) {
      props.addProducts(product);
      props.onClose();
    }
  };

  const showAdd = () => {
    if (props.auth !== false) {
      return (
        <button
          className="button is-primary"
          onClick={() => handleAdd(props.product)}
        >
          Add to Cart
        </button>
      );
    } else {
      return (
        <Link to={"/portal"} className="button is-warning">
          Log in to place an order
        </Link>
      );
    }
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <p className="image">
          <img
            className="product-modal-image"
            src={props.product.image}
            alt={props.product.name}
          />
        </p>
        <p className="has-text-light has-text-centered name">
          {props.product.name}
        </p>
        <p className="has-text-light has-text-centered">
          <span className="has-text-info">${props.product.cost}</span>
        </p>
        <p className="has-text-light has-text-centered description">
          {props.product.description}
        </p>
        <p className="has-text-centered">{showAdd()}</p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => ({
  addProducts: product => dispatch(addProducts(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductModal);
