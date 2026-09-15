import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import WhyChooseUs from '../components/WhyChooseUs';
import PopularRoutes from '../components/PopularRoutes';
import HowToBook from '../components/HowToBook';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

import { localBusinessSchema, faqSchema, webSiteSchema } from '../utils/schema';
export default function Home() {
  return (
    <>
      <Head>
        {/* ── Primary SEO ── */}
        <title>One Way Drop Taxi in Tamil Nadu | EcoRide</title>
        <meta name="description" content="EcoRide DropTaxi — #1 one-way drop taxi service in South India. Pay only one-way fare from ₹15/km. No return charge. Chennai, Coimbatore, Madurai, Trichy, Salem, Vellore, Tirunelveli drop taxi. Book online or call +91 7019700584. 24/7 outstation cab service." />
        <meta name="keywords" content="drop taxi, droptaxi, one way taxi, one way cab, outstation taxi, outstation cab, drop taxi South India, drop taxi Kerala, drop taxi Karnataka, drop taxi Chennai, drop taxi Coimbatore, drop taxi Madurai, drop taxi Trichy, drop taxi Salem, drop taxi Vellore, drop taxi Bangalore, drop taxi Tirunelveli, drop taxi Tiruvannamalai, one way taxi Chennai, one way taxi Coimbatore, one way taxi Madurai, Chennai to Coimbatore taxi, Chennai to Madurai taxi, Chennai to Bangalore taxi, Chennai to Trichy taxi, Coimbatore to Chennai taxi, Madurai to Chennai taxi, Bangalore to Chennai taxi, outstation cab Tamil Nadu, airport taxi Chennai, airport cab Coimbatore, Tiruvannamalai to Chennai taxi, Tiruvannamalai to Bangalore taxi, one way drop taxi, cheap taxi Tamil Nadu, affordable cab service, 24/7 taxi service, book taxi online Tamil Nadu" />

        {/* ── Canonical URL ── */}
        <link rel="canonical" href="https://www.ecoridedroptaxi.com/" />

        {/* ── Open Graph (Facebook, WhatsApp, LinkedIn) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ecoridedroptaxi.com/" />
        <meta property="og:title" content="Drop Taxi | One Way Taxi Tamil Nadu & Bangalore — EcoRide DropTaxi" />
        <meta property="og:description" content="Pay only one-way fare from ₹15/km! No return charge. Reliable drop taxi & outstation cab service across South India. Book online 24/7." />
        <meta property="og:site_name" content="EcoRide DropTaxi" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://www.ecoridedroptaxi.com/logo.png" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drop Taxi | One Way Taxi Service — EcoRide DropTaxi" />
        <meta name="twitter:description" content="Pay only one-way fare from ₹15/km! No return charge. 24/7 drop taxi across South India." />
        <meta name="twitter:image" content="https://www.ecoridedroptaxi.com/logo.png" />

        {/* ── Favicon is defined in _document.js ── */}

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </Head>

      <Navbar />

      <main>
        {/* ── Hero Section ── */}
        <section id="booking" className="bg-gradient-to-br from-dark via-gray-900 to-brand-dark min-h-[92vh] flex items-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
            <div className="absolute top-20 left-10 text-9xl">🚖</div>
            <div className="absolute bottom-20 right-10 text-9xl">🛣️</div>
            <div className="absolute top-1/2 left-1/2 text-9xl opacity-30">🗺️</div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left — Booking Form */}
            <div>
              <center><h2 className="text-xl md:text-3xl font-bold text-white mb-4">
                Book Your <span className="text-brand-light">One Way Ride</span> Now
              </h2></center>

              {/* Mobile Call/WhatsApp Buttons */}
              <div className="flex justify-center gap-3 mb-6 md:hidden">
                <a href="tel:+917019700584" className="flex-1 flex items-center justify-center gap-2 bg-white text-dark font-bold py-2.5 px-4 rounded-lg hover:bg-gray-100 transition shadow-md text-sm">
                  📞 Call
                </a>
                <a href="https://wa.me/917019700584" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-green-600 transition shadow-md text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>

              <BookingForm />
            </div>

            {/* Right — Headline */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/20 text-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Available 24/7 across South India
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Tamil Nadu's Premium<br />
                <span className="text-brand-light">One-Way Drop Taxi</span><br />
                Service
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Pay <strong className="text-white">Only One-Way Fare</strong> · No Return Charge<br />
                24/7 Drop Taxi Across Tamil Nadu
              </p>

              {/* Key features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  '✅ No Hidden Charges',
                  '🚗 AC Comfortable Cars',
                  '👨‍✈️ Professional Drivers',
                  '📞 Instant Confirmation',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917019700584"
                  className="flex items-center justify-center gap-2 bg-white text-dark font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                  📞 +91 7019700584
                </a>
                <a href={`https://wa.me/917019700584`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-all shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick fare banner */}
        <section className="bg-brand text-white py-4" aria-label="Taxi fare rates">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <span>🚗 Sedan — ₹15/km</span>
            <span>🚙 SUV — ₹19/km</span>
            <span>🚐 Innova — ₹20/km</span>
            <span>✨ Innova Crysta — ₹23/km</span>
            <span className="text-green-200">*Toll & permit extra</span>
          </div>
        </section>

        <WhyChooseUs />
        <PopularRoutes />
        <HowToBook />
        <Testimonials />
        <FAQ />

        {/* ── SEO Content Block (hidden visually, crawlable by Google) ── */}
        <section className="bg-gray-50 py-16" aria-label="About EcoRide DropTaxi services">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-4">One Way Drop Taxi Service in South India</h2>
            <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                <strong>EcoRide DropTaxi</strong> is South India's most trusted <strong>one-way drop taxi</strong> and <strong>outstation cab service</strong>.
                We offer affordable drop taxi rides starting from just <strong>₹15 per km</strong> for sedans. Unlike traditional taxi services,
                you <strong>pay only for one way</strong> — no return fare, no hidden charges.
              </p>
              <p>
                Our <strong>drop taxi service</strong> covers all major cities in South India including <strong>Chennai, Coimbatore, Madurai, Trichy,
                  Salem, Vellore, Tirunelveli, Nagercoil, Tiruvannamalai, Pondicherry, Thanjavur, Erode, Kumbakonam</strong>, and <strong>Bangalore</strong>.
                Whether you need a <strong>Chennai to Coimbatore taxi</strong>, <strong>Chennai to Madurai cab</strong>, <strong>Bangalore to Chennai drop taxi</strong>,
                or any intercity route — we've got you covered with 200+ city-to-city routes.
              </p>
              <p>
                We provide a range of well-maintained, AC vehicles for your comfort: <strong>Sedan (Swift Dzire, Etios)</strong> at ₹15/km,
                <strong>SUV (Innova, Ertiga)</strong> at ₹19/km, <strong>Toyota Innova</strong> at ₹20/km, and <strong>Innova Crysta</strong> at ₹23/km.
                All our drivers are professional, courteous, and experienced with outstation routes.
              </p>
              <p>
                Book your <strong>one way taxi</strong> online 24/7 or call us at <strong>+91 7019700584</strong>.
                We also offer <strong>round trip taxi</strong>, <strong>airport taxi transfers</strong>, <strong>hill station trips</strong> (Ooty, Kodaikanal, Yelagiri),
                and <strong>corporate cab services</strong> across South India.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}

