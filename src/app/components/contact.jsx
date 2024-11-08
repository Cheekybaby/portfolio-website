import React from "react";
import ContactForm from "./contactForm";
// import SocialLinks from "./socialLinks";
const Contact = () => {
    return (
        <>
            <div className="pt-20 flex flex-col items-center" id="contact">
                <h1 className="text-3xl lg:text-5xl">Contact Me</h1>
                <p className="text-lg pt-5 w-96 text-center mb-10">
                    Fill out the form below and I will get back to you as soon as possible
                </p>
                <div className="w-full flex justify-center">
                    <ContactForm />
                </div>
            </div>
        </>
    );
};


export default Contact;