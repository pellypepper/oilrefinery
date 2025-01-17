import React, { useState, useEffect } from 'react';
import './map.css';
const LocationMap = () => {
  const [isInView, setIsInView] = useState(false);
  const [isInteractiveLoaded, setIsInteractiveLoaded] = useState(false);

  // Intersection Observer to detect when map is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Stop observing once in view
        }
      },
      { threshold: 0.1 }
    );

    const mapElement = document.getElementById('map-container');
    if (mapElement) {
      observer.observe(mapElement);
    }

    return () => {
      if (mapElement) {
        observer.unobserve(mapElement);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    setIsInteractiveLoaded(true);
  };

  return (
    <div 
      id="map-container"
      className="frame-wrapper relative"
      aria-label="Google Maps showing our location"
    >
      {/* Always show the iframe when in view */}
      {isInView && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.5923996872893!2d92.86905987669368!3d56.00841267317989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7ae39587ca113%3A0xbbad0e3605e3c0e6!2sBograda%20St%2C%20Krasnoyarsk%2C%20Krasnoyarskiy%20kray%2C%20Russia%2C%20660049!5e0!3m2!1sen!2suk!4v1736279444174!5m2!1sen!2suk"
          className="w-100 frame-box"
          style={{ 
            border: 0,
            opacity: isInteractiveLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          allowFullScreen
          loading="lazy"
          title="Our location on Google Maps"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleIframeLoad}
        />
      )}
      
      {/* Show loading state while iframe is loading */}
      {isInView && !isInteractiveLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-600">Loading map...</div>
        </div>
      )}
    </div>
  );
};

export default LocationMap;