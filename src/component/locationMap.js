// LocationMap.jsx
import React, { useEffect, useRef, useState } from 'react';
import { memo } from 'react';
import './map.css';

const LocationMap = memo(() => {
  const mapRef = useRef(null);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [leaflet, setLeaflet] = useState(null);

  useEffect(() => {
    // Lazy load Leaflet only when component is visible
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting) {
          setIsMapVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMapVisible) return;

    const loadLeaflet = async () => {
      try {
        const L = await import('leaflet');
        setLeaflet(L.default);
      } catch (error) {
        console.error('Error loading Leaflet:', error);
      }
    };

    loadLeaflet();
  }, [isMapVisible]);

  useEffect(() => {
    if (!leaflet || !mapRef.current || mapInstance) return;

    try {
      // Initialize map
      const map = leaflet.map(mapRef.current, {
        center: [56.008412, 92.869060],
        zoom: 15,
        zoomControl: false,
        attributionControl: false
      });

      // Custom tile layer with WebP support and lazy loading
      const tileLayer = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        className: 'map-tile',
        loading: 'lazy'
      });

      // Create and add attribution control in bottom-right
      leaflet.control.attribution({
        position: 'bottomright'
      }).addTo(map);

      // Add zoom control in top-right
      leaflet.control.zoom({
        position: 'topright'
      }).addTo(map);

      // Custom marker with WebP support
      const customIcon = leaflet.icon({
        iconUrl: '/marker-icon.webp',
        iconSize: [48, 48],
        iconAnchor: [24, 48],
        popupAnchor: [0, -48],
        shadowUrl: '/marker-shadow.webp',
        shadowSize: [48, 48]
      });

      // Add marker
      const marker = leaflet.marker([56.008412, 92.869060], { 
        icon: customIcon,
        title: 'Taimyr Fuel Company Location'
      }).addTo(map);

      // Add popup with lazy loading
      const popup = leaflet.popup({
        maxWidth: 220,
        className: 'custom-popup'
      }).setContent('Taimyr Fuel Company Location');

      marker.bindPopup(popup);

      // Add tile layer after setup
      tileLayer.addTo(map);
      
      // Store map instance
      setMapInstance(map);

      // Add loaded class for fade-in effect
      mapRef.current.classList.add('loaded');
    } catch (error) {
      console.error('Error initializing map:', error);
    }

  }, [leaflet, mapInstance]);

  return (
    <div
      ref={mapRef}
      className="location-map"
      role="region"
      aria-label="Interactive map showing Taimyr Fuel Company's location"
      style={{ height: '400px', width: '100%' }}
    />
  );
});

LocationMap.displayName = 'LocationMap';

export default LocationMap;