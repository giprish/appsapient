import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer className="bg-lightf">
                <div className="container p-4 pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3">
                                    <NavLink className="navbar-brand" to="/">
                                        <img src="./logo.png" width="220" />
                                    </NavLink>
                                    <br></br>
                                    <p>Welcome to our web design agency. Lorem ipsum simply free text dolor sited amet cons cing elit.</p>

                                    <div classNamw="mt-4">
                                        <a type="button" className="btn btn-floating btn-warning btn-lg">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>

                                        <a type="button" className="btn btn-floating btn-warning btn-lg">
                                            <i className="fab fa-dribbble"></i>
                                        </a>

                                        <a type="button" className="btn btn-floating btn-warning btn-lg">
                                            <i className="fab fa-twitter"></i>
                                        </a>

                                        <a type="button" className="btn btn-floating btn-warning btn-lg">
                                            <i className="fab fa-google-plus-g"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="text-uppercase mb-4">Quick Links</h4>

                                    <NavLink className="nav-link" to="/about">
                                        About Us
                                    </NavLink>
                                    <NavLink className="nav-link" to="/internship">
                                        Web Designing
                                    </NavLink>
                                    <NavLink className="nav-link" to="/cpsquad">
                                        Web Development
                                    </NavLink>
                                    <NavLink className="nav-link" to="/cpsquad">
                                        Application Development
                                    </NavLink>
                                    <NavLink className="nav-link" to="/cpsquad">
                                        Digital Marketing
                                    </NavLink>
                                    <NavLink className="nav-link" to="/contact">
                                        Contact Us
                                    </NavLink>
                                </div>

                                <div className="col-md-3">
                                    <h4 className="text-uppercase mb-4">Connect</h4>

                                    <ul className="fa-ul">
                                        <li className="mb-3">
                                            <span className="fa-li">
                                                <i className="fas fa-home"></i>
                                            </span>
                                            <span className="ms-2">New York, NY 10012, US</span>
                                        </li>
                                        <li className="mb-3">
                                            <span className="fa-li">
                                                <i className="fas fa-envelope"></i>
                                            </span>
                                            <span className="ms-2">info@example.com</span>
                                        </li>
                                        <li classame="mb-3">
                                            <span className="fa-li">
                                                <i className="fas fa-phone"></i>
                                            </span>
                                            <span className="ms-2">+ 01 234 567 88</span>
                                        </li>
                                        <li className="mb-3">
                                            <span className="fa-li  ">
                                                <i className="fas fa-print "></i>
                                            </span>
                                            <span className="ms-2">+ 01 234 567 89</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="text-uppercase mb-4">Subscribe today</h4>

                                    <div>
                                        <h2 className="subtitle">Never miss About us</h2>

                                        <input type="text" className="mail" placeholder="Your email address" name="mail" required />
                                        <input type="submit" value="Subscribe" class="subscribe" />
                                        <p className="text">We won’t send you spam. Unsubscribe at any time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3">
                    <hr></hr>© 2022 Copyright:
                    <a className="text-dark" href="#">
                        {" "}
                        APPSAPIENT
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Footer;
