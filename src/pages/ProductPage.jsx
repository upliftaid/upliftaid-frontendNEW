import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavbar";
import Header from "../components/product/Header";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../components/product/ProductCard";
import ProductFilter from "../components/product/ProductFilter";

const ProductPage = () => {
  return (
    <div className="font-[Poppins]">
      <Navbar />
      <MobileNavbar />

      <section className="grid gap-4">
        {/* Header */}
        <Header />
        <ProductFilter />

        {/* Cards */}

        <ProductCard />
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
