import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import useAuth from './../../../auth/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const { user, registerUser, signInWithGoogle, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.id;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate);
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
                                <p className="text-danger display-5">Register</p>
                                <small>Create an account and discover all the latest collections.</small>
                            </div>
                            <div className="my-4">
                                <input
                                    onBlur={handleOnBlur}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="my-4">
                                <input
                                    onBlur={handleOnBlur}
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="my-4">
                                <input
                                    onBlur={handleOnBlur}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="my-4">
                                <input
                                    onBlur={handleOnBlur}
                                    type="password"
                                    className="form-control"
                                    id="password2"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                            {authError && <small className='text-danger'>{authError}</small>}
                            <button className="btn btn-danger mb-2 col-12">
                                <i className="fas fa-sign-in-alt"></i> Register
                            </button>
                            <p className="my-3">
                                Already have an account?{" "}
                                <Link className="text-decoration-none" to="/login">
                                    <li className="btn btn-outline-danger">Login</li>
                                </Link>
                            </p>
                            <hr />
                            <p className="fs-5 btn btn-outline-danger" onClick={handleGoogleSignIn}>
                                <i className=" fab fa-google"></i> Register with Google
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;