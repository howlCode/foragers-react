import React, { Component } from "react";
import "./Shrooms.css";
import ShroomModal from "./ShroomModal";
import shrooms from "./dummy_data/shrooms_dev";

class Shrooms extends Component {
  state = {
    shrooms: shrooms,
    filteredShrooms: shrooms,
    genus: [],
    shroom: [],
    isOpen: false
  };

  componentDidMount() {
    let genusPool = [];
    this.state.shrooms.map(shroom => {
      if (!genusPool.includes(shroom.genus)) {
        genusPool.push(shroom.genus);
      }
      return genusPool;
    });
    this.setState({ genus: genusPool });
  }

  shroomModal = shroom => {
    this.setState({ shroom: shroom, isOpen: true });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleSelection = selection => {
    if (selection.target.value !== "all") {
      const filteredShrooms = this.state.shrooms.filter(
        shroom => shroom.genus === selection.target.value
      );
      this.setState({ filteredShrooms: filteredShrooms });
    } else {
      this.setState({ filteredShrooms: shrooms });
    }
  };

  render() {
    return (
      <section className="section">
        <div className="container is-fluid">
          <div className="field is-horizontal">
            <label className="label" style={{ marginRight: "20px" }}>
              Filter Shrooms
            </label>
            <label className="label filter-selector">Genus</label>
            <div className="has-text-centered control">
              <div className="select">
                <select onChange={this.toggleSelection}>
                  <option value="all">Show All</option>
                  {this.state.genus.map(genus => (
                    <option>{genus}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="columns is-multiline">
            {this.state.filteredShrooms.map(shroom => (
              <div
                className="column is-one-third"
                key={shroom.id}
                onClick={() => this.shroomModal(shroom)}
              >
                <figure className="image is-5by4">
                  <img
                    className="shroom-image"
                    src={shroom.image}
                    alt={shroom.common_name}
                  />
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
        {this.state.shroom.length !== 0 ? (
          <ShroomModal
            shroom={this.state.shroom}
            onClose={this.toggleModal}
            show={this.state.isOpen}
          />
        ) : null}
      </section>
    );
  }
}

export default Shrooms;
