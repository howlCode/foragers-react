import React, { Component } from "react";
import "./Courses.css";
import courses from "./dummy_data/courses";
import CourseModal from "./CourseModal";

class Courses extends Component {
  state = {
    courses: courses,
    course: [],
    isOpen: false
  };

  courseModal = course => {
    this.setState({ course: course, isOpen: true });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  courseStatus = course => {
    if (course.max_class_size <= course.participants) {
      return "Full, no spaces available.";
    }
    return course.max_class_size - course.participants + " spaces available.";
  };

  render() {
    return (
      <section className="section">
        <div className="columns">
          <div className="column">
            <div className="image">
              <img
                src={require("./dummy_data/images/hunting.jpg")}
                alt="hunting"
              />
            </div>
          </div>

          <div className="column is-hidden-mobile">
            <div className="image">
              <img
                src={require("./dummy_data/images/education.jpg")}
                alt="education"
              />
            </div>
          </div>

          <div className="column is-hidden-mobile">
            <div className="image">
              <img src={require("./dummy_data/images/sales.jpg")} alt="sales" />
            </div>
          </div>

          <div className="column is-hidden-mobile">
            <div className="image">
              <img
                src={require("./dummy_data/images/cooking.jpg")}
                alt="cooking"
              />
            </div>
          </div>
        </div>

        <div className="container has-text-centered">
          <h2 className="subtitle is-capitalized has-text-bold">
            Sign up for one of our classes!
          </h2>
          <table className="table is-hoverable is-bordered is-striped is-fullwidth is-size-7-mobile">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Subject</th>
                <th>Location</th>
                <th>Date</th>
                <th>Seats</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map(course => (
                <tr key={course.id}>
                  <td className="hand" onClick={() => this.courseModal(course)}>
                    {course.title}
                  </td>
                  <td>
                    {course.facility} - {course.location}
                  </td>
                  <td>
                    {course.date} - {course.time}
                  </td>
                  <td>{this.courseStatus(course)}</td>
                  <td>{course.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {this.state.course.length !== 0 ? (
          <CourseModal
            course={this.state.course}
            courseStatus={this.courseStatus(this.state.course)}
            onClose={this.toggleModal}
            show={this.state.isOpen}
          />
        ) : null}
      </section>
    );
  }
}

export default Courses;
