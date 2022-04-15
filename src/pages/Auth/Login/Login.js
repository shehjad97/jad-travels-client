import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import useAuth from './../../../auth/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.id;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }

    const redirect = () => {
        navigate('/home')
    }

    return (
        <>
            {user?.email && redirect()}
            <Header></Header>
            <div className="container my-5">
                <div className="row justify-content-center my-5">
                    <div className="col-12 col-md-9 col-lg-6 shadow bg-light rounded p-5 mx-auto">
                        <form onSubmit={handleLoginSubmit}>
                            <div className="text-center">
                                <p className="text-danger display-5">Login</p>
                                <small>Enter your e-mail and password to access our collections.</small>
                            </div>
                            <div className='my-4'>
                                <input
                                    onBlur={handleOnChange}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your email"
                                />
                            </div>
                            <div className="my-4">
                                <input
                                    onBlur={handleOnChange}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Your password"
                                />
                            </div>
                            {authError && <small className='text-danger'>{authError}</small>}
                            <button className="btn btn-danger mb-2 col-12">
                                <i className="fas fa-sign-in-alt"></i> Login
                            </button>
                            <p className="my-3">
                                New here?{" "}
                                <Link className="text-decoration-none" to="/register">
                                    <li className="btn btn-outline-danger">Register</li>
                                </Link>
                            </p>

                            <hr />
                            <p className="fs-5 btn btn-outline-danger" onClick={handleGoogleSignIn}>
                                <i className=" fab fa-google"></i> Login with Google
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;