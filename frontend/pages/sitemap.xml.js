import { seoRoutes } from '../data/seoRoutes';

const BASE_URL = 'https://www.ecoridedroptaxi.com';

function generateSiteMap(routes) {
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
     
     <!-- Dynamic SEO route URLs -->
     ${Object.keys(routes).map((slug) => {
       return `
       <url>
           <loc>${BASE_URL}/routes/${slug}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
     }).join('')}
   </urlset>
 `;
}

export function getServerSideProps({ res }) {
  // Generate the XML sitemap with the dynamic route data
  const sitemap = generateSiteMap(seoRoutes);

  res.setHeader('Content-Type', 'text/xml');
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}
