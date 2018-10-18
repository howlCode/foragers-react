import React, { Component } from "react";
import "./Courses.css";
import courses from "./dummy_data/courses";

class Courses extends Component {
  state = {
    courses: courses
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
          <table className="table is-hoverable is-bordered is-striped is-fullwidth is-hidden-mobile">
            <thead>
              <tr>
                <th style={{ width: "30%" }}>Subject</th>
                <th>Location</th>
                <th>Date</th>
                <th style={{ width: "5%" }}>Spaces Remaining</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.courses.map(course => (
                <tr>
                  <td>{course.title}</td>
                  <td>
                    {course.facility} - {course.location}
                  </td>
                  <td>
                    {course.date} - {course.time}
                  </td>
                  <td>{course.max_class_size - course.participants}</td>
                  <td>{course.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="columns is-hidden-desktop is-hidden-tablet is-multiline">
            {this.state.courses.map(course => (
              <div className="column is-full-width" key={course.id}>
                <h3 className="subtitle">{course.title}</h3>
                <p />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Courses;
