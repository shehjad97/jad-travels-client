import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/NotFound.jpg";
import Footer from "../../components/Footer/Footer";
import Header from './../../components/Header/Header';

const NotFound = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-5">
            <img className="img-fluid" src={error} alt="error page" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h4 className="text-danger">OOPS! SORRY WE CAN'T FIND THE PAGE!</h4>
              <p className="text-dark fs-5">
                Want to go back?
              </p>
              <Link className="btn btn-danger btn-md" to="/home">
                <i className="fas fa-arrow-right"></i> Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;