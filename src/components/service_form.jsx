import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_v5eEavstwLUNrm6HhF40a");

export default function Service_form() {
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


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                
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
