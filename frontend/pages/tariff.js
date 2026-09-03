import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const tariff = [
  { vehicle: 'Sedan', examples: 'Swift Dzire, Etios, Xcent', oneWay: 14, roundTrip: 13, batta: 300, maxPax: 4, icon: '🚗' },
  { vehicle: 'SUV', examples: 'Ertiga, Marazzo, Xylo', oneWay: 19, roundTrip: 18, batta: 400, maxPax: 6, icon: '🚙' },
  { vehicle: 'Innova', examples: 'Toyota Innova', oneWay: 20, roundTrip: 19, batta: 400, maxPax: 7, icon: '🚐' },
  { vehicle: 'Innova Crysta', examples: 'Premium Innova Crysta', oneWay: 23, roundTrip: 22, batta: 500, maxPax: 7, icon: '✨' },
];

const extras = [
  { label: 'Toll charges', value: 'Extra — paid at actuals' },
  { label: 'State permit', value: 'Extra — if applicable' },
  { label: 'Parking charges', value: 'Extra — if applicable' },
  { label: 'Hill station charges', value: 'Extra — based on demand' },
  { label: 'Night charges', value: '₹200 extra (10 PM–6 AM)' },
  { label: 'Driver batta', value: 'Included in base fare' },
  { label: 'Waiting charges', value: '₹100/hour after 30 mins' },
  { label: 'Airport entry fee', value: 'Extra — at actuals' },
];

const popularFares = [
  // Tiruvannamalai routes (Business Origin)
  { route: 'Tiruvannamalai → Chennai', km: 185, sedan: 2890, suv: 3915 },
  { route: 'Tiruvannamalai → Bangalore', km: 200, sedan: 3100, suv: 4200 },
  { route: 'Tiruvannamalai → Vellore', km: 85, sedan: 1490, suv: 2015 },
  { route: 'Tiruvannamalai → Pondicherry', km: 140, sedan: 2260, suv: 3060 },
  { route: 'Tiruvannamalai → Trichy', km: 210, sedan: 3240, suv: 4390 },
  { route: 'Tiruvannamalai → Salem', km: 145, sedan: 2330, suv: 3155 },
  { route: 'Tiruvannamalai → Coimbatore', km: 340, sedan: 5060, suv: 6860 },
  { route: 'Tiruvannamalai → Madurai', km: 340, sedan: 5060, suv: 6860 },
  { route: 'Tiruvannamalai → Villupuram', km: 65, sedan: 1210, suv: 1635 },
  { route: 'Tiruvannamalai → Kanchipuram', km: 135, sedan: 2190, suv: 2965 },
  // Other popular routes
  { route: 'Chennai → Coimbatore', km: 510, sedan: 7950, suv: 10590 },
  { route: 'Chennai → Madurai', km: 470, sedan: 7350, suv: 9830 },
  { route: 'Chennai → Trichy', km: 330, sedan: 5250, suv: 6570 },
  { route: 'Chennai → Bangalore', km: 340, sedan: 5400, suv: 6760 },
  { route: 'Chennai → Salem', km: 345, sedan: 5475, suv: 6855 },
  { route: 'Coimbatore → Bangalore', km: 360, sedan: 5640, suv: 7240 },
  { route: 'Madurai → Chennai', km: 470, sedan: 7350, suv: 9830 },
  { route: 'Trichy → Bangalore', km: 370, sedan: 5880, suv: 7430 },
];

