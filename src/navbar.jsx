import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div classNameName="container-fluid nav_bg">
                <div classNameName="row">
                    <div classNameName="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            
                                <NavLink className="navbar-brand" to="/">
                                    <img src="./logo.png" width="170" />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">
                                                About Us
                                            </NavLink>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Services
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <NavLink className="dropdown-item" to="/web_designing_services">
                                                    Web Designing
                                                </NavLink>

                                                <NavLink className="dropdown-item" to="/web_development_services">
                                                    Web Development
                                                </NavLink>
                                                <NavLink className="dropdown-item" to="/application_development">
                                                    Mobile Application Development
                                                </NavLink>
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/blog">
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/faq">
                                                FAQs
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">
                                                Contact Us
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">
                                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                           
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
