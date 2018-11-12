import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import AddressTextField from "./AddressTextField";

class AddressForm extends Component {
  render() {
    return (
      <section className="section">
        <h3 className="subtitle has-text-centered">Shipping Address</h3>
        <form onSubmit={this.props.handleSubmit(this.props.onAddressSubmit)}>
          <Field
            component={AddressTextField}
            type="text"
            label="Line 1"
            name="address_line_one"
            placeholder="123 main st..."
          />
          <Field
            component={AddressTextField}
            type="text"
            label="Line 2 (if needed)"
            name="address_line_two"
            placeholder="Apt # 3..."
          />
          <Field
            component={AddressTextField}
            type="text"
            label="City"
            name="city"
            placeholder="Your city name..."
          />
          <Field
            component={AddressTextField}
            type="text"
            label="State"
            name="state"
            placeholder="Your state name..."
          />
          <Field
            component={AddressTextField}
            type="text"
            label="Zip Code"
            name="zip"
            placeholder="Your zip code..."
          />
          <button type="submit" className="button is-primary is-pulled-right">
            Next
          </button>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: "addressForm",
  destroyOnUnmount: false
})(AddressForm);
