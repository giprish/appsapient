import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_v5eEavstwLUNrm6HhF40a");

export default function ContactUs() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("internity", "template_4duwa7z", e.target, "user_v5eEavstwLUNrm6HhF40a").then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    }
    return (
        <>
            <section className="align-items-center mb-5 " id="breadcrumb">
                <div aria-label="breadcrumb text-center">
                    <ol className="breadcrumb">
                        <div>
                            <span className="bread">Contact Us</span>
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
<section >
    <div className="container">
        <div className="col-md-12"><h1>OFFICES NEAR YOU .</h1>
            <div className="row pt-5 pb-5">
                <div className="col-md-3">
                <div className="card">
  <div className="card-body">
    <h4 className="card-title">AUSTIN</h4>
    <p className="card-text pt-3">22 Texas West Hills <br></br>needhelp@linoor.com<br></br> 666 888 000</p>
    
  </div>
</div>

                </div>
                <div className="col-md-3"><div className="card">
  <div className="card-body">
    <h4 className="card-title">BOSTON</h4>
    <p className="card-text pt-3">22 Texas West Hills <br></br>needhelp@linoor.com<br></br> 666 888 000</p>
    
  </div>
</div></div>
                <div className="col-md-3"><div className="card">
  <div className="card-body">
    <h4 className="card-title">NEW YORK</h4>
    <p className="card-text pt-3">22 Texas West Hills <br></br>needhelp@linoor.com<br></br> 666 888 000</p>
    
  </div>
</div></div>
                <div className="col-md-3"><div className="card">
  <div className="card-body">
    <h4 className="card-title">BALTIMORE</h4>
    <p className="card-text pt-3">22 Texas West Hills <br></br>needhelp@linoor.com<br></br> 666 888 000</p>
    
  </div>
</div></div>
            </div>
        </div>
    </div>
</section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448183.73907005717!2d76.81307299667618!3d28.646677259922765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1656326671231!5m2!1sen!2sin"
                                        width="100%"
                                        height="300"
                                        allowfullscreen=""
                                        loading="lazy"
                                    ></iframe>
                                   
                                </div>
                                <div className="col-md-12 mb-5">
                                <h1>WRITE US A MESSAGE.</h1>
                                    <h3>We would love to be in touch with you! Please fill the form to solve your Query!</h3>
                                    <p>Please complete all information below:</p>

                                    <form onSubmit={sendEmail}>
                                        <div className="row  mx-auto">
                                            <div className="col-12 form-group mx-auto">
                                                <input type="text" className="form-control" placeholder="Name" name="name" />
                                            </div>
                                            <div className="col-12 form-group pt-2 mx-auto">
                                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                            </div>
                                            <div className="col-12 form-group pt-2 mx-auto">
                                                <input type="text" className="form-control" placeholder="phone" name="phone" />
                                            </div>
                                            <div className="col-12 form-group pt-2 mx-auto">
                                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                            </div>
                                            <div className="col-12 pt-3 mx-auto">
                                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
