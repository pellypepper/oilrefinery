import React, { useEffect, useRef, useState } from 'react';
import { memo } from 'react';
import './map.css';

const LocationMap = memo(() => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

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
    if (!isMapVisible || !mapRef.current || mapInstanceRef.current) return;

    const initializeMap = async () => {
      try {
        // Dynamically import Leaflet
        const L = (await import('leaflet')).default;
        await import('leaflet/dist/leaflet.css');

        // Initialize map
        const map = L.map(mapRef.current, {
          center: [56.008412, 92.86906],
          zoom: 15,
          zoomControl: false,
          attributionControl: false
        });

        // Store map instance in ref instead of state
        mapInstanceRef.current = map;

        // Custom tile layer with WebP support and lazy loading
        const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          className: 'map-tile',
          loading: 'lazy'
        });

        // Create and add attribution control in bottom-right
        L.control.attribution({
          position: 'bottomright'
        }).addTo(map);

        // Add zoom control in top-right
        L.control.zoom({
          position: 'topright'
        }).addTo(map);

        // Custom marker with WebP support
        const customIcon = L.icon({
          iconUrl: '/marker-icon.webp',
          iconSize: [48, 48],
          iconAnchor: [24, 48],
          popupAnchor: [0, -48],
          shadowUrl: '/marker-shadow.webp',
          shadowSize: [48, 48]
        });

        // Add marker
        const marker = L.marker([56.008412, 92.86906], {
          icon: customIcon,
          title: 'Taimyr Fuel Company Location'
        }).addTo(map);

        // Add popup with lazy loading
        const popup = L.popup({
          maxWidth: 220,
          className: 'custom-popup'
        }).setContent('Taimyr Fuel Company Location');

        marker.bindPopup(popup);

        // Add tile layer after setup
        tileLayer.addTo(map);

        // Add loaded class for fade-in effect
        mapRef.current.classList.add('loaded');
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isMapVisible]); // Only depend on isMapVisible

  return (
    <div
      ref={mapRef}
      className="location-map"
      role="region"
      aria-label="Interactive map showing Taimyr Fuel Company's location"
    />
  );
});

LocationMap.displayName = 'LocationMap';

export default LocationMap;