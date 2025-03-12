import Head from 'next/head';
import '../styles/globals.css';


const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Eshway",
  "url": "https://eshway.com",
  "description": "Eshway is a tech company providing innovative solutions, including LTD - Live Tracking Dashboard.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://eshway.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "sitelinks": [
    {
      "@type": "WebPage",
      "name": "LTD - Live Tracking Dashboard",
      "url": "https://ltd.eshway.com",
      "description": "LTD is a live tracking dashboard that helps businesses stay on top of their projects."
    }
  ],
  "breadcrumb": {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://eshway.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://eshway.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://eshway.com/services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "LTD - Live Tracking Dashboard",
        "item": "https://ltd.eshway.com"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Eshway Merchandise ₹ 399",
        "item": "https://eshway.com/store"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "EshVision",
        "item": "https://eshway.com/eshvision"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Contact Us",
        "item": "https://eshway.com/contact"
      }
    ]
  }
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <meta name="description" content="Boost your online presence with our expert website design and digital marketing services. We create stunning websites and provide complete digital marketing package." />
      <meta name="keywords" content="Eshway, Web, Website, WebDesigning, TRANSFORMING YOUR DIGITAL LANDSCAPE FOR A BETTER TOMORROW, ESHWAY, Make Website, Revamp, Web development, Digital marketing, SEO optimization, Social media marketing, Content marketing, Branding, E-commerce solutions, Online advertising, Responsive design, Mobile-friendly websites, User experience (UX), Web analytics, Email marketing, Search engine marketing (SEM), Lead generation, Online presence, Web strategy, Website maintenance, Online reputation management" />
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/43770403.js" />
    </Head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
