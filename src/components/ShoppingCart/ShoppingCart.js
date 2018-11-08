import React, { Component } from "react";
import "./ShoppingCart.css";
import CartItems from "./CartItems";

class ShoppingCart extends Component {
  state = {
    expanded: false
  };

  toggleShowContents = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <div className="shopping-cart">
        <button
          className="button is-primary cart-button"
          onClick={this.toggleShowContents}
        >
          <i className="fas fa-shopping-cart" />
        </button>
        {this.state.expanded ? <CartItems /> : null}
      </div>
    );
  }
}

export default ShoppingCart;
