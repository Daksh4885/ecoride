const testimonials = [
  { name: 'Ramesh Kumar', city: 'Chennai', route: 'Chennai → Coimbatore', stars: 5, text: 'Excellent service! The driver was on time, car was very clean, and the fare was exactly as quoted. Will definitely use EcoRide again for my trips.' },
  { name: 'Priya Sharma', city: 'Madurai', route: 'Madurai → Bangalore', stars: 5, text: 'I traveled alone at night and felt completely safe. The driver was professional and courteous. Highly recommend EcoRide to all ladies traveling solo.' },
  { name: 'Karthik S.', city: 'Trichy', route: 'Trichy → Chennai', stars: 5, text: 'Booked online in 2 minutes, got a confirmation call immediately. The trip was smooth and the one-way fare saved me a lot compared to other services.' },
  { name: 'Meena Devi', city: 'Coimbatore', route: 'Coimbatore → Chennai', stars: 5, text: 'Very good experience! No hidden charges, transparent pricing, and professional driver. The car was AC and very comfortable for a 5-hour journey.' },
  { name: 'Suresh V.', city: 'Salem', route: 'Salem → Trichy', stars: 5, text: 'Best taxi service I have used. The WhatsApp booking process was super easy and I got a reply instantly. Will recommend to all my friends.' },
  { name: 'Lakshmi R.', city: 'Vellore', route: 'Vellore → Bangalore', stars: 5, text: 'Traveled with my elderly parents. The driver was specially attentive and helped with luggage. EcoRide truly cares about passengers. 5 stars!' },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 text-brand font-semibold text-sm px-4 py-1 rounded-full mb-4">HAPPY CLIENTS</span>
          <h2 className="section-title">What Our Passengers Say</h2>
          <p className="section-sub">Thousands of happy customers across Tamil Nadu & Bangalore</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-50 rounded-2xl p-6 border border-green-100">
              <div className="flex mb-3">
                {[...Array(t.stars)].map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-bold text-dark text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.city}</div>
                </div>
                <div className="text-right">
                  <div className="text-brand font-semibold text-xs">{t.route}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 bg-brand rounded-2xl p-8 text-white text-center">
          {[
            { num: '10,000+', label: 'Happy Customers' },
            { num: '200+', label: 'Cities Covered' },
            { num: '4.9/5', label: 'Average Rating' },
            { num: '24/7', label: 'Customer Support' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black mb-1">{s.num}</div>
              <div className="text-green-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
