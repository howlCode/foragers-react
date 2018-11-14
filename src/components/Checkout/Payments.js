import React, { Component } from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    return (
      <div style={{ marginLeft: "5px" }}>
        <StripeCheckout
          name="Foragers"
          description="Order Payment"
          amount={Math.round(this.props.subTotal * 100)}
          token={token => console.log(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="button is-primary">Pay For Order</button>
        </StripeCheckout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subTotal: state.itemsInCart.subTotal
});

export default connect(mapStateToProps)(Payments);
