import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Shrooms from "./components/Shrooms/Shrooms";
import Courses from "./components/Courses/Courses";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/shrooms" component={Shrooms} />
          <Route path="/courses" component={Courses} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
