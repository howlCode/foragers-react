import React from "react";
import "./CourseModal.css";

const CourseModal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <p className="has-text-light has-text-centered course-title">
          {props.course.title}
        </p>
        <p className="has-text-light has-text-centered is-italic date-time">
          {props.course.date} - {props.course.time} in {props.course.location}{" "}
          at {props.course.facility}
        </p>
        <p className="has-text-centered">
          <span className="tag is-success">{props.course.cost}</span>
        </p>
        <p className="has-text-light has-text-justified course-description">
          {props.course.description}
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

export default CourseModal;
