import About from '@/components/About';
import Divider from '@/components/Divider';
import { Hero } from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import StaticHero from '@/components/StaticHero';
import { Testimonial } from '@/components/Testimonial';

export default function Home() {
  return (
    <div className='font-karla'>
      <Navbar />
      <StaticHero />
      {/* <Hero /> */}
      <Divider />
      <About />
      <Services />
      <Divider />
      <Testimonial />
    </div>
  );
}
