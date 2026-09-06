import { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

// Default center: Bangalore (since this is an Indian cab service)
const defaultCenter = { lat: 12.9716, lng: 77.5946 };

export default function MapPickerModal({ isOpen, onClose, onConfirm, isLoaded }) {
  const mapRef = useRef(null);
  const [center, setCenter] = useState(defaultCenter);
  const [loadingAddress, setLoadingAddress] = useState(false);

  useEffect(() => {
    if (isOpen && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.log("Geolocation error", err)
      );
    }
  }, [isOpen]);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = null;
  }, []);

  const handleDragEnd = () => {
    if (mapRef.current) {
      const newCenter = mapRef.current.getCenter();
      setCenter({ lat: newCenter.lat(), lng: newCenter.lng() });
    }
  };

  const handleConfirm = async () => {
    setLoadingAddress(true);
    try {
      const geocoder = new window.google.maps.Geocoder();
      const response = await geocoder.geocode({ location: center });
      if (response.results && response.results.length > 0) {
        onConfirm(response.results[0].formatted_address, center);
      } else {
        alert("Could not determine address for this location.");
      }
    } catch (err) {
      console.error(err);
      alert("Error finding address.");
    }
    setLoadingAddress(false);
  };

  if (!isOpen || !isLoaded) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col h-[80vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold text-lg text-gray-800">Pin Location on Map</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Map Area */}
        <div className="relative flex-1 w-full bg-gray-100">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onDragEnd={handleDragEnd}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
            }}
          />
          
          {/* Center Fixed Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none drop-shadow-xl">
            <div className="text-4xl">📍</div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 font-semibold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button 
            onClick={handleConfirm} 
            disabled={loadingAddress}
            className="flex-[2] py-3 font-bold text-white bg-brand rounded-xl hover:bg-brand-dark transition-all disabled:opacity-50 flex justify-center items-center gap-2 shadow-lg"
          >
            {loadingAddress ? (
              <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Fetching...</>
            ) : (
              'Confirm Location'
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
