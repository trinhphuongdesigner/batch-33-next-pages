import Image from 'next/image';
import React from 'react';

function Header(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center p-2 b25 text-light">
          <div className="col-md-3  d-none d-md-block h6"> (+91) 000-00-00-00</div>
          <div className="col-md-3  d-none d-md-block h5 text-center">
            {' '}
            Welcome to our store
          </div>
          <div className="col-6 col-md-2  d-block">
            <select
              className="custom-select bg-dark text-white"
              style={{ border: "none"}}
              defaultValue="0"
            >
              <option value="0">RUPEE</option>
              <option value="1">USD</option>
            </select>
          </div>
          <div className=" col-6 col-md-2 d-block">
            <select
              className="custom-select bg-dark text-white"
              style={{ border: "none"}}
              defaultValue="0"
            >
              <option value="0">ENGLISH</option>
              <option value="1">BENGALI</option>
            </select>
          </div>
          <div className="col-md-2 col-lg-2 d-none d-md-block  ">
            <button
              type="button"
              className="btn btn-outline-dark b25 text-white float-right"
            >
              Wishlist <span className="badge badge-light">0</span>
            </button>
          </div>
        </div>

        <div className="row b1  align-items-center p-1  text-light">
          <div className="col-6 col-md-2 ">
            <a href="#" className="link ml-1">
              <Image
                src="https://icons-for-free.com/iconfiles/png/512/diamond-131979105288827632.png"
                alt=""
                loading="lazy"
                width="40"
                height="40"
              />
            </a>
          </div>
          <div className="col-md-8  d-none d-md-block ">
            <form className="form-inline float-right mr-3">
              <input
                className="form-control mr-sm-2 bg-dark border-dark text-danger btn-outline-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn b1  btn-outline-dark my-2 my-sm-0  text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-6 col-md-2 pr-3 ">
            <div className="dropdown float-right ">
              <button
                className="btn b1 text-white dropdown-toggle  btn-outline-dark"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                My account
              </button>
              <div
                className="dropdown-menu dropdown-menu-right "
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Login
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                >
                  Register
                </a>
                <a className="dropdown-item" href="#">
                  My Orders
                </a>
                <a className="dropdown-item" href="#">
                  Account Settings
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-xl navbar-dark b25">
              <button
                className="navbar-toggler "
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{
                  outline: "none",
                  border: "none",
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto  ">
                  <li className="nav-item dropdown text-center mx-0 mx-lg-3">
                    <a
                      className="nav-link dropdown-toggle text-light"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#depart">
                        Shop by Department
                      </a>
                      <a className="dropdown-item" href="#special">
                        Special Offers
                      </a>
                      <a className="dropdown-item" href="#newOffers">
                        New
                      </a>
                      <a className="dropdown-item" href="#weTogether">
                        We are in this together
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown text-center mx-0 mx-lg-3">
                    <a
                      className="nav-link dropdown-toggle text-light"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Shipping
                      </a>
                      <a className="dropdown-item" href="#">
                        Term & Conditions
                      </a>
                      <a className="dropdown-item" href="#">
                        About Company
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown text-center mx-0 mx-lg-3">
                    <a
                      className="nav-link dropdown-toggle text-light"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Contact
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-left"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Contact Us
                      </a>
                      <a className="dropdown-item" href="#">
                        Live chat
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
