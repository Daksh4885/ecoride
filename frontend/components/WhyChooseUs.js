const features = [
  { icon: '💸', title: 'Transparent Billing', desc: 'No hidden charges. Every fare detail is shared upfront before you book.' },
  { icon: '⏱️', title: 'Reliable Pickup', desc: 'Punctual pickup every time. We value your schedule and time.' },
  { icon: '🚗', title: 'Comfortable Cars', desc: 'Clean, AC vehicles maintained for long-distance rides.' },
  { icon: '👨‍✈️', title: 'Professional Drivers', desc: 'Experienced and courteous drivers ensuring safe travel.' },
  { icon: '💰', title: 'Affordable One Way', desc: 'Pay only for the distance you travel. No return charges!' },
  { icon: '🌙', title: '24/7 Support', desc: 'Round the clock customer support for bookings and assistance.' },
  { icon: '🌿', title: 'Eco-Friendly Fleet', desc: 'We prefer fuel-efficient vehicles to reduce carbon footprint.' },
  { icon: '⭐', title: 'Trusted by Thousands', desc: 'Excellent reviews and repeat bookings speak for our quality.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 text-brand font-semibold text-sm px-4 py-1 rounded-full mb-4">WHY CHOOSE US</span>
          <h2 className="section-title">Why EcoRide DropTaxi?</h2>
          <p className="section-sub">Tamil Nadu's most reliable one-way drop taxi service</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-gray-100 hover:border-brand hover:shadow-lg transition-all duration-300 bg-white hover:bg-brand-50">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-dark text-lg mb-2 group-hover:text-brand transition-colors">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
