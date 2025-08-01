import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

const MalaysiaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenInputVisible, setTokenInputVisible] = useState(true);

  const facilities = [
    { name: "Shah Alam", lng: 101.5194, lat: 3.0733 },
    { name: "Penang", lng: 100.3315, lat: 5.4164 },
    { name: "Johor", lng: 103.7414, lat: 1.4927 },
    { name: "Kuching", lng: 110.3594, lat: 1.5533 },
    { name: "Kota Kinabalu", lng: 116.0753, lat: 5.9804 },
    { name: "Sibu", lng: 111.8268, lat: 2.3 },
    { name: "Miri", lng: 113.9917, lat: 4.4148 },
    { name: "Bintulu", lng: 113.0436, lat: 3.1667 },
    { name: "Tawau", lng: 117.8902, lat: 4.2549 }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [109.6976, 3.1390], // Center of Malaysia
      zoom: 6,
      pitch: 0,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Wait for map to load then add markers
    map.current.on('load', () => {
      facilities.forEach((facility) => {
        // Create a custom marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'custom-marker';
        markerElement.style.cssText = `
          width: 30px;
          height: 30px;
          background: #ff6b35;
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        `;

        // Add marker to map
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat([facility.lng, facility.lat])
          .addTo(map.current!);

        // Add popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
          closeOnClick: false
        })
        .setHTML(`
          <div style="padding: 8px; font-weight: bold; color: #1e40af;">
            ${facility.name}
          </div>
        `);

        markerElement.addEventListener('mouseenter', () => {
          marker.setPopup(popup);
          popup.addTo(map.current!);
        });

        markerElement.addEventListener('mouseleave', () => {
          popup.remove();
        });
      });
    });

    setTokenInputVisible(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (tokenInputVisible) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <MapPin className="h-12 w-12 text-steel-blue mx-auto mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-4">Configure Mapbox</h3>
        <p className="text-slate-gray mb-6">
          To display the Malaysia facilities map, please add your Mapbox public token to Supabase Edge Function Secrets,
          or enter it temporarily below.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
          <h4 className="font-semibold text-steel-blue mb-2">For Production:</h4>
          <p className="text-sm text-slate-gray">
            Add your Mapbox public token in Supabase → Edge Functions → Secrets with key: <code className="bg-white px-1 rounded">MAPBOX_PUBLIC_TOKEN</code>
          </p>
        </div>
        <form onSubmit={handleTokenSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter your Mapbox public token"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-steel-blue"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-steel-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Load Map
            </button>
          </div>
          <p className="text-xs text-slate-gray mt-2">
            Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-steel-blue hover:underline">mapbox.com</a>
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="relative">
      <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="font-bold text-steel-blue mb-2">Our Facilities</h4>
        <div className="flex items-center space-x-2 text-sm text-slate-gray">
          <div className="w-3 h-3 bg-orange-accent rounded-full"></div>
          <span>9 Strategic Locations</span>
        </div>
      </div>
    </div>
  );
};

export default MalaysiaMap;