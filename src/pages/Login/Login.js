import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const auth = getAuth();
  const { googleLogIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
          <form onSubmit={handleLogin}>
            <p className="text-danger display-5 text-center">Login</p>
            <div>
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Your email"
              />
            </div>
            <div className="my-3">
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Your password"
              />
            </div>
            <small className="text-danger">{erroR}</small>
            <button className="btn btn-danger mb-2 col-12">
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
            <p className="my-3">
              New here?{" "}
              <Link className="text-decoration-none text-color" to="/register">
                <li className="btn btn-outline-danger">Register</li>
              </Link>
            </p>
            <hr />
            <p className="fs-5 btn btn-outline-danger" onClick={handleGoogleLogin}>
              <i className=" fab fa-google"></i> Login with Google
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;