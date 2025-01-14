
import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import './home.css';

// Lazy load components
const Rating = lazy(() => import('../../component/rating/rating'));
const Footer = lazy(() => import('../../component/footer/footer'));

// Throttle function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export default function Home() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const sections = [
    { id: 'hero', image: '/assets/card1.webp', ariaLabel: 'Welcome section' },
    { id: 'mission', image: '/assets/bg2.webp', ariaLabel: 'Our mission and vision' },
    { id: 'about', image: '/assets/bg3.webp', ariaLabel: 'About our company' },
    { id: 'services', image: '', ariaLabel: 'Our services' },
    { id: 'ratings', image: '', ariaLabel: 'Customer ratings' },
    { id: 'location', image: '', ariaLabel: 'Our location' },
    { id: 'footer', image: '', ariaLabel: 'Footer' },
  ];

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
          setIframeLoaded(true);
          setVisibleSections((prev) => [...new Set([...prev, index])]);
        }
      });
    }, observerOptions);

    const elements = sectionRefs.current.filter(Boolean);
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  // Scroll Event Listener with Throttle
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log('Scroll event triggered!');
    }, 200);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              aria-hidden={!visibleSections.includes(index)}
              style={{
                backgroundImage: section.image ? `url(${section.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {index === 0 && (
                <div className="content-1 text-content">
                  <h1>TAIMYR FUEL</h1>
                  <h2>Pioneering Energy <span>Solutions</span></h2>
                  <h3>in Krasnoyarsk</h3>
                  <button aria-label="Learn more about our company" className="focus:ring-2 hover:bg-opacity-90">
                    Learn More
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
                        <h3>Our Mission</h3>
                      </div>
                      <div className='card-content '>
                        <p>Our mission is to provide top-tier oil refining, storage, and logistics solutions while fostering sustainable development within the energy industry. We are dedicated to achieving excellence and ensuring safety.</p>
                      </div>
                    </div>
                    <div className='card-wrapper'>
                      <div className='card-title'>
                        <h1>02</h1>
                        <h3>Our Vision</h3>
                      </div>
                      <div className='card-content'>
                        <p>Our vision is to become a premier oil refining and storage center in Central Asia, globally acknowledged for our operational excellence, environmental sustainability, and technological advancements.</p>
                      </div>
                    </div>
                    <div className='card-wrapper'>
                      <div className='card-title'>
                        <h1>03</h1>
                        <h3>Our Goal</h3>
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
                  <button>Learn More</button>
                </div>
              )}

              {index === 3 && (
                <div className='content-4  text-content d-flex  flex-column px-4 h-100   '>
                  <h3><span className='tick'>____</span>WHAT WE DO</h3>
                  <h3>Services What we Provide</h3>


                  <div className="card-container">

                    <div className='service-bg'> </div>

                    <div className='service-text'>
                      <h3>Oil Exploration</h3>
                      <p>At Taimyr Fuel Company, we are committed to enhancing the exploration and production of oil to address the increasing global energy demands. Our Exploration & Production (E&P) services concentrate on identifying, extracting, and supplying high-quality crude oil from Krasnoyarsk's abundant natural reserves</p>
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
                      {isIframeLoaded && (
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.5923996872893!2d92.86905987669368!3d56.00841267317989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7ae39587ca113%3A0xbbad0e3605e3c0e6!2sBograda%20St%2C%20Krasnoyarsk%2C%20Krasnoyarskiy%20kray%2C%20Russia%2C%20660049!5e0!3m2!1sen!2suk!4v1736279444174!5m2!1sen!2suk"
                          className="map-frame"
                          style={{ border: 0, width: '100%', height: '400px' }}
                          allowFullScreen
                          loading="lazy"
                          title="Our location on Google Maps"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      )}
                    </Suspense>
                  </div>

                  <div 
                    className="subscribe-wrapper"
                    role="form"
                    aria-label="Newsletter subscription"
                  >
                    <h3>Subscribe For Our Newsletter</h3>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email"
                        aria-label="Enter your email for newsletter"
                      />
                      <button
                        type="submit"
                        aria-label="Subscribe to newsletter"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {index === 6 && (
                <Suspense fallback={<div>Loading footer...</div>}>
                  <div className="content-7 text-content">
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
