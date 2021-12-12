import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

const Footer = () => {
  return (
    <div className="bg-light">
      <div className="container pb-2">
        <div className="row justify-content-between">
          <div className="col-md-4 pt-4">
            <Link className="navbar-brand text-danger fw-bold fs-4" to="/home">
              <img
                className="img-fluid me-2 pb-1"
                width="45"
                src={logo}
                alt="Logo here"
              />
              Jad Travels
            </Link>
            <br />
            <small className="py-2 text-dark">
              A solid and “believed” travel brand of Bangladesh, our qualities incorporate a vast and faithful client base, a multi-channel stage for relaxation and business explorers, a powerful portable eco-framework for a range of voyagers and providers.
            </small>

            <br />
            <div className="fs-5 pt-0 mt-2">
              <Link to="/notfound">
                <i className="fab fa-facebook-f text-dark icon-color pe-4"></i>
              </Link>{" "}
              <Link to="/notfound">
                <i className="fab fa-twitter text-dark icon-color pe-4"></i>
              </Link>
              <Link to="/notfound">
                <i className="fab fa-youtube text-dark icon-color pe-4"></i>
              </Link>{" "}
            </div>
          </div>
          <div className="col-md-3 pt-4 mt-2">
            <span className="text-danger fs-5 pb-3 fw-bold">Quick Links</span>
            <Link
              className="text-decoration-none d-block text-dark hover-text mt-2"
              to="/home"
            >Home</Link>
            <Link
              className="text-decoration-none d-block text-dark hover-text mt-2"
              to="/about"
            >About</Link>
            <Link
              className="text-decoration-none d-block text-dark hover-text mt-2"
              to="/tours"
            >Tours</Link>
            <Link
              className="text-decoration-none d-block text-dark hover-text mt-2"
              to="/contact"
            >Contact</Link>
          </div>
          <div className="col-md-4 pt-4 mt-2">
            <span className="text-danger fs-5 fw-bold">Contact Us</span>
            <span className="d-block text-dark mt-3">
              <i className="fas fa-map-marker-alt"></i>{" "}
              Baridhara, Dhaka, Bangladesh
            </span>
            <span className="d-block text-dark mt-3">
              <i className="fas fa-phone-alt"></i> +880 1612202520
            </span>
            <span className="d-block text-dark mt-3">
              <i className="fas fa-envelope"></i> shehjadcse@gmail.com
            </span>
            {/* <div className="mt-3">
              <span className="text-color pt-3">Follow Us</span>
              <div className="fs-5 pt-0">
                <Link to="/notfound">
                  <i className="fab fa-facebook-f text-dark icon-color pe-4"></i>
                </Link>{" "}
                <Link to="/notfound">
                  <i className="fab fa-twitter text-dark icon-color pe-4"></i>
                </Link>
                <Link to="/notfound">
                  <i className="fab fa-youtube text-dark icon-color pe-4"></i>
                </Link>{" "}
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-1 mb-2 text-center">
          <span className="text-dark">
            <span className="text-color">&copy; 2021 Shehjad. </span>
            All Rights Reserved.
          </span>
        </div>

      </div>
    </div>
  );
};

export default Footer;