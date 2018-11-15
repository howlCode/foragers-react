const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/auth/google", { target: "https://foragers-api.herokuapp.com/" }),
    proxy("/api/*", { target: "https://foragers-api.herokuapp.com/" }),
    proxy("/api/stripe/course", {
      target: "https://foragers-api.herokuapp.com/"
    })
  );
};
