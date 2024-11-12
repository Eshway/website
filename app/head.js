import Script from 'next/script';

const Head = () => (
  <>
    <title>Eshway</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Boost your online presence with our expert website design and digital marketing services. We create stunning websites and provide complete digital marketing package." />
    <meta name="keywords" content="Eshway, Web, Website, WebDesigning, TRANSFORMING YOUR DIGITAL LANDSCAPE FOR A BETTER TOMORROW, ESHWAY, Make Website, Revamp, Web development, Digital marketing, SEO optimization, Social media marketing, Content marketing, Branding, E-commerce solutions, Online advertising, Responsive design, Mobile-friendly websites, User experience (UX), Web analytics, Email marketing, Search engine marketing (SEM), Lead generation, Online presence, Web strategy, Website maintenance, Online reputation management" />
    <link rel="icon" href="/favicon.ico" />
    <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/43770403.js" />
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
  </>
);

export default Head;
