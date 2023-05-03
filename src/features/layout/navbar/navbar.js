import { useState } from "react";
import { Link } from "react-router-dom";

import "./stylee.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container d-flex flex-column">
        <div className="d-flex mb-3 w-100 justify-content-between align-items-center">
          <div className="social-links my-2 text-white">
            <Link>
              <i className="fa-brands mx-1 fa-facebook"></i>
            </Link>
            <Link>
              <i className="fa-brands mx-1 fa-twitter"></i>
            </Link>
            <Link>
              <i className="fa-brands mx-1 fa-github"></i>{" "}
            </Link>
            <Link>
              <i className="fa-brands mx-1 fa-linkedin"></i>{" "}
            </Link>
            <Link>
              <i className="fab mx-1 fa-google"></i>{" "}
            </Link>
          </div>

          <div className="my-2 text-white">
            <Link to="/login" className="mx-2">
              <i className="fa-solid fa-user"></i>
              <span> Login</span>
            </Link>
            <Link to="/register" className="mx-2">
              <span> Register</span>
            </Link>
            <Link to="/profile" className="mx-2">
              <i className="fa-solid fa-user"></i>
              <span> Profile</span>
            </Link>

            <Link to="/wishlist" className="mx-2">
              <i className="fa-regular fa-lg fa-heart text-white"></i>
              <span> Wish List</span>
            </Link>

            <Link to="/cart" className="mx-2">
              <i className="fa-solid fa-lg fa-cart-shopping text-white"></i>
              <span> Cart</span>
            </Link>
            <Link className="mx-2">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
              <span> Logout</span>
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
          <Link to="home">
            <img
              src={process.env.PUBLIC_URL + "assets/logo.png"}
              alt="logo"
              className="logo"
            />
          </Link>

          <form className="d-flex w-50" role="search">
            <select
              className="form-select form-select-sm w-25 border-end-0 rounded-0 select"
              aria-label=".form-select-lg example"
            >
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <input
              className="form-control w-100 rounded-0 border-start-0 btn-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div className="cart d-flex">
            <Link to="/wishlist" className="btn-new p-2">
              <i className="fa-regular fa-lg fa-heart text-white"></i>
            </Link>
            <Link to="/cart" className="btn-new p-2">
              <i className="fa-solid fa-lg fa-cart-shopping text-white"></i>
              <span>0</span>
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end "
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              StoreFronts
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item">Action</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Another action</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item">Something else here</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
