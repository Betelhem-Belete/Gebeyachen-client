import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <a className="navbar-brand me-auto" href="/">
          <i className="fa-solid fa-cart-shopping"></i>
          Gebayachn
        </a>
        <div className="search">
          <form className="d-flex flex-grow-1">
            <input
              className="form-control flex-grow-1"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "400px" }}
            />
          </form>
        </div>
        <div className="btns">
          <button className="btn btn-light ms-3">
            <Link to="login">Login</Link>
          </button>
        </div>
        <div className="bar">
          <i
            className="fa-solid fa-bars"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          ></i>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h3 className="offcanvas-title" id="offcanvasExampleLabel">
                <a className="navbar-brand1 me-auto" href="/">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Gebayachn
                </a>
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <div className="search1">
                {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                <input
                  className="form-control d-flex flex-grow-1"
                  type="search"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "400px" }}
                />

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Search Any Item
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <input
                          className="form-control d-flex flex-grow-1"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          style={{ width: "400px" }}
                        />
                        <div className="search_results">tati</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns1">
                <button className="btn btn-light ms-3">
                  <Link to="/login">
                    <i class="fa-solid fa-lock"></i>Login
                  </Link>
                </button>
              </div>
              <div className="btns1">
                <button className="ms-3">
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  Select Location
                </button>
              </div>
              {/* <!-- Button trigger modal --> */}

              {/* </div> */}
              <hr />
              <ul className="pop_list">
                <li>
                  <i className="fa-solid fa-house" href="/"></i>Home
                </li>
                <li>
                  <Link to="/catagory">
                    <i className="fa-solid fa-shop"></i>Shop
                  </Link>
                </li>
                <li>
                  <Link to="/catagory">
                    <i className="fa-solid fa-store"></i>Store
                  </Link>
                </li>
                <li>
                  <Link to="/catagory">
                    <i className="fa-solid fa-book"></i>Mega Menu
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-paperclip" href="/"></i>Pages
                </li>
                <li>
                  <Link to="/user">
                    <i className="fa-solid fa-user"></i>Account
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <i className="fa-solid fa-gear"></i>Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/user">
                    <i className="fa-solid fa-truck-fast"></i>Deliver
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="snav">
        <ul>
          <li href="/">Home</li>
          <li>
            <Link to="/catagory"> Category</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="service"> Service</Link>
          </li>
        </ul>
        <button>
          <Link to="/dashboard" className="b">
            Dashboard
          </Link>
        </button>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
