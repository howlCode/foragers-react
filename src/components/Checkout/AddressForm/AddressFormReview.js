import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../../actions/shoppingActions";

class AddressFormReview extends Component {
  reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label className="label has-text-info">{label}</label>
        <div className="control has-text-bold">
          {this.props.formValues[name]}
        </div>
      </div>
    );
  });

  onSubmit = e => {
    e.preventDefault();

    const { submitOrder, history, formValues } = this.props;

    submitOrder(formValues, history);
  };

  render() {
    return (
      <section className="section">
        <h5 className="title">Please confirm your entries</h5>
        {this.reviewFields}
        <button
          className="button is-warning"
          style={{ marginRight: "5px" }}
          onClick={this.props.onCancel}
        >
          Back
        </button>
        <button onClick={this.onSubmit} className="button is-primary">
          Submit Order
        </button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.addressForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(AddressFormReview));
