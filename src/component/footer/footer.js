import React from "react";
import { FaArrowRight } from "react-icons/fa";
import './footer.css';
import { Link } from 'react-router-dom';



export default function Footer() {
    

    return (
        <div className="footer-wrapper">

<div className="footer-container">

<div className="grid-1">
    <h3>About Us</h3>
    <p>Taimyr Fuel Company is a leading oil refinery and tank storage facility based in Krasnoyarsk, Russia. As a vital player in the region's energy sector, we focus on refining and distributing premium petroleum products to fulfill the needs of both domestic and international markets.</p>

</div>

<div className="grid-2">
    <h3>Quick Links</h3>

        <p><Link to="/about"><span><FaArrowRight  color="white" /></span>About Us</Link></p>
        <p><span><FaArrowRight  color="white" /></span>Our Services</p>
        <p><Link to="/hseq"><span><FaArrowRight  color="white" /></span>HSEQ</Link></p>
        <p><Link to="/contact"><span><FaArrowRight  color="white" /></span>Contact Us</Link></p>


</div>

<div className="grid-3">
    <h3>Services</h3>
    
    <p><Link to=""><span><FaArrowRight  color="white" /></span>Oil Refinery</Link></p>
    <p><Link to=""><span><FaArrowRight  color="white" /></span>Tank Storage</Link></p>
    <p><Link to="/refinery"><span><FaArrowRight  color="white" /></span>Oil Exploration</Link></p>


</div>

<div className="grid-4">
    <h3>Location</h3>
    <div>
    <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.5923996872893!2d92.86905987669368!3d56.00841267317989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7ae39587ca113%3A0xbbad0e3605e3c0e6!2sBograda%20St%2C%20Krasnoyarsk%2C%20Krasnoyarskiy%20kray%2C%20Russia%2C%20660049!5e0!3m2!1sen!2suk!4v1736279444174!5m2!1sen!2suk"
className='map-frame'
style={{ border: 0 }}
allowFullScreen
loading="lazy"
title="Description of iframe content"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
    </div>
</div>



</div>
<p className="footer-text"><span>C</span> Taimyr Fuel Company. All Right Reserved</p>
        </div>
    )

}