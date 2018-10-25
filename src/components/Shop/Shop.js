import React, { Component } from "react";
import "./Shop.css";
import products from "./dummy_data/products";
import ProductModal from "./ProductModal";

class Shop extends Component {
  state = {
    products: products,
    filteredProducts: products,
    types: [],
    product: [],
    isOpen: false
  };

  componentDidMount() {
    let productTypes = [];
    this.state.products.map(product => {
      if (!productTypes.includes(product.type)) {
        productTypes.push(product.type);
      }
      return productTypes;
    });
    this.setState({ types: productTypes });
  }

  productModal = product => {
    this.setState({ product: product, isOpen: true });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggleSelection = selection => {
    if (selection.target.value !== "all") {
      const filteredProducts = this.state.products.filter(
        product => product.type === selection.target.value
      );
      this.setState({ filteredProducts: filteredProducts });
    } else {
      this.setState({ filteredProducts: products });
    }
  };

  render() {
    return (
      <section className="section shop">
        <div className="field is-horizontal">
          <label className="label">Sort Products</label>
          <div className="has-text-centered control">
            <div className="select">
              <select onChange={this.toggleSelection}>
                <option value="all">Show All</option>
                {this.state.types.map(type => (
                  <option>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="columns is-multiline">
          {this.state.filteredProducts.map(product => (
            <div
              className="column is-two-fifths product-card hand"
              id={product.id}
              onClick={() => this.productModal(product)}
            >
              <div className="image is-128x128 product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <p className="product-name has-text-centered">{product.name}</p>

              <p className="price-line has-text-centered">
                <span className="has-text-info price">${product.cost}</span>
              </p>
            </div>
          ))}
        </div>
        {this.state.product.length !== 0 ? (
          <ProductModal
            product={this.state.product}
            onClose={this.toggleModal}
            show={this.state.isOpen}
          />
        ) : null}
      </section>
    );
  }
}

export default Shop;
