import { Footer, Navbar } from '../components';
import ContactUs from '../sections/ContactUs';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <ContactUs />
    {/* <Feedback /> */}
    <div className="gradient-04 z-0  h-[2000px]" />
    <Footer />
  </div>
);

export default Home;
