import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const auth = getAuth();

  const { googleLogIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleRegister = () => {
    googleLogIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroR, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center my-5">
        <div className="col-12 col-md-9 col-lg-6 shadow bg-light rounded p-5 mx-auto">
          <form onSubmit={handleRegistration}>
            <p className="text-danger display-5 text-center">Register</p>
            <div>
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your email"
                required
              />
            </div>
            <div className="my-3">
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Your password"
                required
              />
            </div>
            <small className="text-danger">{erroR}</small>
            <button className="btn btn-danger mb-2 col-12">
              <i className="fas fa-sign-in-alt"></i> Register
            </button>
            <p className="my-3">
              Already have an account?{" "}
              <Link className="text-decoration-none text-color" to="/login">
                <li className="btn btn-outline-danger">Login</li>
              </Link>
            </p>
            <hr />
            <p className="fs-5 btn btn-outline-danger" onClick={handleGoogleRegister}>
              <i className=" fab fa-google"></i> Register with Google
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;