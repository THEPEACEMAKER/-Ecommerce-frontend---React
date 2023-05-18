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
    <nav className={`navbar navbar-expand-lg bg-body-tertiary p-0`}>
      <div className="d-flex flex-column w-100">
        <div className={`${styles.top}`}>
          <div className="d-flex  w-100 justify-content-between align-items-center container-fluid">
            <div className="social-links my-2 ">
              <Link>
                <i className="fa-brands mx-1 fa-facebook text-dark"></i>
              </Link>
              <Link>
                <i className="fa-brands mx-1 fa-twitter text-dark"></i>
              </Link>
              <Link>
                <i className="fa-brands mx-1 fa-github text-dark"></i>{" "}
              </Link>
              <Link>
                <i className="fa-brands mx-1 fa-linkedin text-dark"></i>{" "}
              </Link>
              <Link>
                <i className="fab mx-1 fa-google text-dark"></i>{" "}
              </Link>
            </div>

            <div className="my-2">
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="mx-2 text-dark">
                    <i className="fa-solid fa-user"></i>
                    <span> Login</span>
                  </Link>
                  <Link to="/register" className="mx-2 text-dark">
                    <span> Register</span>
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <>
                  <Link to="/profile" className="mx-2 text-black">
                    <i className="fa-solid fa-user "></i>
                    <span> Profile</span>
                  </Link>

                  <Link className="mx-2 text-black" onClick={handleLogout}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                    <span> Logout</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="d-flex align-items-center justify-content-between">
            <Link to="home">
              {
                // <img
                //   src={process.env.PUBLIC_URL + "assets/logo.png"}
                //   alt="logo"
                //   className={`${styles.logo}`}
                // />
              }
              <div className="col-lg-4 w-100 my-3">
                <Link to="/home" className="text-decoration-none">
                  <span className="h1 text-uppercase text-primary bg-dark px-2">
                    Multi
                  </span>
                  <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                    Shop
                  </span>
                </Link>
              </div>
            </Link>
            <form className={`${styles.search} d-flex w-50`} role="search">
              <select
                className={`form-select form-select-sm w-25 border-end-0 rounded-0 `}
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
                className={`form-control w-100 rounded-0 border-start-0  `}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <div className="cart d-flex">
              <Link to="/wishlist" className="btn-new p-2">
                <i className="fa-regular fa-lg fa-heart text-black"></i>
              </Link>
              <Link to="/cart" className={`${styles.btnNew} p-2`}>
                <i className="fa-solid fa-lg fa-cart-shopping text-black"></i>
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
              <i className="fa-solid fa-bars text-black"></i>
            </button>
          </div>
        </div>

        <div className="bg-dark py-2">
          {" "}
          <div
            className="offcanvas offcanvas-end align-self-start container m-auto"
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

            <div className="offcanvas-body ">
              <ul
                className={`navbar-nav ${styles.ulNavbar} d-lg-flex align-items-lg-center gap-lg-3`}
              >
                <li className="nav-item dropdown">
                  <Link
                    className="btn d-flex align-items-center justify-content-between  bg-primary"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      height: "65px",
                      padding: "0 30px",
                      width: "300px",
                    }}
                  >
                    <h6 className="text-dark m-0">
                      <i className="fa fa-bars mx-2"></i>Categories
                    </h6>
                    <i className="fa fa-angle-down text-dark mx-2"></i>{" "}
                  </Link>
                  <ul
                    className={`dropdown-menu ${styles.dropdownMenu}`}
                    style={{ padding: "0 30px", width: "300px" }}
                  >
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

                <li className="nav-item">
                  <Link
                    className={`nav-link ${styles.active}`}
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link `} aria-current="page" to="/home">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className={`nav-link `}
                    aria-current="page"
                  >
                    Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link `} aria-current="page" to="/home">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contactus"
                    className={`nav-link `}
                    aria-current="page"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
