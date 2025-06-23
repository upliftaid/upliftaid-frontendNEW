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
        
        {/* SearchBar */}
        {/* <div className="flex lg:gap-10 p-6 mx-auto gap-4">
          <div className="lg:w-100 h-10 border rounded flex items-center p-2">
            <div>
              <IoIosSearch size={20} />
            </div>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full h-full outline-none p-2 rounded"
            />
          </div>
          <button className="h-10 w-20 border rounded-md cursor-pointer hover:bg-[#00733C] hover:text-white">
            Search
          </button>
        </div> */}

        {/* Cards */}

        <ProductCard />
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
