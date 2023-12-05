import { Footer, Navbar } from '../components';
import InterIITContactUs from '../sections/InterIITContactUs';

const InterIIT = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <InterIITContactUs />
    {/* <Feedback /> */}
    <div className="gradient-04 z-0  h-[2000px]" />
    <Footer />
  </div>
);

export default InterIIT;
