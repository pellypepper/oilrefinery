import React, { useEffect, useState } from "react";
import "./service.css";
import { FaBook } from 'react-icons/fa';
import Footer from "../../component/footer/footer";
import { Link } from "react-router-dom";

export default function Refinery() {
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
            
            

            <div className="ref-bg">
                <h1>Oil Exploration </h1>
            </div>

            <div className="oil-middle">
                <div className="oil-text">
                    <div className="refinery-bg"></div>
                    <h1>Oil Exploration & Production Service</h1>
                    <p>At Taimyr Fuel Company, we are dedicated to shaping the future of energy by advancing oil exploration and production to meet the world’s growing energy demands. As global consumption continues to rise, the need to explore new energy sources and optimize existing reserves has never been more critical. Our Exploration & Production (E&P) services are at the forefront of discovering, extracting, and delivering high-quality crude oil from the abundant and untapped reserves of Krasnoyarsk, a region with vast potential to contribute significantly to the global energy supply.</p>
                    <p>The foundation of our operations is built upon leveraging the latest technological innovations and the expertise of our highly skilled team of professionals. These strengths enable us to explore complex and challenging geological formations, unlocking reserves that might otherwise remain inaccessible. By utilizing advanced seismic imaging, 3D modeling, and data analytics, we make informed, precise decisions about drilling locations and methodologies. This approach not only enhances the efficiency and safety of our operations but also minimizes environmental impact.</p>
                    <p>Through the integration of cutting-edge technologies and sustainable practices, Taimyr Fuel Company maximizes production from existing reservoirs while exploring new opportunities for energy development. Our commitment to innovation and operational excellence ensures that we continue to meet the growing energy needs of the world while contributing to a more sustainable future.</p>
                </div>

                <div className="side-bar">
                    <h3>Service Category</h3>
                    <p className="border-bt"></p>
                    <div className={`item-wrapper ${isVisible ? 'visible' : ''}`}>
                        <div className="service-item">
                            <FaBook className="item-icon" />
                            <h3>Oil Exploration Service</h3>
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
    );
}
