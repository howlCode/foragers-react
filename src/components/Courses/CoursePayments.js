import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import StripeCheckout from "react-stripe-checkout";

class CoursePayments extends Component {
  render() {
    return (
      <div style={{ marginLeft: "5px" }}>
        <StripeCheckout
          name="Foragers"
          description="Course Sign Up Fee"
          amount={Math.round(this.props.course.cost * 100)}
          token={token =>
            this.props.handleCourseToken(
              token,
              this.props.course,
              Math.round(this.props.course.cost * 100)
            )
          }
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="button is-primary">Pay For Order</button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(CoursePayments);
