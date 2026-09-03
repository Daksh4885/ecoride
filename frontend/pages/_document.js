import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Global SEO meta */}
        <meta name="theme-color" content="#16a34a" />
        <meta name="author" content="EcoRide DropTaxi" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Geo targeting */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Tamil Nadu, India" />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
