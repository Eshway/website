import Script from 'next/script';
import { Footer, Navbar } from '../components';
import { About, Explore, Services, GetStarted, Hero, WhatsNew, Merch } from '../sections';
import EshVision from '../sections/EshVision';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-3MY67GFCTB" />
    <Script id="google-analytics">
      {`
          function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
          o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
          o.onload=function(){window.trackingFunctions.onLoad({appId:"663f29bfa8928601c7633aee"})},
          document.head.appendChild(o)}initApollo();
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-3MY67GFCTB');
        `}
    </Script>
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Services />
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <EshVision />
      <div className="gradient-03 z-0" />
      <Merch />
      <Explore />
      <Testimonials />
    </div>
    {/* <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div> */}
    <Footer />
  </div>
);

export default Home;
