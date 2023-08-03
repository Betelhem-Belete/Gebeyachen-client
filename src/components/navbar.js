import React from "react";
import "./navbar.css";
// import { Avatar, Stack } from "@chakra-ui/react";

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
          <button className="btn btn-light ms-3">Login</button>
        </div>
        {/* <div>
          <Stack direction="row" m={3} cursor="pointer">
            <Avatar size="sm" src="https://bit.ly/broken-link" />
          </Stack>
        </div> */}
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
                  data-bs-target="#exampleModal_search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ width: "400px" }}
                />

                <div
                  class="modal fade"
                  id="exampleModal_search"
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
                        <div className="search_results">tai</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns1">
                <button className="btn btn-light ms-3">
                  <i class="fa-solid fa-lock"></i>Login
                </button>
              </div>
              <div className="btns1">
                <button
                  className="ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <span>
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  Select Location
                </button>
              </div>
              {/* <!-- Button trigger modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning"
                        id="savechng"
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <ul className="pop_list">
                <li>
                  <i className="fa-solid fa-house"></i>Home
                </li>
                <li>
                  <i className="fa-solid fa-shop"></i>Shop
                </li>
                <li>
                  <i className="fa-solid fa-store"></i>Store
                </li>
                <li>
                  <i className="fa-solid fa-book"></i>Mega Menu
                </li>
                <li>
                  <i className="fa-solid fa-paperclip"></i>Pages
                </li>
                <li>
                  <i className="fa-solid fa-user"></i>Account
                </li>
                <li>
                  <i className="fa-solid fa-gear"></i>Dashboard
                </li>
                <li>
                  <i className="fa-solid fa-truck-fast"></i>Deliver
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="snav">
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Service</li>
        </ul>
        <button>Dashboard</button>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
