import React from "react";
import Service_form from "./components/service_form";
const Team = () => {
    return (
        <>
            <section className="align-items-center mb-5 " id="breadcrumb">
                <div aria-label="breadcrumb text-center">
                    <ol className="breadcrumb">
                        <div>
                            <span className="bread">Web Designing Services</span>
                        </div>
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                            <span aria-current="page" className="active-page">
                                {" "}
                                / Web Designing Services
                            </span>{" "}
                        </li>
                    </ol>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6 mb-2">
                                    <h3>Website design Service Overview</h3>
                                    <hr></hr>

                                    <p>
                                        Lorem Ipsum is simply Lorem Ipsum has been the industry's dummy text of the Lorem Ipsum has been the industry's printing and typesetting industry. Lorem Lorem Ipsum has been the industry's Ipsum has
                                        been the industry'sLorem Ipsum has been Lorem Ipsum has been the industry's the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                        make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                    <a href="http://bit.ly/internity_internship">
                                        <button type="button" className="btn btn-outline-success">
                                            Apply Now
                                        </button>
                                    </a>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src="blog1.jpg" alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="blog2.jpg" alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="blog3.jpg" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section text-center my-5 mt-2 container">
                <h3>Type of Programs:</h3>
                <p>We design different types of programs to achieve our vision. These programs are</p>
                <div className="row pt-3">
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5  hack">
                        <p className="text-uppercase blue-text">
                            <strong>Lorem Ipsum is simply dummy text</strong>
                        </p>
                        <p className="grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5 hack">
                        <p className="text-uppercase blue-text">
                            <strong>Lorem Ipsum is simply dummy text</strong>
                        </p>
                        <p className="grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5 hack">
                        <p className="text-uppercase blue-text">
                            <strong>Lorem Ipsum is simply dummy text </strong>
                        </p>
                        <p className="grey-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <br />
                        <div className="col text-center mt-3">
                            <h2 className="mb-5">Our Value</h2>
                        </div>
                    </div>
                    <div className="row text-center mb-5">
                        <div className="col-md-3">
                            <div className="counter">
                                <i className="fa fa-user fa-2x"></i>
                                <h2 className="mt-2">
                                    <b>5000+</b>
                                </h2>
                                <p className="count-text ">Total Students Registered</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter">
                                <i className="fa fa-building fa-2x"></i>
                                <h2 className="mt-2">
                                    <b>1200+</b>
                                </h2>
                                <p className="count-text ">Students Internship Completed</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter">
                                <i className="fa fa-user-secret fa-2x"></i>
                                <h2 className="mt-2">
                                    <b>90%</b>
                                </h2>
                                <p className="count-text ">Internity Intern Placement</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="counter">
                                <i className="fa fa-globe fa-2x"></i>
                                <h2 className="mt-2">
                                    <b>3000+</b>
                                </h2>
                                <p className="count-text ">No. of Blogs Written</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    {" "}
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 ">
                            <header className="text-center mt-5 ">
                                <h2>What intern say About Us</h2>
                            </header>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4 mb-5 mt-5 ">
                                    <div>
                                        <img src="./service1.jpg" className="img-fluid animated" width="100%" />
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5 mt-5 ">
                                    <div>
                                        <img src="./service2.jpg" className="img-fluid animated" width="100%" />
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5 mt-5 ">
                                    <div>
                                        <img src="./service3.jpg" className="img-fluid animated" width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4 mb-5 mt-5 ">
                                <div className="card">
  <div className="card-body">
  <h3>Appsapient</h3>
    <h4 className="card-title">Address  : AUSTIN</h4>
    <p className="card-text pt-3">22 Texas West Hills <br></br>needhelp@linoor.com<br></br> 666 888 000</p>
    
  </div>
</div>
 <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1656326671231!5m2!1sen!2sin"
                                        width="100%"
                                        height="450"
                                        allowfullscreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                                <div className="col-md-8 mb-5 mt-5 ">
                                    <Service_form></Service_form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
