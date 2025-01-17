// DynamicMap.js
import React, { useEffect, useRef } from 'react';

const DynamicMap = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
      mapTypeControl: false, // Reduce initial payload
      streetViewControl: false, // Reduce initial payload
      fullscreenControl: false, // Reduce initial payload
    });

    // Lazy load additional controls and features
    setTimeout(() => {
      map.setOptions({
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
      });
    }, 2000);

    new window.google.maps.Marker({
      position: location,
      map,
      title: 'Our Location'
    });
  }, [location]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px]"
      role="application"
      aria-label="Interactive Google Map showing our location"
    />
  );
};

export default DynamicMap;