import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <header>
        <nav
          className="navbar is-dark is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand logo">
            <Link className="navbar-item" to={"/"}>
              Foragers
            </Link>
            <button
              className="button navbar-burger is-dark"
              onClick={this.toggleNav}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          <div
            className={
              this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
            }
          >
            <div className="navbar-start" />
            <div className="navbar-end">
              <Link className="navbar-item" to={"/shrooms"}>
                Mushroom Database
              </Link>
              <Link className="navbar-item" to={"/shop"}>
                Shop
              </Link>
              <Link className="navbar-item" to={"/courses"}>
                Education
              </Link>
              <Link className="navbar-item" to={"/about"}>
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
