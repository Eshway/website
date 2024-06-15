import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const karla = Inter({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className={karla.className}>{children}</body>
    </html>
  );
}