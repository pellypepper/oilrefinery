import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"
const LocationMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapRef.current, {
      center: [56.008412, 92.869060], // Coordinates for Krasnoyarsk
      zoom: 15,
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker
    L.marker([56.008412, 92.869060])
      .addTo(map)
      .bindPopup('Taimyr Fuel Company Location')
      .openPopup();

    return () => {
      map.remove(); // Clean up on unmount
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className='location-map'
  
      aria-label="Interactive map showing Taimyr Fuel Company's location"
    />
  );
};

export default LocationMap;
