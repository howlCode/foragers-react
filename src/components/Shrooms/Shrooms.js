import React, { Component } from "react";
import "./Shrooms.css";
import shrooms from "./dummy_data/shrooms_dev";

class Shrooms extends Component {
  render() {
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="columns is-multiline">
            {shrooms.map(shroom => (
              <div className="column is-one-third" key={shroom.id}>
                <figure className="image is-5by4">
                  <img src={shroom.image} alt={shroom.common_name} />
                </figure>
                <p className="has-text-weight-bold has-text-centered">
                  {shroom.common_name}
                </p>
                <p className="has-text-centered">
                  <span
                    className={
                      shroom.edible ? "tag is-primary" : "tag is-danger"
                    }
                  >
                    {shroom.edible ? "Edible" : "Not Edible"}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Shrooms;
