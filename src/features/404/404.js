import { useState } from "react";
import { Link } from "react-router-dom";

import "./stylee.css";

function Cart() {
  return (
    <div className="back">
      <main className="main">
        <section className="home">
          <div className="home__container containerr">
            <div className="home__data">
              <span className="home__subtitle">Error 404</span>
              <h1 className="home__title">Hey Buddy</h1>
              <p className="home__description">
                We can't seem to find the page <br />
                you are looking for.
              </p>
              <Link to="/home" className="home__button btn">
                {" "}
                Go Home{" "}
              </Link>
            </div>

            <div className="home__img">
              <img
                src={process.env.PUBLIC_URL + "assets/ghost-img.png"}
                alt=""
              />
              <div className="home__shadow"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Cart;
