import Head from 'next/head';
import Navbar from '../../components/Navbar';
import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { seoRoutes } from '../../data/seoRoutes';
import { localBusinessSchema, faqSchema, webSiteSchema } from '../../utils/schema';

export default function RoutePage({ routeData, slug }) {
  if (!routeData) return null;

  const pageUrl = `https://www.ecoridedroptaxi.com/routes/${slug}`;

  return (
    <>
      <Head>
        <title>{routeData.title}</title>
        <meta name="description" content={routeData.description} />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={routeData.title} />
        <meta property="og:description" content={routeData.description} />
        <meta property="og:image" content="https://www.ecoridedroptaxi.com/logo.png" />

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
        <section className="bg-gradient-to-br from-dark via-gray-900 to-brand-dark min-h-[92vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
            <div className="absolute top-20 left-10 text-9xl">🚖</div>
            <div className="absolute bottom-20 right-10 text-9xl">🛣️</div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div>
              <center><h2 className="text-xl md:text-3xl font-bold text-white mb-4">
                Book Your Ride <span className="text-brand-light">Instantly</span>
              </h2></center>
              <BookingForm 
                initialPickup={routeData.fromCity} 
                initialDrop={routeData.toCity} 
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-brand/20 text-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                24/7 Service Available
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                {routeData.h1}
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Travel from {routeData.fromCity} to {routeData.toCity}. Distance: {routeData.distance}, Time: {routeData.duration}.<br/>
                Pay <strong className="text-white">Only One-Way Fare</strong>. No Return Charge.
              </p>

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
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <span>🚗 Sedan — ₹15/km</span>
            <span>🚙 SUV — ₹19/km</span>
            <span>🚐 Innova — ₹20/km</span>
            <span>✨ Innova Crysta — ₹23/km</span>
            <span className="text-green-200">*Toll & permit extra</span>
          </div>
        </section>
        
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-4">About Our {routeData.fromCity} to {routeData.toCity} Cab Service</h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Looking for a reliable and affordable <strong>drop taxi from {routeData.fromCity} to {routeData.toCity}</strong>? 
                EcoRide DropTaxi offers premium outstation cab services where you <strong>pay only for the one-way distance traveled</strong>. 
                Why pay for a round trip when you only need a drop?
              </p>
              <p>
                The total distance between {routeData.fromCity} and {routeData.toCity} is approximately <strong>{routeData.distance}</strong>, 
                and it takes about <strong>{routeData.duration}</strong> by road. We provide a fleet of well-maintained AC vehicles including 
                Sedans (Swift Dzire, Etios) and SUVs (Innova, Ertiga) to ensure a comfortable and safe journey.
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

export async function getStaticPaths() {
  const paths = Object.keys(seoRoutes).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const routeData = seoRoutes[params.slug];
  
  return {
    props: {
      routeData,
      slug: params.slug
    },
  };
}
