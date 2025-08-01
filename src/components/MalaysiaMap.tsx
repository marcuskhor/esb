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
      zoom: 6.5,
      pitch: 0,
      interactive: true,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Wait for map to load then add markers and hide labels
    map.current.on('load', () => {
      // Hide all text labels to match the reference image
      const layers = map.current!.getStyle().layers;
      layers.forEach((layer) => {
        if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
          map.current!.setLayoutProperty(layer.id, 'visibility', 'none');
        }
      });

      facilities.forEach((facility) => {
        // Create blue pin marker like in reference image
        const markerElement = document.createElement('div');
        markerElement.className = 'facility-marker';
        markerElement.style.cssText = `
          width: 24px;
          height: 24px;
          background: #1e40af;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(30, 64, 175, 0.4);
          position: relative;
        `;

        // Add white center dot like in reference
        const centerDot = document.createElement('div');
        centerDot.style.cssText = `
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
        markerElement.appendChild(centerDot);

        // Add marker to map
        const marker = new mapboxgl.Marker(markerElement)
          .setLngLat([facility.lng, facility.lat])
          .addTo(map.current!);

        // Add popup on click
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: true,
          closeOnClick: true
        })
        .setHTML(`
          <div style="padding: 12px; font-family: system-ui; min-width: 120px;">
            <div style="font-weight: bold; color: #1e40af; font-size: 14px; margin-bottom: 4px;">
              ${facility.name}
            </div>
            <div style="color: #64748b; font-size: 12px;">
              ESB Facility
            </div>
          </div>
        `);

        markerElement.addEventListener('click', () => {
          popup.addTo(map.current!);
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
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
        <h4 className="font-bold text-steel-blue mb-2 text-sm">ESB Facilities Network</h4>
        <div className="flex items-center space-x-2 text-xs text-slate-gray">
          <div className="w-3 h-3 bg-steel-blue border border-white rounded-full"></div>
          <span>9 Strategic Locations Across Malaysia</span>
        </div>
      </div>
    </div>
  );
};

export default MalaysiaMap;