import React from "react";
import "./hero.styles.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Hero = () => {
  return (
    <section className="hero is-large is-info hero-image">
      <div className="hero-body">
        <div className="container">
          <h1 className="hero-title">Bags reimagined for modern life</h1>
          <div className="shop-now-btn">
            <button className="button is-black" id="shop-now">
              <Link className="link1" to="/shop">
                SHOP NOW
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
