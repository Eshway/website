import { Footer, Navbar } from '../components';
import { About, Explore, Services, GetStarted, Hero, WhatsNew, Merch } from '../sections';
import EshVision from '../sections/EshVision';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
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
