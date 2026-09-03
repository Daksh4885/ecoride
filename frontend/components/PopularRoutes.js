import Link from 'next/link';

const routes = [
  // Tiruvannamalai routes (Business Origin)
  { from: 'Tiruvannamalai', to: 'Chennai', km: 185, sedanFare: 2890 },
  { from: 'Tiruvannamalai', to: 'Bangalore', km: 200, sedanFare: 3100 },
  { from: 'Tiruvannamalai', to: 'Vellore', km: 85, sedanFare: 1490 },
  { from: 'Tiruvannamalai', to: 'Pondicherry', km: 140, sedanFare: 2260 },
  { from: 'Tiruvannamalai', to: 'Trichy', km: 210, sedanFare: 3240 },
  { from: 'Tiruvannamalai', to: 'Salem', km: 145, sedanFare: 2330 },
  { from: 'Tiruvannamalai', to: 'Coimbatore', km: 340, sedanFare: 5060 },
  { from: 'Tiruvannamalai', to: 'Madurai', km: 340, sedanFare: 5060 },
  { from: 'Tiruvannamalai', to: 'Villupuram', km: 65, sedanFare: 1210 },
  { from: 'Tiruvannamalai', to: 'Kanchipuram', km: 135, sedanFare: 2190 },
  // Chennai routes
  { from: 'Chennai', to: 'Coimbatore', km: 510, sedanFare: 7950 },
  { from: 'Chennai', to: 'Madurai', km: 470, sedanFare: 7350 },
  { from: 'Chennai', to: 'Trichy', km: 330, sedanFare: 5250 },
  { from: 'Chennai', to: 'Salem', km: 345, sedanFare: 5475 },
  { from: 'Chennai', to: 'Bangalore', km: 340, sedanFare: 5400 },
  { from: 'Chennai', to: 'Tirunelveli', km: 630, sedanFare: 9750 },
  { from: 'Chennai', to: 'Nagercoil', km: 710, sedanFare: 10950 },
  { from: 'Chennai', to: 'Thanjavur', km: 350, sedanFare: 5550 },
  // Other routes
  { from: 'Coimbatore', to: 'Chennai', km: 510, sedanFare: 7950 },
  { from: 'Coimbatore', to: 'Bangalore', km: 360, sedanFare: 5640 },
  { from: 'Coimbatore', to: 'Madurai', km: 220, sedanFare: 3780 },
  { from: 'Madurai', to: 'Chennai', km: 470, sedanFare: 7350 },
  { from: 'Madurai', to: 'Bangalore', km: 460, sedanFare: 7140 },
  { from: 'Trichy', to: 'Chennai', km: 330, sedanFare: 5250 },
  { from: 'Trichy', to: 'Bangalore', km: 370, sedanFare: 5880 },
  { from: 'Trichy', to: 'Coimbatore', km: 215, sedanFare: 3710 },
  { from: 'Bangalore', to: 'Chennai', km: 340, sedanFare: 5400 },
  { from: 'Bangalore', to: 'Coimbatore', km: 360, sedanFare: 5640 },
  { from: 'Salem', to: 'Chennai', km: 345, sedanFare: 5475 },
  { from: 'Vellore', to: 'Bangalore', km: 220, sedanFare: 3780 },
];

export default function PopularRoutes() {
  return (
    <section id="routes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 text-brand font-semibold text-sm px-4 py-1 rounded-full mb-4">POPULAR ROUTES</span>
          <h2 className="section-title">Top Drop Taxi Routes</h2>
          <p className="section-sub">One-way fares across Tamil Nadu & Bangalore — Pay only for the distance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {routes.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 hover:border-brand hover:shadow-lg transition-all group overflow-hidden">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-bold text-brand bg-brand-50 px-2 py-0.5 rounded-full">{r.km} km</div>
                  <div className="text-gray-300 text-xs">ONE WAY</div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-dark">{r.from}</span>
                  <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  <span className="font-bold text-dark">{r.to}</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-gray-400">Sedan from</div>
                    <div className="text-xl font-black text-brand">₹{r.sedanFare.toLocaleString('en-IN')}</div>
                  </div>
                  <Link href="/#booking"
                    className="text-xs font-bold text-white bg-brand px-3 py-2 rounded-lg hover:bg-brand-dark transition-all group-hover:shadow-md">
                    Book →
                  </Link>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-2 text-xs text-gray-400 border-t border-gray-100">
                *Toll & permit extra if applicable
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Don't see your route? We cover 200+ cities across Tamil Nadu</p>
          <a href="tel:+917019700584" className="btn-primary inline-flex items-center gap-2">
            📞 Call for Custom Route
          </a>
        </div>
      </div>
    </section>
  );
}
