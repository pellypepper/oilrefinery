import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

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

    // Create a custom marker icon
    const customIcon = L.icon({
      iconUrl: '/marker-icon.png', // Update this path to match where you saved the images
      iconSize: [48, 48], // Size of the icon
      iconAnchor: [24, 48], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -48], // Point from which the popup should open relative to the iconAnchor
      shadowUrl: '/marker-shadow.png', // Path to the shadow image
      shadowSize: [48, 48], // Size of the shadow
    });

    // Add a marker with the custom icon
    L.marker([56.008412, 92.869060], { icon: customIcon })
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
