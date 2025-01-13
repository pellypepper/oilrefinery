import React from "react";
import './about.css';
import Footer from "../../component/footer/footer";


export default function About() {
    return (
        <div className="about">
              <div className="about-bg">
              <h1>About Us</h1>
              </div>

              <div className="about-middle">
                  <div className="about-text">
                  <h1>Fostering Innovation and Excellence in Krasnoyarsk’s Oil Sector</h1>
                  <p>Taimyr Fuel Company is a leading oil Mandate facilitator situated in Krasnoyarsk. As a vital player in the region's energy landscape, we focus on bringing buyers and seller company supplying high-quality petroleum products from a reputable refining company to satisfy both local and global demands. Our advantageous location, state-of-the-art technology, and dedication to sustainable energy practices establish us as a frontrunner in oil.</p>
                  <button>Learn More</button>
                  </div>

                  <div className="about-bg2">

                  </div>
              </div>


              <footer>
                <Footer />
              </footer>


      
        </div>
    )
}