export default function Tariff() {
  return (
    <>
      <Head>
        <title>Drop Taxi Fare & Tariff — One Way Taxi Rate Per Km | EcoRide DropTaxi Tamil Nadu</title>
        <meta name="description" content="EcoRide DropTaxi fare chart — Sedan ₹14/km, SUV ₹19/km, Innova ₹20/km, Innova Crysta ₹23/km. Transparent one-way & round trip taxi fares across Tamil Nadu & Bangalore. No hidden charges. Check fare for Chennai, Coimbatore, Madurai, Trichy routes." />
        <meta name="keywords" content="drop taxi fare, one way taxi rate, taxi fare per km, drop taxi price, outstation cab fare, Chennai taxi fare, Coimbatore taxi rate, Madurai taxi price, Tamil Nadu taxi tariff, one way cab rate, drop taxi tariff chart, sedan taxi rate, SUV taxi fare, Innova taxi rate" />

        {/* Canonical */}
        <link rel="canonical" href="https://ecoride-droptaxi.vercel.app/tariff" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecoride-droptaxi.vercel.app/tariff" />
        <meta property="og:title" content="Drop Taxi Fare & Tariff — EcoRide DropTaxi Tamil Nadu" />
        <meta property="og:description" content="Sedan ₹14/km, SUV ₹19/km, Innova ₹20/km. Transparent one-way taxi fares across Tamil Nadu & Bangalore." />
        <meta property="og:site_name" content="EcoRide DropTaxi" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Drop Taxi Fare & Tariff — EcoRide DropTaxi" />
        <meta name="twitter:description" content="Sedan ₹14/km, SUV ₹19/km. Transparent one-way taxi fares across Tamil Nadu." />
      </Head>

      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-r from-dark to-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Taxi Fare & Tariff</h1>
          <p className="text-green-300 text-xl mb-6">Transparent pricing — No hidden charges</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/#booking" className="btn-primary">🚖 Book Now</Link>
            <a href="tel:+917019700584" className="bg-white/10 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-all">📞 +91 7019700584</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Vehicle fare table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-2">Vehicle Type & Pricing</h2>
          <p className="text-gray-500 mb-8">Per kilometer rates for one-way and round trip journeys</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tariff.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 hover:border-brand hover:shadow-lg transition-all p-6 text-center">
                <div className="text-5xl mb-3">{t.icon}</div>
                <h3 className="font-black text-xl text-dark mb-1">{t.vehicle}</h3>
                <p className="text-gray-400 text-xs mb-4">{t.examples}</p>
                <div className="bg-brand-50 rounded-xl p-3 mb-4">
                  <div className="text-brand font-black text-3xl">₹{t.oneWay}</div>
                  <div className="text-gray-400 text-xs font-medium">per km · One Way</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3 mb-4">
                  <div className="text-gray-700 font-bold text-2xl">₹{t.roundTrip}</div>
                  <div className="text-gray-400 text-xs">per km · Round Trip</div>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <div>👥 Max {t.maxPax} passengers</div>
                  <div>🧍 Driver batta ₹{t.batta}/day</div>
                </div>
                <Link href="/#booking" className="mt-4 block btn-primary text-sm text-center py-2">Book {t.vehicle}</Link>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>* Minimum distance:</strong> One Way — 130 km | Round Trip — 250 km. Toll, parking, hill charges are extra if applicable.
          </div>
        </div>

        {/* Extra charges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-dark mb-2">Additional Charges</h2>
          <p className="text-gray-500 mb-8">These charges may apply based on your trip</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {extras.map((e, i) => (
              <div key={i} className="flex justify-between items-center bg-white rounded-xl border border-gray-100 px-5 py-3">
                <span className="text-gray-700 font-medium text-sm">{e.label}</span>
                <span className="text-brand font-bold text-sm">{e.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular route fares */}
        <div>
          <h2 className="text-3xl font-bold text-dark mb-2">Popular Route Fares</h2>
          <p className="text-gray-500 mb-8">Indicative one-way fares for top routes (includes driver batta)</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-brand text-white">
                <tr>
                  <th className="text-left px-5 py-3">Route</th>
                  <th className="text-center px-5 py-3">Distance</th>
                  <th className="text-center px-5 py-3">Sedan</th>
                  <th className="text-center px-5 py-3">SUV</th>
                  <th className="text-center px-5 py-3">Book</th>
                </tr>
              </thead>
              <tbody>
                {popularFares.map((f, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-3 font-semibold text-dark">{f.route}</td>
                    <td className="px-5 py-3 text-center text-gray-500">~{f.km} km</td>
                    <td className="px-5 py-3 text-center text-brand font-bold">₹{f.sedan.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-3 text-center text-gray-700 font-semibold">₹{f.suv.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-3 text-center">
                      <Link href="/#booking" className="bg-brand text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-brand-dark transition-all">Book →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">*Fares include driver batta. Toll & permit extra. Final bill may vary by actual distance.</p>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
