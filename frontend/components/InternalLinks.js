import Link from 'next/link';
import { seoData } from '../data/seoData';

export default function InternalLinks() {
  const popularRoutes = seoData.routes.filter(r => r.popular);

  return (
    <section className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-dark mb-8 text-center">Explore Our Drop Taxi Network</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Popular Routes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Popular Routes</h3>
            <ul className="space-y-2 text-sm">
              {popularRoutes.slice(0, 8).map((route, idx) => (
                <li key={idx}>
                  <Link href={`/${route.fromSlug}-to-${route.toSlug}-one-way-taxi`} className="text-brand hover:text-brand-dark transition-colors">
                    {route.fromCity} to {route.toCity} Drop Taxi
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">City Drop Taxis</h3>
            <ul className="space-y-2 text-sm">
              {seoData.cities.map((city, idx) => (
                <li key={idx}>
                  <Link href={`/${city.slug}-one-way-taxi`} className="text-brand hover:text-brand-dark transition-colors">
                    One Way Taxi in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">State Coverage</h3>
            <ul className="space-y-2 text-sm">
              {seoData.states.map((state, idx) => (
                <li key={idx}>
                  <Link href={`/${state.slug}-one-way-taxi`} className="text-brand hover:text-brand-dark transition-colors">
                    Drop Taxi {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
