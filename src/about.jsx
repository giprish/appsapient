import React from "react";

const About = () => {
    return (
        <>
            <section className="align-items-center mb-5 " id="breadcrumb">
                <div aria-label="breadcrumb text-center">
                    <ol className="breadcrumb">
                        <div>
                            <span className="bread">About Us</span>
                        </div>
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                            <span aria-current="page" className="active-page">
                                {" "}
                                / Contact Us
                            </span>{" "}
                        </li>
                    </ol>
                </div>
            </section>

            <main>
                <div className="container mt-4 mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid rounded z-depth-2" src="featured-image-7.87409611.jpg" alt="sample" />
                        </div>

                        <div className="col-lg-6">
                            <h1>MAKE WEBSITES WITHOUT TOUCHING THE CODING.</h1>
                            <p className="mt-4 mt-lg-0">
                                We are committed to providing our customers with exceptional service while offering our employees the best training. There are many variations of passages of lorem ipsum is simply free text available in the
                                market, but the majority have suffered time.
                            </p>

                            <h2 className="h1-responsive font-weight-bold mb-3">OUR WHY, WHAT AND HOW ANALOGY</h2>

                            <div>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#home">
                                            <b>WHY?</b>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu1">
                                            <b>WHAT?</b>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#menu2">
                                            <b>How?</b>
                                        </a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div id="home" className="container tab-pane active">
                                        <br />

                                        <p>Lorem ipsum is not dolor sit amet, consectetur notted.Lorem ipsum is not dolor sit amet, consectetur notted.</p>
                                    </div>
                                    <div id="menu1" className="container tab-pane fade">
                                        <br />

                                        <p>Lorem ipsum is not dolor sit amet, consectetur notted.Lorem ipsum is not dolor sit amet, consectetur notted.</p>
                                    </div>
                                    <div id="menu2" className="container tab-pane fade">
                                        <br />

                                        <p>Lorem ipsum is not dolor sit amet, consectetur notted.Lorem ipsum is not dolor sit amet, consectetur notted. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className="aboutbg about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src="feb.png" className="img-fluid rounded z-depth-2" alt="sample" width={150} />
                            <h1>
                                GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. <span className="inner">THEY’RE DONE BY A TEAM OF PEOPLE.</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team pt-4 pb-5">
                <div className="container  ">
                    <h1>MEET THE EXPERT TEAM.</h1>
                    <div className="row pt-5 ">
                        <div className="col-lg-3">
                            <img className="img-fluid rounded z-depth-2" src="team1.jpg" alt="sample" />
                            <h5 className="pt-3">Michelle Doe</h5>

                            <p>You can relay on our amazing features list and also our customer services will be great experience</p>
                            <div classNamw="mt-4">
                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <img className="img-fluid rounded z-depth-2" src="team2.jpg" alt="sample" />
                            <h5 className="pt-3">Michelle Doe</h5>

                            <p>You can relay on our amazing features list and also our customer services will be great experience</p>
                            <div classNamw="mt-4">
                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <img className="img-fluid rounded z-depth-2" src="team3.jpg" alt="sample" />
                            <h5 className="pt-3">Michelle Doe</h5>

                            <p>You can relay on our amazing features list and also our customer services will be great experience</p>
                            <div classNamw="mt-4">
                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <img className="img-fluid rounded z-depth-2" src="team4.jpg" alt="sample" />
                            <h5 className="pt-3">Michelle Doe</h5>

                            <p>You can relay on our amazing features list and also our customer services will be great experience</p>
                            <div classNamw="mt-4">
                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-linkedin"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-twitter"></i>
                                </a>

                                <a type="button" className="btn btn-floating btn-warning btn-lg">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-5 mb-5 testi">
                <div className="container">
                    <div className="row">
                        <div class="col-md-6">
                            <h1>WHAT OUR CUSTOMERS ARE TALKING ABOUT.</h1>
                        </div>
                        <div class="col-md-6">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="accordion d-flex justify-content-center align-items-center height" id="accordionExample">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="p-3">
                                    <ul class="testimonial-list">
                                       <li>
                                            <div class="card p-3" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                <div class="d-flex flex-row align-items-center">
                                                    <img src="https://i.imgur.com/udGH5tO.jpg" width="50" class="rounded-circle" />

                                                    <div class="d-flex flex-column ml-2">
                                                        <span class="font-weight-normal">John Reeves</span>
                                                        <span>Head of Sales, Asana</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div class="card p-3" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <div class="d-flex flex-row align-items-center">
                                                    <img src="https://i.imgur.com/Uz4FjGZ.jpg" width="50" class="rounded-circle" />

                                                    <div class="d-flex flex-column ml-2">
                                                        <span class="font-weight-normal">Luke Harper</span>
                                                        <span>Sales Team Lead,Sketch</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="card p-3" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <div class="d-flex flex-row align-items-center">
                                                    <img src="https://i.imgur.com/G1pXs7D.jpg" width="50" class="rounded-circle" />

                                                    <div class="d-flex flex-column ml-2">
                                                        <span class="font-weight-normal">Milton Austin</span>
                                                        <span>Sales Manager, Stack</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="p-3 testimonials-margin">
                                    

                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <h4>Thanks for this great service</h4>
                                            <div class="ratings">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam.
                                            </p>
                                        </div>
                                    </div>

                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <h4>You all are awesome thanks alot</h4>
                                            <div class="ratings">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <h4>It was a great experience</h4>
                                            <div class="ratings">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
