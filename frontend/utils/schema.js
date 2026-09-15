export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "name": "EcoRide DropTaxi",
  "alternateName": "EcoRide Drop Taxi Tamil Nadu",
  "description": "Affordable one-way drop taxi and outstation cab service across South India. Pay only one-way fare with no return charges. Sedan ₹15/km, SUV ₹20/km, Innova ₹21/km.",
  "url": "https://www.ecoridedroptaxi.com",
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

export const faqSchema = {
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

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EcoRide DropTaxi",
  "url": "https://www.ecoridedroptaxi.com",
  "description": "One way drop taxi service across South India",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.ecoridedroptaxi.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
