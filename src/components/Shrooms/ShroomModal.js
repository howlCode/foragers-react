import React from "react";
import "./ShroomModal.css";

const ShroomModal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <p class="image is-4by3">
          <img src={props.shroom.image} alt={props.shroom.common_name} />
        </p>
        <p className="has-text-light has-text-centered">
          {props.shroom.common_name}
        </p>
        <p className="has-text-light has-text-centered is-italic">
          {props.shroom.genus}
        </p>
        <p className="has-text-light has-text-justified">
          {props.shroom.description}
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

export default ShroomModal;
