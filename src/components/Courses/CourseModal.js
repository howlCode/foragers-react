import React from "react";
import "./CourseModal.css";
import CourseMap from "./CourseMap";
import CoursePayments from "./CoursePayments";

const CourseModal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-content">
        <p className="has-text-light has-text-centered course-title">
          {props.course.title}{" "}
          <span className="tag is-info">$ {props.course.cost}</span>
        </p>
        <p className="has-text-light has-text-centered is-italic date-time">
          {props.course.date} - {props.course.time} in {props.course.location}{" "}
          at {props.course.facility}{" "}
        </p>
        <div className="map">
          <CourseMap
            latitude={props.course.latitude}
            longitude={props.course.longitude}
            location={props.course.facility}
          />
        </div>
        <p className="has-text-centered has-text-light status">
          {props.courseStatus}
        </p>
        <p className="has-text-light has-text-centered course-description">
          {props.course.description}
        </p>
        <div className="has-text-centered sign-up">
          <CoursePayments course={props.course} />
        </div>
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
