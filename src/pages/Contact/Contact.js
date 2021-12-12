import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">
        <div className="col-12 col-md-9 col-lg-6 mx-auto">
          <form className="row g-3 p-3 rounded shadow bg-light">
            <h1 className="text-danger text-center mt-3 display-5">Get In Touch</h1>
            <div className="d-flex justify-content-between flex-wrap flex-lg-nowrap">
              <input
                type="text"
                className="form-control mx-1 mb-1"
                id="inputFirstName="
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="form-control mx-1 mb-1"
                id="inputLastName="
                placeholder="Last Name"
                required
              />
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-lg-nowrap">
              <input
                type="email"
                className="form-control mx-1 mb-1"
                id="inputEmail="
                placeholder="Email"
                required
              />
              <input
                type="email"
                className="form-control mx-1 mb-1"
                id="inputPhone="
                placeholder="Phone"
                required
              />
            </div>

            <div class="mb-3">
              <textarea class="form-control m-1" id="formControlTextarea1" placeholder="Comment" rows="4"></textarea>
            </div>

            <div className="col-12 mb-3 m-1">
              <Link to="/notfound" type="submit" className="btn btn-danger w-100">
                Send
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;