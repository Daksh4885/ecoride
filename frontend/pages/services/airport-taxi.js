import Head from 'next/head';
import Navbar from '../../components/Navbar';
import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { localBusinessSchema, faqSchema, webSiteSchema } from '../../utils/schema';

export default function AirportTaxi() {
  const pageUrl = "https://www.ecoridedroptaxi.com/services/airport-taxi";
  
  return (
    <>
      <Head>
        <title>Reliable Airport Taxi Service in Chennai, Bangalore & South India | EcoRide</title>
        <meta name="description" content="Book affordable airport taxi and drop services for Chennai, Bangalore, Coimbatore, and Madurai airports. 24/7 on-time pickup, transparent pricing, and comfortable AC cabs." />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Reliable Airport Taxi Service | EcoRide DropTaxi" />
        <meta property="og:description" content="Book affordable airport taxi and drop services for Chennai, Bangalore, Coimbatore, and Madurai airports." />
        <meta property="og:image" content="https://www.ecoridedroptaxi.com/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>

      <Navbar />

      <main>
        <section className="bg-gradient-to-br from-dark via-gray-900 to-brand-dark min-h-[70vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
            <div className="absolute top-20 left-10 text-9xl">✈️</div>
            <div className="absolute bottom-20 right-10 text-9xl">🚖</div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div>
              <center><h2 className="text-xl md:text-3xl font-bold text-white mb-4">
                Book Your <span className="text-brand-light">Airport Drop</span> Now
              </h2></center>
              <BookingForm />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-brand/20 text-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                On-Time Pickup Guaranteed
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Airport Taxi <br />
                <span className="text-brand-light">& Drop Service</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Seamless airport transfers in Chennai, Bangalore, Coimbatore, and Madurai.<br/>
                No surge pricing. 24/7 availability for late-night flights.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917019700584"
                  className="flex items-center justify-center gap-2 bg-white text-dark font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                  📞 +91 7019700584
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-4">Hassle-Free Airport Transfers</h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Missing a flight or waiting for a cab after a long journey is exhausting. With EcoRide's <strong>airport taxi service</strong>, 
                you are guaranteed punctual pickups and drops at all major South Indian airports, including Chennai International Airport, 
                Kempegowda International Airport (Bangalore), and Coimbatore International Airport.
              </p>
              <p>
                Whether you need a quick sedan or a spacious Innova for extra luggage, our transparent pricing ensures you never pay surge prices, 
                even during peak hours or late at night.
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
