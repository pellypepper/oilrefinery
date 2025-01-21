

import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import './home.css';
import LocationMap from '../../component/locationMap';
import { Link } from 'react-router-dom';
// Lazy load components

const Rating = lazy(() => import('../../component/rating/rating'));
const Footer = lazy(() => import('../../component/footer/footer'));

// Declare sections before using them
const sections = [
  { id: 'hero', image: '/assets/card1.webp', ariaLabel: 'Welcome section' },
  { id: 'mission', image: '/assets/bg2.webp', ariaLabel: 'Our mission and vision' },
  { id: 'about', image: '/assets/bg3.webp', ariaLabel: 'About our company' },
  { id: 'services', image: '', ariaLabel: 'Our services' },
  { id: 'ratings', image: '', ariaLabel: 'Customer ratings' },
  { id: 'location', image: '', ariaLabel: 'Our location' },
  { id: 'footer', image: '', ariaLabel: 'Footer' },
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState([]);
  const [loadedBackgrounds, setLoadedBackgrounds] = useState(Array(sections.length).fill(false));
  const sectionRefs = useRef([]);

  // Intersection Observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = sectionRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          setVisibleSections((prev) => [...new Set([...prev, index])]);

          if (!loadedBackgrounds[index] && sections[index].image) {
            setLoadedBackgrounds((prev) => {
              const newLoadedBackgrounds = [...prev];
              newLoadedBackgrounds[index] = true; // Mark this background as loaded
              return newLoadedBackgrounds;
            });
          }
        }
      });
    }, observerOptions);

    const elements = sectionRefs.current.filter(Boolean);
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [loadedBackgrounds]);

  return (
    <main>
      <article className="home-content">
        <div className="content-container">
          {sections.map((section, index) => (
            <section
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`section ${visibleSections.includes(index) ? 'active' : ''}`}
              aria-label={section.ariaLabel}
              style={{
                backgroundImage: loadedBackgrounds[index] && section.image ? `url(${section.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Section content */}
              {index === 0 && (
                <div className="content-1 text-content">
                  <h1>TAIMYR FUEL</h1>
                  <h2>Pioneering Energy <span>Solutions</span></h2>
                  <h3>in Krasnoyarsk</h3>
                  <button aria-label="Learn more about our company" className="focus:ring-2 hover:bg-opacity-90">
                   <Link to="/about">Learn More</Link>
                  </button>
                  <p>
                    At Taimyr Fuel Company, we are a premier oil refining and storage facility located in the heart of
                    Kazakhstan, strategically positioned to fulfill the region's increasing energy requirements.
                  </p>
                </div>
              )}
          {index === 1 && (
                <div className='content-2-wrapper text-content'>
                  <div className='content-2 '>
                    <div className='card-wrapper'>
                      <div className='card-title'>
                        <h1>01</h1>
                        <p className='content-2-bold'>Our Mission</p>
                      </div>
                      <div className='card-content '>
                        <p >Our mission is to provide top-tier oil refining, storage, and logistics solutions while fostering sustainable development within the energy industry. We are dedicated to achieving excellence and ensuring safety.</p>
                      </div>
                    </div>
                    <div className='card-wrapper'>
                      <div className='card-title'>
                        <h1>02</h1>
                        <p className='content-2-bold'>Our Vision</p>
                      </div>
                      <div className='card-content'>
                        <p>Our vision is to become a premier oil refining and storage center in Central Asia, globally acknowledged for our operational excellence, environmental sustainability, and technological advancements.</p>
                      </div>
                    </div>
                    <div className='card-wrapper'>
                      <div className='card-title'>
                        <h1>03</h1>
                        <p className='content-2-bold'>Our Goal</p>
                      </div>
                      <div className='card-content'>
                        <p>Global Presence - To broaden our market footprint and establish strategic alliances that enable us to effectively cater to various markets throughout Europe, Asia, and the Middle East.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {index === 2 && (
                <div className='content-3 text-content'>
                  <h1>Fostering Innovation and Excellence in Krasnoyarsk’s Oil Sector</h1>
                  <p>Taimyr Fuel Company is a leading oil Mandate facilitator situated in Krasnoyarsk. As a vital player in the region's energy landscape, we focus on bringing buyers and seller company supplying high-quality petroleum products from a reputable refining company to satisfy both local and global demands. Our advantageous location, state-of-the-art technology, and dedication to sustainable energy practices establish us as a frontrunner in oil.</p>
                  <button>     <Link to="/hseq">Learn More</Link></button>
                </div>
              )}

              {index === 3 && (
                <div className='content-4  text-content d-flex  flex-column px-4 h-100   '>
                  <h1><span className='tick'>____</span>WHAT WE DO</h1>
                  <p>Services What we Provide</p>
                  <div className="card-container">
                    <div className='service-bg'> </div>
                    <div className='service-text'>
                      <h1>Oil Exploration</h1>
                      <p>At Taimyr Fuel Company, we are committed to enhancing the exploration and production of oil to address the increasing global energy demands. Our Exploration & Production (E&P) services concentrate on identifying, extracting, and supplying high-quality crude oil from Krasnoyarsk's abundant natural reserves.</p>
                    </div>
                  </div>
                </div>
              )}
              {index === 4 && (
                <Suspense fallback={<div>Loading ratings...</div>}>
                  <div className="content-x text-content">
                    <Rating />
                  </div>
                </Suspense>
              )}
              {index === 5 && (
                <div className="content-6 text-content">
                  <h2>Our Location</h2>
                  <div 
                    className="frame-wrapper"
                    aria-label="Google Maps showing our location"
                  >
                    <Suspense fallback={<div>Loading map...</div>}>
                      <LocationMap />
                    </Suspense>
                  </div>
                  <div 
                    className="subscribe-wrapper"
                    role="form"
                    aria-label="Newsletter subscription"
                  >
                    <h3>Subscribe For Our Newsletter</h3>
                    <div>
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        aria-label="Enter your email for newsletter"
                      />
                      <button type="submit" aria-label="Subscribe to newsletter">Subscribe</button>
                    </div>
                  </div>
                </div>
              )}
              {index === 6 && (
                <Suspense fallback={<div>Loading footer...</div>}>
               <div className='content-7 text-content'>
               <Footer />
               </div>
                </Suspense>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
