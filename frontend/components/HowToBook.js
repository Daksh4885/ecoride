import Link from 'next/link';

const steps = [
  { num: '01', icon: '📱', title: 'Call / WhatsApp or Book Online', desc: 'Contact us at +91 7019700584 or use our online booking form to book your one-way drop taxi instantly.' },
  { num: '02', icon: '📍', title: 'Enter Pickup & Drop Details', desc: 'Provide your pickup location, drop location, travel date, and preferred pickup time.' },
  { num: '03', icon: '💰', title: 'View Instant Fare', desc: 'Check transparent pricing for Sedan and SUV taxis with no hidden charges.' },
  { num: '04', icon: '✅', title: 'Confirm Booking', desc: 'Choose your vehicle type and confirm. You\'ll receive a booking ID and confirmation call from our team.' },
];

export default function HowToBook() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark via-gray-900 to-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-green-300 font-semibold text-sm px-4 py-1 rounded-full mb-4">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How to Book a Drop Taxi</h2>
          <p className="text-gray-400 text-lg">Simple 4-step booking process</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand/30 z-0 -translate-x-4"></div>
              )}
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-brand/30">
                  {s.icon}
                </div>
                <div className="text-brand font-black text-xs mb-2">STEP {s.num}</div>
                <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#booking" className="btn-primary text-center">🚖 Book Online Now</Link>
          <a href="tel:+917019700584" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20 text-center">
            📞 Call +91 7019700584
          </a>
          <a href={`https://wa.me/917019700584`} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-all">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
