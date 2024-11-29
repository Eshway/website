import Product from '@/app/sections/Product';
import { Footer, Navbar } from '@/components';

const productPage = () => (
    <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <Product price="399" />
        <Footer />
    </div>
);
export default productPage;