import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import { FaBook } from 'react-icons/fa';
import Footer from "../../component/footer/footer";
import { useEffect, useState} from "react";

export default function Oil() {
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
              }
            });
          },
          {
            threshold: 0.1
          }
        );
    
        const elements = document.querySelectorAll('.oil-middle > *');
        elements.forEach(el => observer.observe(el));
    
        return () => observer.disconnect();
      }, []);
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
      }, []);
    return (
        <div className="oil-container">

            <div className="about-bg">
            <h1>Oil Refining</h1>
            </div>

            <div className="oil-middle">

                <div className="oil-text">
                    <div className="oil-bg">

                    </div>

                    <h1>Oil Refining</h1>
                    <p>At Taimyr Fuel Company, we employ state-of-the-art refining processes to convert raw crude oil into a diverse range of high-value petroleum products. Our advanced refining technologies enable us to produce premium-quality fuels, including diesel, gasoline, kerosene, jet fuel, and lubricants. These products are vital for powering industries, transportation systems, and households worldwide. Every product undergoes stringent refining procedures to ensure it complies with the highest environmental and quality standards, meeting both local and international regulations.

                    </p>
                    <p>Efficiency and precision are at the core of our refinery operations. We consistently invest in innovative technologies to enhance production output while minimizing emissions and waste. Our facilities are designed to operate at peak capacity, ensuring we can meet market demands swiftly and cost-effectively. This unwavering commitment to operational excellence guarantees that our customers receive reliable, top-tier fuel products to power their businesses and drive progress.</p>
                </div>

                <div className="side-bar">

                    <h3>Service Category</h3>
                    <p className="border-bt"></p>

                    <div className={`item-wrapper ${isVisible ? 'visible' : ''}`}>
                        <div className="service-item">
                            <FaBook className="item-icon" />
                            <h3><Link to="/refinery">Oil Exploration</Link></h3>
                        </div>
                        <div className="service-item">
                            <FaBook className="item-icon" />
                            <h3><Link to="/tank">Tank Storage Service</Link></h3>
                        </div>
                        <div className="service-item">
                            <FaBook className="item-icon" />
                            <h3><Link to="/oil">Oil Refining Service</Link></h3>
                        </div>
                    </div>

                </div>

            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}