import { Footer, Navbar } from '../../components';
import Product from '../../sections/Product';

const productPage = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Product price="399" />
    <Footer />
  </div>
);
export default productPage;
