import { seoData } from '../data/seoData';

const BASE_URL = 'https://www.ecoridedroptaxi.com';

function generateSiteMap() {
  const dynamicUrls = [];

  // Add Route URLs
  seoData.routes.forEach(route => {
    dynamicUrls.push(`${BASE_URL}/${route.fromSlug}-to-${route.toSlug}-one-way-taxi`);
  });

  // Add City URLs
  seoData.cities.forEach(city => {
    dynamicUrls.push(`${BASE_URL}/${city.slug}-one-way-taxi`);
  });

  // Add State URLs
  seoData.states.forEach(state => {
    dynamicUrls.push(`${BASE_URL}/${state.slug}-one-way-taxi`);
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Manual static URLs -->
     <url>
       <loc>${BASE_URL}/</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${BASE_URL}/tariff</loc>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${BASE_URL}/services/airport-taxi</loc>
       <changefreq>monthly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${BASE_URL}/services/outstation-cabs</loc>
       <changefreq>monthly</changefreq>
       <priority>0.9</priority>
     </url>
     
     <!-- Dynamic SEO URLs -->
     ${dynamicUrls.map((url) => {
       return `
       <url>
           <loc>${url}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
     }).join('')}
   </urlset>
 `;
}

export function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
