import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from "../../component/footer/footer";

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="about-bg">
           <h1>Contact Us</h1>
            </div>
            <div className="contact-wrapper">
                <div className="contact-item border">
                    <FontAwesomeIcon className="icon" icon={faPhone} />
                    <h3>Phone</h3>
                    <p>+447349459445</p>
                </div>
                <div className="contact-item border">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <span>info@example.com</span>
                    <span>info@example.com</span>
                    <span>info@example.com</span>
                    <span>info@example.com</span>
                </div>
                <div className="contact-item border" >

                    <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                    <span>123 Main St, City, Country</span>
                </div>

            </div>

            <form>
                <h3>CONTACT US</h3>
                <h1>Get In Touch Contact Us</h1>

                <div className="form-wrapper">
                    <div>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button>Submit Message</button>
                </div>

            </form>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}