
import React, { useEffect, useState, useRef } from 'react';
import './home.css';



import Rating from '../../component/rating/rating';



import Footer from '../../component/footer/footer';


export default function Home() {

  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'section1', image: '/assets/card1.jpg' },
    { id: 'section2', image: '/assets/bg2.jpg' },
    { id: 'section3', image: '/assets/bg3.jpg' },
    { id: 'section4', image: '' },
    { id: 'section5', image: '/assets/bg6.jpg' },
    { id: 'section6', image: '' },
    { id: 'section7', image: '' },
  ];


  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Array.from(sectionRefs.current).indexOf(entry.target);
          if (index === -1) return; // Guard clause if index is not found

          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              if (!Array.isArray(prev)) return [index]; // Fallback in case prev is not an array
              return [...new Set([...prev, index])]; // Add index if visible
            });
          } else {
            setIsVisible((prev) => {
              if (!Array.isArray(prev)) return []; // Fallback to empty array
              return prev.filter((i) => i !== index); // Remove index if not visible
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = sectionRefs.current; // Store current refs to use in cleanup
    currentRefs.forEach((section) => observer.observe(section));

    return () => {
      currentRefs.forEach((section) => {
        if (section instanceof Element) {
          observer.unobserve(section);
        }
      });
    };
  }, []);




  return (
    <main>


      <section className="h-auto home-content">
        <div className="content-container">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-image={section.image}

              className={`section ${isVisible ? "visible" : ""}`}
              style={{
                '--background-image': `url(${section.image})`,
              }}
            >
              {index === 0 && (
                <>
                  <div className='content-1 text-content'>
                    <h2>WELCOME TO TAIMYR FUEL COMPANY</h2>
                    <h1>Pioneering Energy <span>Solutions</span></h1>

                    <h5>in Krasnoyarsk</h5>
                    <button>Learn More</button>
                    <p>At Taimyr Furl Company, we are a premier oil refining and storage facility located in the heart of Kazakhstan, strategically positioned to fulfill the region's increasing energy requirements.</p>


                  </div>
                </>
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
                  <h1>Services What we Provide</h1>


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
                <Rating />
              )}

              {index === 5 && (

                <div className='content-6 text-content'>
                  <h1>Our Location</h1>
                  <div className='frame-wrapper'>
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

                  <div className='subscribe-wrapper'>
                    <h3>Subscribe For Our Newsletter</h3>
                    <div>
                      <input type="email" placeholder='Enter Your Email' />
                      <button>Subscribe</button>

                    </div>

                  </div>
                </div>

              )}

              {index === 6 && (

                <div className='content-7 text-content'>
                  <Footer />
                </div>

              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
