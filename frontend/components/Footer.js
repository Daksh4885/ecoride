import Link from 'next/link';

const cities = ['Chennai', 'Bangalore', 'Hyderabad', 'Kochi', 'Trivandrum', 'Vijayawada', 'Coimbatore', 'Madurai', 'Trichy', 'Salem'];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="EcoRide DropTaxi Logo" className="h-11 w-auto object-contain bg-white/10 p-1 rounded-lg" />
              <div>
                <div className="text-white font-black text-xl">EcoRide</div>
                <div className="text-green-400 text-xs font-semibold tracking-wider">DropTaxi</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">Tamil Nadu's trusted one-way drop taxi service. Pay only for the distance you travel — no return charges!</p>
            <div className="flex gap-3">
              <a href="tel:+917019700584" className="bg-brand px-4 py-2 rounded-lg text-white font-bold text-sm hover:bg-brand-dark transition-all">📞 Call</a>
              <a href={`https://wa.me/917019700584`} target="_blank" rel="noopener noreferrer"
                className="bg-green-500 px-4 py-2 rounded-lg text-white font-bold text-sm hover:bg-green-600 transition-all">💬 WhatsApp</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {['One Way Drop Taxi', 'Round Trip Taxi', 'Outstation Cabs', 'Airport Taxi', 'Hill Station Trips', 'Corporate Cab Service'].map(s => (
                <li key={s}><Link href="/#booking" className="hover:text-brand transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Popular Cities</h4>
            <div className="flex flex-wrap gap-2">
              {cities.map(c => (
                <Link key={c} href="/#booking" className="text-xs bg-white/5 hover:bg-brand hover:text-white px-2 py-1 rounded transition-all">{c}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase mb-4 tracking-wider">Contact & Support</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <div className="text-white font-bold">+91 7019700584</div>
                  <div className="text-gray-400 text-xs">24/7 Booking & Support</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span>💬</span>
                <div>
                  <a href="https://wa.me/917019700584" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-green-400">WhatsApp Us</a>
                  <div className="text-gray-400 text-xs">Instant response</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span>🕐</span>
                <div>
                  <div className="text-white font-bold">24 × 7</div>
                  <div className="text-gray-400 text-xs">Available round the clock</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <div className="text-white font-bold">Tamil Nadu & Bangalore</div>
                  <div className="text-gray-400 text-xs">200+ cities covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© {year} EcoRide DropTaxi. All rights reserved.</div>
          <div className="flex gap-4">
            <span>🌿 Eco-Friendly Travel</span>
            <span>✅ No Hidden Charges</span>
            <span>🔒 Safe & Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
