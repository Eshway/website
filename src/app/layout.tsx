import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Head from 'next/head';

const karla = Inter({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eshway',
  description: 'Boost your online presence with our expert website design and digital marketing services. We create stunning websites and provide complete digital marketing package.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        <meta name="description" content="Boost your online presence with our expert website design and digital marketing services. We create stunning websites and provide complete digital marketing package." />
        <meta name="keywords" content="Eshway, Web, Website, WebDesigning, TRANSFORMING YOUR DIGITAL LANDSCAPE FOR A BETTER TOMORROW, ESHWAY, Make Website, Revamp, Web development, Digital marketing, SEO optimization, Social media marketing, Content marketing, Branding, E-commerce solutions, Online advertising, Responsive design, Mobile-friendly websites, User experience (UX), Web analytics, Email marketing, Search engine marketing (SEM), Lead generation, Online presence, Web strategy, Website maintenance, Online reputation management" />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/43770403.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
