import { Footer, Navbar } from '@/components';
import ShopHero from '../sections/ShopHero';

const Store = () => (
    <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <ShopHero />
        <Footer />
    </div>
);
export default Store;