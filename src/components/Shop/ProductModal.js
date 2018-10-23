import React from "react";
import "./ProductModal.css";

const ProductModal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <p class="image">
          <img
            class="product-modal-image"
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
        <p className="has-text-centered">
          <button className="button is-primary">Add To Cart</button>
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.onClose}
      />
    </div>
  );
};

export default ProductModal;
