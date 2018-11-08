import React from "react";
import "./CartItems.css";
import { connect } from "react-redux";

const CartItems = props => {
  const subTotal = () => {
    let subtotal = 0;
    if (props.items.length > 0) {
      props.items.map(item => {
        subtotal += item.cost;
        return subtotal;
      });
    }
    return subtotal;
  };

  return (
    <div className="cart-items">
      <p className="cart-subtotal has-text-warning">
        Subtotal: ${subTotal()}{" "}
        <span className="button is-primary checkout-button">Checkout</span>
      </p>
      <div className="columns is-multiline">
        {props.items.map(item => (
          <div className="column is-full cart-item">
            <img src={item.image} alt={item.name} className="item-img" />
            <p className="item-price has-text-warning is-pulled-right">
              ${item.cost}
            </p>
            <p className="item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.itemsInCart.itemsInCart
});

export default connect(mapStateToProps)(CartItems);
