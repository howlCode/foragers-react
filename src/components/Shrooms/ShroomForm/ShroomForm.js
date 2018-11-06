import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import ShroomTextField from "./ShroomTextField";
import ShroomCheckField from "./ShroomCheckField";
import ShroomTextareaField from "./ShroomTextareaField";

class ShroomForm extends Component {
  render() {
    return (
      <section className="section">
        <h3 className="subtitle has-text-centered">New Shroom</h3>
        <form onSubmit={this.props.handleSubmit(this.props.onShroomSubmit)}>
          <Field
            component={ShroomTextField}
            type="text"
            label="Common Name"
            name="common_name"
            placeholder="Portabella..."
          />
          <Field
            component={ShroomTextField}
            type="text"
            label="Genus"
            name="genus"
            placeholder="Agaricus bisporus..."
          />
          <Field
            component={ShroomTextField}
            type="text"
            label="Image URL"
            name="image"
            placeholder="http://www.imagesRus.com/image_of_shroom.jpg"
          />
          <Field
            component={ShroomCheckField}
            label="Check if edible"
            name="edible"
            type="checkbox"
          />
          <Field
            component={ShroomTextareaField}
            label="Description"
            name="description"
            placeholder="Describe the mushroom..."
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
  form: "shroomForm",
  destroyOnUnmount: false
})(ShroomForm);
