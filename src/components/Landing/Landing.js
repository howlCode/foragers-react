import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="hero is-medium is-dark">
        <div className="hero-body shroom-basket">
          <div className="container has-text-centered">
            <h1 className="title">Welcome to Foragers</h1>
            <h2 className="subtitle">
              Helping you find your next tasty morsels!
            </h2>
          </div>
        </div>
      </div>
      <section className="section landing-background">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column service-panel">
              <i class="fa fa-eye fa-3x" aria-hidden="true" />
              <h3 class="subtitle">Hunting</h3>
              <p>
                We practice extensive wild foraging and mushroom gathering. We
                are passionate about helping our community become better
                foragers!
              </p>
            </div>
            <div class="column service-panel">
              <i class="fa fa-graduation-cap fa-3x" aria-hidden="true" />
              <h3 class="subtitle">Education</h3>
              <p>
                We maintain an extensive <Link to={"/shrooms"}>database</Link>{" "}
                of our findings and offer one-on-one{" "}
                <Link to={"/courses"}>classes</Link> for hunting and cooking
                with mushrooms!
              </p>
            </div>
            <div class="column service-panel">
              <i class="fa fa-balance-scale fa-3x" aria-hidden="true" />
              <h3 class="subtitle">Sales</h3>
              <p>
                You can even purchase cool swag in the{" "}
                <Link to={"/shop"}>shop</Link>!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
