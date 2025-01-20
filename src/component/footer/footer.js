import React from "react";
import { FaArrowRight } from "react-icons/fa";
import './footer.css';
import { Link } from 'react-router-dom';
import { Suspense } from "react";
import LocationMap from "../locationMap";


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

                    <p><Link to="/about"><span><FaArrowRight color="white" /></span>About Us</Link></p>
                    <p><span><FaArrowRight color="white" /></span>Our Services</p>
                    <p><Link to="/hseq"><span><FaArrowRight color="white" /></span>HSEQ</Link></p>
                    <p><Link to="/contact"><span><FaArrowRight color="white" /></span>Contact Us</Link></p>


                </div>

                <div className="grid-3">
                    <h3>Services</h3>

                    <p><Link to=""><span><FaArrowRight color="white" /></span>Oil Refinery</Link></p>
                    <p><Link to=""><span><FaArrowRight color="white" /></span>Tank Storage</Link></p>
                    <p><Link to="/refinery"><span><FaArrowRight color="white" /></span>Oil Exploration</Link></p>


                </div>

                <div className="grid-4">
                    <h3>Location</h3>
                    <div className="map-frame">
                    <Suspense fallback={<div>Loading map...</div>}>
                    <LocationMap />
                    </Suspense>
                    </div>
                </div>



            </div>
            <p className="footer-text"><span>C</span> Taimyr Fuel Company. All Right Reserved</p>
        </div>
    )

}