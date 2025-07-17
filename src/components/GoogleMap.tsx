import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      try {
        const google = await loader.load();
        
        if (mapRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center: { lat: 0, lng: 0 },
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: false,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: true,
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100vw', 
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0
      }} 
    />
  );
};

export default GoogleMap; 