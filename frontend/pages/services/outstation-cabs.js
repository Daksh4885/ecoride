import Head from 'next/head';
import Navbar from '../../components/Navbar';
import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer';
import WhatsAppFloat from '../../components/WhatsAppFloat';
import { localBusinessSchema } from '../../utils/schema';

export default function OutstationCabs() {
  const pageUrl = "https://www.ecoridedroptaxi.com/services/outstation-cabs";
  
  return (
    <>
      <Head>
        <title>Outstation Cabs & Intercity Drop Taxi in Tamil Nadu | EcoRide</title>
        <meta name="description" content="Premium outstation cabs and intercity taxi services across South India. Affordable per km rates, clean AC vehicles, and experienced drivers for long distance travel." />
        <link rel="canonical" href={pageUrl} />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Outstation Cabs & Intercity Drop Taxi | EcoRide DropTaxi" />
        <meta property="og:description" content="Premium outstation cabs and intercity taxi services across South India. Affordable rates and clean AC vehicles." />
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
            <div className="absolute top-20 left-10 text-9xl">🛣️</div>
            <div className="absolute bottom-20 right-10 text-9xl">🚖</div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div>
              <center><h2 className="text-xl md:text-3xl font-bold text-white mb-4">
                Plan Your <span className="text-brand-light">Outstation Trip</span>
              </h2></center>
              <BookingForm />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-brand/20 text-green-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Covering 200+ Cities
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Outstation Cabs & <br />
                <span className="text-brand-light">Intercity Travel</span>
              </h1>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Safe, comfortable, and affordable outstation taxi service.<br/>
                Perfect for family trips, business travel, and weekend getaways.
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
            <h2 className="text-2xl font-bold text-dark mb-4">Intercity Travel Made Easy</h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Traveling between cities shouldn't be stressful. EcoRide provides premium <strong>outstation cab services</strong> across Tamil Nadu, 
                Karnataka, Kerala, and Andhra Pradesh. Whether it's a one-way drop or a round-trip vacation to a hill station like Ooty or Kodaikanal, 
                our fleet is ready for the long journey.
              </p>
              <p>
                Our drivers are highly experienced in highway driving and intercity routes, ensuring a smooth and safe trip for you and your family. 
                With transparent billing based on a fixed per-kilometer rate, you never have to worry about hidden charges.
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
