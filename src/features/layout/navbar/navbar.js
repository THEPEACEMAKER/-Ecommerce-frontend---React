import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./stylee.module.css";
import { logout } from "../../auth/authSlice";
import { fetchCategories } from "../../Category/PopularCategories/popularCategoriesSlice";
import { resetCart } from "../../cart/cartSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { cartCount } = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [selectedValue, setSelectedValue] = useState("default");
  const { categories } = useSelector((state) => state.categories);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleLogout = () => {
    dispatch(resetCart());
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(fetchCategories());
    // TODO: Search categories not fetch them
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
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
            {!isLoggedIn && (
              <>
                <Link to="/login" className="mx-2">
                  <i className="fa-solid fa-user"></i>
                  <span> Login</span>
                </Link>
                <Link to="/register" className="mx-2">
                  <span> Register</span>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link to="/profile" className="mx-2">
                  <i className="fa-solid fa-user"></i>
                  <span> Profile</span>
                </Link>

                <Link className="mx-2" onClick={handleLogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  <span> Logout</span>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between w-100 mb-3">
          <Link to="home">
            <img
              src={process.env.PUBLIC_URL + "assets/logo.png"}
              alt="logo"
              className={`${styles.logo}`}
            />
          </Link>
          <form className={`${styles.search} d-flex w-50`} role="search">
            <select
              className={`form-select form-select-sm w-25 border-end-0 rounded-0 ${styles.select}`}
              aria-label=".form-select-lg example"
              defaultValue={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="default" disabled>
                Category
              </option>
              {categories &&
                categories.map((el, i) => (
                  <option key={i} value={el.id}>
                    {el.name}
                  </option>
                ))}
            </select>
            <input
              className={`form-control w-100 rounded-0 border-start-0 ${styles.btnSearch} `}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div className="cart d-flex">
            <Link to="/wishlist" className="btn-new p-2">
              <i className="fa-regular fa-lg fa-heart text-white"></i>
            </Link>
            <Link to="/cart" className={`${styles.btnNew} p-2`}>
              <i className="fa-solid fa-lg fa-cart-shopping text-white"></i>
              <span>{cartCount}</span>
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
            <i className="fa-solid fa-bars text-white"></i>
          </button>
        </div>

        <div
          className="offcanvas offcanvas-end "
          tabIndex="-1"
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
            <ul className={`navbar-nav ${styles.ulNavbar}`}>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles.active}`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                  {categories &&
                    categories.map((el, i) => (
                      <li key={el.id}>
                        <Link
                          to={`/category/${el.id}`}
                          className="dropdown-item"
                        >
                          <span>{el.name}</span>
                        </Link>
                      </li>
                    ))}
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
