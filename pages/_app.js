import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Eshway</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Boost your online presence with our expert website design and digital marketing services. We create stunning websites and provide complete digital marketing package." />
      <meta name="keywords" content="Eshway, Web, Website, WebDesigning, TRANSFORMING YOUR DIGITAL LANDSCAPE FOR A BETTER TOMORROW, ESHWAY, Make Website, Revamp, Web development, Digital marketing, SEO optimization, Social media marketing, Content marketing, Branding, E-commerce solutions, Online advertising, Responsive design, Mobile-friendly websites, User experience (UX), Web analytics, Email marketing, Search engine marketing (SEM), Lead generation, Online presence, Web strategy, Website maintenance, Online reputation management" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
