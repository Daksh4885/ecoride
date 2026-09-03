import { useState } from 'react';

const faqs = [
  { q: 'What is EcoRide DropTaxi?', a: 'EcoRide DropTaxi offers one-way drop taxi, round trip taxi, and outstation cab services across Tamil Nadu and Bangalore. Our most popular routes include Chennai, Coimbatore, Madurai, Trichy, Salem, Vellore, Tirunelveli, and Bangalore.' },
  { q: 'How do I book a taxi?', a: 'You can book online using the form on our homepage, or call/WhatsApp us at +91 7019700584. Simply enter your pickup & drop location, date, time, vehicle type, and your contact details to get instant confirmation.' },
  { q: 'What is the fare for one-way taxi?', a: 'Sedan: ₹14/km, SUV: ₹19/km, Innova: ₹20/km, Innova Crysta: ₹23/km. Minimum distance is 130 km for one-way trips. Driver batta, toll, and permit charges are extra where applicable.' },
  { q: 'Do I pay for the return trip in a one-way taxi?', a: 'No! That\'s the best part of EcoRide DropTaxi — you pay only ONE WAY fare. There are no return charges. You are billed only for the actual distance from pickup to drop.' },
  { q: 'How is the total fare calculated?', a: 'Fare = Distance × Per km rate + Driver Batta. Toll fees, hill charges, state permits, and parking are extra and paid at actuals. The final bill may vary slightly from the estimate based on actual distance.' },
  { q: 'What if my vehicle breaks down?', a: 'In the rare event of a vehicle breakdown, we will immediately arrange a replacement vehicle. Your safety and comfort is our top priority and we have 24/7 support to handle such situations.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, UPI (GPay, PhonePe, Paytm), and digital wallets. Payment can be made to the driver at the end of the trip.' },
  { q: 'Are there extra charges for hill stations?', a: 'Yes. Hill station routes (Ooty, Kodaikanal, Yelagiri, etc.) may have additional charges based on actual cab demand. Also, the AC will be turned off during hill travel for safety.' },
  { q: 'Which cities do you operate in?', a: 'We operate across all major Tamil Nadu cities including Chennai, Madurai, Trichy, Coimbatore, Salem, Vellore, Tirunelveli, Nagercoil, Kumbakonam, Erode, Puducherry, and Bangalore. We cover 200+ cities.' },
  { q: 'How do I contact customer support?', a: 'Call or WhatsApp us at +91 7019700584. We provide 24/7 customer support for all booking queries, emergencies, and travel assistance.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-100 text-brand font-semibold text-sm px-4 py-1 rounded-full mb-4">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you need to know about EcoRide DropTaxi</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-xl border transition-all ${open === i ? 'border-brand shadow-md' : 'border-gray-200 bg-white'}`}>
              <button className="w-full flex justify-between items-center p-5 text-left" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className={`font-semibold ${open === i ? 'text-brand' : 'text-dark'}`}>{faq.q}</span>
                <span className={`text-xl flex-shrink-0 ml-4 transition-transform ${open === i ? 'rotate-45 text-brand' : 'text-gray-400'}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-brand rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-green-200 mb-5">Our support team is available 24/7 to help you</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+917019700584" className="bg-white text-brand font-bold px-6 py-3 rounded-lg hover:bg-brand-50 transition-all">
              📞 Call +91 7019700584
            </a>
            <a href={`https://wa.me/917019700584`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-600 transition-all">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
