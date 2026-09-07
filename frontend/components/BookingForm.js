import { useState, useEffect, useRef } from 'react';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import MapPickerModal from './MapPickerModal';

const VEHICLES = [
  { id: 'Sedan', label: 'Sedan', desc: 'Swift Dzire, Etios', icon: '🚗', rate: 15, maxPax: 4 },
  { id: 'SUV', label: 'SUV', desc: 'Innova, Ertiga', icon: '🚙', rate: 20, maxPax: 6 },
  { id: 'Innova', label: 'Innova', desc: 'Toyota Innova', icon: '🚐', rate: 21, maxPax: 7 },
  { id: 'Innova Crysta', label: 'Innova Crysta', desc: 'Premium SUV', icon: '✨', rate: 24, maxPax: 7 },
];

const TIMES = Array.from({ length: 24 }, (_, i) => {
  const h = i % 12 === 0 ? 12 : i % 12;
  const ampm = i < 12 ? 'AM' : 'PM';
  return `${h}:00 ${ampm}`;
});

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const libraries = ['places'];

export default function BookingForm() {
  const [tab, setTab] = useState('one-way');
  const [form, setForm] = useState({
    pickup: '', drop: '', pickupDate: '', pickupTime: '8:00 AM',
    vehicleType: 'Sedan', noOfPersons: '1', noOfDays: '1', name: '', mobile: ''
  });
  const [loading, setLoading] = useState(false);
  const [fareLoading, setFareLoading] = useState(false);
  const [fareInfo, setFareInfo] = useState(null);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const [mapModal, setMapModal] = useState({ isOpen: false, field: null });
  const [locLoading, setLocLoading] = useState(false);
  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries,
  });

  const handleCurrentLocation = (field) => {
    if (!navigator.geolocation) return alert("Geolocation not supported");
    setLocLoading(field);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const geocoder = new window.google.maps.Geocoder();
        const res = await geocoder.geocode({ location: { lat: pos.coords.latitude, lng: pos.coords.longitude } });
        if (res.results && res.results[0]) {
          f(field, res.results[0].formatted_address);
        }
      } catch (e) {
        alert("Error fetching address");
      }
      setLocLoading(false);
    }, () => {
      alert("Please allow location access");
      setLocLoading(false);
    });
  };

  // Auto-calculate fare when pickup/drop/vehicle/tripType changes
  useEffect(() => {
    if (form.pickup.length > 3 && form.drop.length > 3) {
      const timer = setTimeout(() => fetchFare(), 800);
      return () => clearTimeout(timer);
    }
  }, [form.pickup, form.drop, form.vehicleType, tab, form.noOfDays]);

  const fetchFare = async () => {
    setFareLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/bookings/fare`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pickup: form.pickup, drop: form.drop,
          vehicleType: form.vehicleType, tripType: tab, noOfDays: form.noOfDays
        })
      });
      const data = await res.json();
      if (data.success && data.estimatedFare) setFareInfo(data);
    } catch {}
    setFareLoading(false);
  };

  const validate = () => {
    const e = {};
    if (!form.pickup.trim()) e.pickup = 'Pickup location required';
    if (!form.drop.trim()) e.drop = 'Drop location required';
    if (!form.pickupDate) e.pickupDate = 'Pickup date required';
    if (!form.name.trim()) e.name = 'Your name is required';
    if (!form.mobile.trim()) e.mobile = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, ''))) e.mobile = 'Enter valid 10-digit mobile';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, tripType: tab })
      });
      const data = await res.json();
      if (data.success) {
        setResult(data);
        setForm({ pickup: '', drop: '', pickupDate: '', pickupTime: '8:00 AM', vehicleType: 'Sedan', noOfPersons: '1', noOfDays: '1', name: '', mobile: '' });
        setFareInfo(null);
      } else {
        alert(data.message || 'Booking failed. Please call us directly.');
      }
    } catch {
      alert('Network error. Please call +91 7019700584 directly.');
    }
    setLoading(false);
  };

  const f = (k, v) => { setForm(p => ({ ...p, [k]: v })); if (errors[k]) setErrors(p => { const n = { ...p }; delete n[k]; return n; }); };

  if (result) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-1 rounded-full text-sm mb-4">BOOKING CONFIRMED</div>
        <h3 className="text-2xl font-bold text-dark mb-2">Booking Received!</h3>
        <p className="text-gray-600 mb-6">Our team will call you shortly to confirm.</p>

        <div className="bg-brand-50 rounded-xl p-5 mb-6 text-left space-y-2">
          <div className="flex justify-between"><span className="text-gray-500 text-sm">Booking ID</span><span className="font-bold text-brand">{result.booking.bookingId}</span></div>
          <div className="flex justify-between"><span className="text-gray-500 text-sm">From → To</span><span className="font-semibold text-sm">{result.booking.pickup} → {result.booking.drop}</span></div>
          <div className="flex justify-between"><span className="text-gray-500 text-sm">Date & Time</span><span className="font-semibold text-sm">{result.booking.pickupDate} | {result.booking.pickupTime}</span></div>
          <div className="flex justify-between"><span className="text-gray-500 text-sm">Vehicle</span><span className="font-semibold text-sm">{result.booking.vehicleType}</span></div>
          {result.booking.estimatedFare > 0 && (
            <div className="flex justify-between border-t border-green-200 pt-2 mt-2"><span className="text-gray-500 text-sm">Est. Fare</span><span className="font-bold text-green-600 text-lg">₹{result.booking.estimatedFare.toLocaleString('en-IN')}</span></div>
          )}
        </div>

        <div className="flex gap-3">
          <a href="tel:+917019700584" className="flex-1 btn-primary text-center py-3">📞 Call Us</a>
          <a href={`https://wa.me/917019700584?text=${encodeURIComponent(`Hi, I just booked with ID: ${result.booking.bookingId}. From ${result.booking.pickup} to ${result.booking.drop} on ${result.booking.pickupDate}.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold rounded-lg py-3 hover:bg-green-600 transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
        <button className="mt-3 text-gray-400 text-sm underline" onClick={() => setResult(null)}>Book another taxi</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex">
        {['one-way', 'round-trip'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`flex-1 py-4 font-bold text-sm uppercase tracking-wide transition-all ${tab === t ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
            {t === 'one-way' ? '→ One Way' : '⇄ Round Trip'}
          </button>
        ))}
      </div>

      <div className="p-6 space-y-4">
        {/* Pickup & Drop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">📍 Pickup Location</label>
            <div className="relative flex items-center">
              {isLoaded ? (
                <Autocomplete
                  onLoad={auto => { pickupRef.current = auto; }}
                  onPlaceChanged={() => {
                    if (pickupRef.current !== null) {
                      const place = pickupRef.current.getPlace();
                      f('pickup', place.formatted_address || place.name);
                    }
                  }}
                  options={{ types: ["geocode", "establishment"], componentRestrictions: { country: "in" } }}
                  className="w-full"
                >
                  <input
                    value={form.pickup}
                    onChange={e => f('pickup', e.target.value)}
                    placeholder="City / Area / Landmark"
                    className={`input-field pr-20 w-full ${errors.pickup ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                  />
                </Autocomplete>
              ) : (
                <input
                  value={form.pickup}
                  onChange={e => f('pickup', e.target.value)}
                  placeholder="Loading Places..."
                  className={`input-field pr-20 w-full ${errors.pickup ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                  disabled
                />
              )}
              <div className="absolute right-2 flex items-center gap-1">
                <button type="button" title="Current Location" onClick={() => handleCurrentLocation('pickup')} className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex justify-center items-center h-8 w-8">
                  {locLoading === 'pickup' ? <div className="w-4 h-4 border-2 border-brand border-t-transparent rounded-full animate-spin"></div> : '📍'}
                </button>
                <button type="button" title="Set on Map" onClick={() => setMapModal({ isOpen: true, field: 'pickup' })} className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex justify-center items-center h-8 w-8">🗺️</button>
              </div>
            </div>
            {errors.pickup && <p className="text-red-500 text-xs mt-1">{errors.pickup}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">📍 Drop Location</label>
            <div className="relative flex items-center">
              {isLoaded ? (
                <Autocomplete
                  onLoad={auto => { dropRef.current = auto; }}
                  onPlaceChanged={() => {
                    if (dropRef.current !== null) {
                      const place = dropRef.current.getPlace();
                      f('drop', place.formatted_address || place.name);
                    }
                  }}
                  options={{ types: ["geocode", "establishment"], componentRestrictions: { country: "in" } }}
                  className="w-full"
                >
                  <input
                    value={form.drop}
                    onChange={e => f('drop', e.target.value)}
                    placeholder="City / Area / Landmark"
                    className={`input-field pr-20 w-full ${errors.drop ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                  />
                </Autocomplete>
              ) : (
                <input
                  value={form.drop}
                  onChange={e => f('drop', e.target.value)}
                  placeholder="Loading Places..."
                  className={`input-field pr-20 w-full ${errors.drop ? 'border-red-400 ring-1 ring-red-400' : ''}`}
                  disabled
                />
              )}
              <div className="absolute right-2 flex items-center gap-1">
                <button type="button" title="Current Location" onClick={() => handleCurrentLocation('drop')} className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex justify-center items-center h-8 w-8">
                  {locLoading === 'drop' ? <div className="w-4 h-4 border-2 border-brand border-t-transparent rounded-full animate-spin"></div> : '📍'}
                </button>
                <button type="button" title="Set on Map" onClick={() => setMapModal({ isOpen: true, field: 'drop' })} className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex justify-center items-center h-8 w-8">🗺️</button>
              </div>
            </div>
            {errors.drop && <p className="text-red-500 text-xs mt-1">{errors.drop}</p>}
          </div>
        </div>

        {/* Date / Time / Days */}
        <div className={`grid gap-4 ${tab === 'round-trip' ? 'grid-cols-3' : 'grid-cols-2'}`}>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">📅 Pickup Date</label>
            <input type="date" value={form.pickupDate} onChange={e => f('pickupDate', e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className={`input-field ${errors.pickupDate ? 'border-red-400' : ''}`} />
            {errors.pickupDate && <p className="text-red-500 text-xs mt-1">{errors.pickupDate}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">⏰ Pickup Time</label>
            <select value={form.pickupTime} onChange={e => f('pickupTime', e.target.value)} className="input-field">
              {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          {tab === 'round-trip' && (
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">📆 No. of Days</label>
              <select value={form.noOfDays} onChange={e => f('noOfDays', e.target.value)} className="input-field">
                {[1,2,3,4,5,6,7,8,9,10].map(d => <option key={d} value={d}>{d} Day{d > 1 ? 's' : ''}</option>)}
              </select>
            </div>
          )}
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">🚗 Vehicle Type</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {VEHICLES.map(v => (
              <button key={v.id} onClick={() => f('vehicleType', v.id)}
                className={`p-3 rounded-xl border-2 text-left transition-all ${form.vehicleType === v.id ? 'border-brand bg-brand-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <div className="text-xl mb-1">{v.icon}</div>
                <div className="font-bold text-sm text-dark">{v.label}</div>
                <div className="text-gray-400 text-xs">{v.desc}</div>
                <div className="text-brand font-bold text-xs mt-1">₹{v.rate}/km</div>
              </button>
            ))}
          </div>
        </div>

        {/* Name, Mobile, Persons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">👤 Your Name</label>
            <input value={form.name} onChange={e => f('name', e.target.value)} placeholder="Full Name"
              className={`input-field ${errors.name ? 'border-red-400' : ''}`} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">📱 Mobile Number</label>
            <input value={form.mobile} onChange={e => f('mobile', e.target.value)} placeholder="10-digit mobile"
              maxLength={10} className={`input-field ${errors.mobile ? 'border-red-400' : ''}`} />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">👥 No. of Persons</label>
            <select value={form.noOfPersons} onChange={e => f('noOfPersons', e.target.value)} className="input-field">
              {[1,2,3,4,5,6,7].map(n => <option key={n} value={n}>{n} Person{n > 1 ? 's' : ''}</option>)}
            </select>
          </div>
        </div>

        {/* Fare Preview */}
        {(fareLoading || fareInfo) && (
          <div className="bg-brand-50 border border-brand rounded-xl p-4">
            {fareLoading ? (
              <div className="flex items-center gap-2 text-brand text-sm"><div className="w-4 h-4 border-2 border-brand border-t-transparent rounded-full animate-spin"></div> Calculating fare...</div>
            ) : fareInfo && (
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500 font-medium">ESTIMATED FARE</div>
                  <div className="text-2xl font-black text-brand">₹{fareInfo.estimatedFare.toLocaleString('en-IN')}</div>
                  <div className="text-xs text-gray-500">~{fareInfo.distanceKm} km · {form.vehicleType} · {tab === 'one-way' ? 'One Way' : 'Round Trip'}</div>
                </div>
                <div className="text-right text-xs text-gray-400">
                  <div>*Toll & permit extra</div>
                  <div>*Final fare may vary</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Submit */}
        <button onClick={handleSubmit} disabled={loading}
          className={`w-full py-4 rounded-xl font-black text-lg transition-all shadow-lg ${loading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-brand text-white hover:bg-brand-dark active:scale-95 hover:shadow-xl'}`}>
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              Booking...
            </span>
          ) : '🚖 Book Taxi Now — Instant Confirmation'}
        </button>

        <p className="text-center text-xs text-gray-400">✅ No hidden charges · 24/7 Support · Free cancellation</p>
      </div>

      <MapPickerModal 
        isOpen={mapModal.isOpen} 
        isLoaded={isLoaded}
        onClose={() => setMapModal({ isOpen: false, field: null })}
        onConfirm={(address) => {
          f(mapModal.field, address);
          setMapModal({ isOpen: false, field: null });
        }}
      />
    </div>
  );
}
