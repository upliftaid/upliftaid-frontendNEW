import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavbar";
import Header from "../components/Header";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

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
