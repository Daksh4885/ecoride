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

// JSON-LD Structured Data for LocalBusiness (Taxi Service)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "EcoRide DropTaxi",
  "alternateName": "EcoRide Drop Taxi Tamil Nadu",
  "description": "Affordable one-way drop taxi and outstation cab service across South India. Pay only one-way fare with no return charges. Sedan ₹15/km, SUV ₹20/km, Innova ₹21/km.",
  "url": "https://ecoride-droptaxi.vercel.app",
  "telephone": "+917019700584",
  "priceRange": "₹15 - ₹23 per km",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, GPay, PhonePe, Paytm",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "State", "name": "Karnataka" },
    { "@type": "State", "name": "Andhra Pradesh" },
    { "@type": "State", "name": "Kerala" },
    { "@type": "State", "name": "Telangana" },
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "City", "name": "Kochi" },
    { "@type": "City", "name": "Trivandrum" },
    { "@type": "City", "name": "Vijayawada" },
    { "@type": "City", "name": "Coimbatore" },
    { "@type": "City", "name": "Madurai" },
    { "@type": "City", "name": "Trichy" },
    { "@type": "City", "name": "Salem" },
    { "@type": "City", "name": "Vellore" },
    { "@type": "City", "name": "Tirunelveli" },
    { "@type": "City", "name": "Tiruvannamalai" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Pondicherry" },
    { "@type": "City", "name": "Nagercoil" },
    { "@type": "City", "name": "Thanjavur" },
    { "@type": "City", "name": "Erode" },
    { "@type": "City", "name": "Kumbakonam" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Drop Taxi Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "One Way Drop Taxi" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Round Trip Taxi" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Outstation Cab Service" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Taxi Transfer" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2500",
    "bestRating": "5"
  }
};

// JSON-LD FAQPage Schema (enables FAQ rich results in Google)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is EcoRide DropTaxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EcoRide DropTaxi offers one-way drop taxi, round trip taxi, and outstation cab services across South India. Our most popular routes include Chennai, Coimbatore, Madurai, Trichy, Salem, Vellore, Tirunelveli, and Bangalore."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fare for one-way drop taxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sedan: ₹15/km, SUV: ₹20/km, Innova: ₹21/km, Innova Crysta: ₹24/km. Minimum distance is 130 km for one-way trips. Driver batta, toll, and permit charges are extra where applicable."
      }
    },
    {
      "@type": "Question",
      "name": "Do I pay for the return trip in a one-way taxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! You pay only ONE WAY fare. There are no return charges. You are billed only for the actual distance from pickup to drop."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a drop taxi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book online using the form on our homepage, or call/WhatsApp us at +91 7019700584. Simply enter your pickup & drop location, date, time, vehicle type, and your contact details to get instant confirmation."
      }
    },
    {
      "@type": "Question",
      "name": "Which cities do you operate in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate across all major cities in South India including Chennai, Madurai, Trichy, Coimbatore, Salem, Vellore, Tirunelveli, Nagercoil, Kumbakonam, Erode, Puducherry, and Bangalore. We cover 200+ cities."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods do you accept?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept cash, UPI (GPay, PhonePe, Paytm), and digital wallets. Payment can be made to the driver at the end of the trip."
      }
    },
    {
      "@type": "Question",
      "name": "How is the total fare calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fare = Distance × Per km rate + Driver Batta. Toll fees, hill charges, state permits, and parking are extra and paid at actuals."
      }
    }
  ]
};

// JSON-LD WebSite schema (enables sitelinks search box in Google)
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EcoRide DropTaxi",
  "url": "https://ecoride-droptaxi.vercel.app",
  "description": "One way drop taxi service across South India",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ecoride-droptaxi.vercel.app/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  return (
    <>
      <Head>
        {/* ── Primary SEO ── */}
        <title>Drop Taxi | One Way Taxi Service Tamil Nadu & Bangalore — EcoRide DropTaxi</title>
        <meta name="description" content="EcoRide DropTaxi — #1 one-way drop taxi service in South India. Pay only one-way fare from ₹15/km. No return charge. Chennai, Coimbatore, Madurai, Trichy, Salem, Vellore, Tirunelveli drop taxi. Book online or call +91 7019700584. 24/7 outstation cab service." />
        <meta name="keywords" content="drop taxi, droptaxi, one way taxi, one way cab, outstation taxi, outstation cab, drop taxi South India, drop taxi Kerala, drop taxi Karnataka, drop taxi Chennai, drop taxi Coimbatore, drop taxi Madurai, drop taxi Trichy, drop taxi Salem, drop taxi Vellore, drop taxi Bangalore, drop taxi Tirunelveli, drop taxi Tiruvannamalai, one way taxi Chennai, one way taxi Coimbatore, one way taxi Madurai, Chennai to Coimbatore taxi, Chennai to Madurai taxi, Chennai to Bangalore taxi, Chennai to Trichy taxi, Coimbatore to Chennai taxi, Madurai to Chennai taxi, Bangalore to Chennai taxi, outstation cab Tamil Nadu, airport taxi Chennai, airport cab Coimbatore, Tiruvannamalai to Chennai taxi, Tiruvannamalai to Bangalore taxi, one way drop taxi, cheap taxi Tamil Nadu, affordable cab service, 24/7 taxi service, book taxi online Tamil Nadu" />

        {/* ── Canonical URL ── */}
        <link rel="canonical" href="https://ecoride-droptaxi.vercel.app/" />

        {/* ── Open Graph (Facebook, WhatsApp, LinkedIn) ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecoride-droptaxi.vercel.app/" />
        <meta property="og:title" content="Drop Taxi | One Way Taxi Tamil Nadu & Bangalore — EcoRide DropTaxi" />
        <meta property="og:description" content="Pay only one-way fare from ₹15/km! No return charge. Reliable drop taxi & outstation cab service across South India. Book online 24/7." />
        <meta property="og:site_name" content="EcoRide DropTaxi" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://ecoride-droptaxi.vercel.app/logo.png" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drop Taxi | One Way Taxi Service — EcoRide DropTaxi" />
        <meta name="twitter:description" content="Pay only one-way fare from ₹15/km! No return charge. 24/7 drop taxi across South India." />
        <meta name="twitter:image" content="https://ecoride-droptaxi.vercel.app/logo.png" />

        {/* ── Favicon ── */}
        <link rel="icon" href="/logo.png" type="image/png" />

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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left — Booking Form */}
            <div>
              <center><h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Book Your <span className="text-brand-light">One Way Ride</span> Now
              </h2></center>
              <BookingForm />
            </div>

            {/* Right — Headline */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/20 text-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Available 24/7 across South India
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Drop Taxi &<br />
                <span className="text-brand-light">One Way Taxi</span><br />
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

