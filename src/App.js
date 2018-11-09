import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./actions";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

import Shrooms from "./components/Shrooms/Shrooms";
import ShroomNew from "./components/Shrooms/ShroomForm/ShroomNew";
import Shop from "./components/Shop/Shop";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Auth from "./components/Auth/Auth";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/shrooms" component={Shrooms} />
          <Route exact path="/shrooms/new" component={ShroomNew} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/courses" component={Courses} />
          <Route path="/about" component={About} />
          <Route path="/portal" component={Auth} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
