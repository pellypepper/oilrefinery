import React from "react";
import "./service.css";
import { FaBook } from 'react-icons/fa';
import Footer from "../../component/footer/footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Tank() {
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
            <h1>Tank Storage Service </h1>
            </div>

            <div className="oil-middle">

                <div className="oil-text">
                    <div className="tank-bg">

                    </div>

                    <h1>Tank Storage Service</h1>
                     <p>At Taimyr Fuel Company, our state-of-the-art tank farm is meticulously designed to provide flexible and secure storage solutions tailored to the diverse needs of our clients. With a total storage capacity of 22,000 m³ (138,376 barrels), our facility is equipped to store both crude oil and refined petroleum products, making it an ideal partner for a variety of storage requirements. Our infrastructure is optimized to support both short-term and long-term storage needs.</p>
                  
                  <p>Our facility features 12 tanks of varying sizes, ranging from 1,000 m³ (6,290 barrels) to 5,000 m³ (31,449 barrels), ensuring the flexibility to accommodate different product volumes. This diversity allows us to store multiple products simultaneously, with dedicated tanks assigned to maintain the quality and integrity of each product.</p>
                  <p>In addition to the tank farm, Taimyr Fuel Company is equipped with 10 loading stations, enabling efficient product handling and seamless transfer processes. Our logistics are further enhanced by 1 dedicated track, capable of managing 10 wagons simultaneously, ensuring smooth and timely transportation of stored products. This configuration minimizes delays and optimizes the overall operational efficiency of our terminal.</p>
                  <p>By combining cutting-edge storage infrastructure with robust logistical capabilities, we provide clients with safe, efficient, and reliable services at every stage—whether storing, handling, or transporting products. Whether your requirements are small-scale or large-scale, Taimyr Fuel Company is committed to delivering customized solutions with precision and care, ensuring your operational success.</p>
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