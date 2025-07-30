import { useState } from "react";
import Footer from "../layout/Footer";
import MobileNavbar from "../layout/MobileNavbar";
import Navbar from "../layout/Navbar";
import ProductDetails from "../constants/product/ProductDetails";
import { NavLink } from "react-router-dom";
import UserReviews from "../components/product/UserReviews";

const ProductDetailPage = () => {
  const images = [
    "https://src1.ilogo.in/new_upload/2018/0803/15204827242232292422419698/1520501226/front_design_idea.webp",
    "https://src1.ilogo.in/new_upload/2018/0803/15204827242232292422419698/1520509942/front_design_idea.webp",
    "https://src1.ilogo.in/new_upload/2018/0803/15204827242232292422419698/1520508608/front_design_idea.webp",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [counts, setCounts] = useState({});

  const handleAdd = (index) => {
    setCounts((prev) => ({ ...prev, [index]: 1 }));
  };

  const increment = (index) => {
    setCounts((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
  };

  const decrement = (index) => {
    setCounts((prev) => {
      const newCount = (prev[index] || 0) - 1;
      if (newCount <= 0) {
        const { [index]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [index]: newCount };
    });
  };

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className="lg:p-10 flex gap-10 mt-15 md:mt-20 lg:mt-15 flex-col lg:flex-row">
        {/* Left */}
        <div className="grid gap-5">
          <div className="lg:w-180 h-130 border border-gray-200">
            <img
              src={selectedImage}
              alt="Product"
              className="w-full h-full object-scale-down"
            />
          </div>

          <div className="flex justify-center gap-10">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="size-20 border cursor-pointer border-gray-200"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="w-full h-full object-scale-down"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="border border-gray-200 lg:w-200 p-6 grid gap-6">
          {ProductDetails.map((data, index) => {
            const count = counts[index] || 0;

            return (
              <div key={index} className="grid gap-3 border-b pb-4">
                <h1 className="font-bold text-xl">{data.productTitle}</h1>
                <p className="text-gray-500">Size: {data.size}</p>
                <p>Stock: {data.stock}</p>
                <p className="font-semibold">Price: ₹{data.price}</p>
                <p className="">This soft, breathable t-shirt is made from premium cotton for all-day comfort. Its classic fit and durable stitching make it perfect for everyday wear. Stylish and versatile, it's ideal for casual outings, lounging, or layering in any season.</p>

                <div className="flex gap-10">

                {count === 0 ? (
                  <button
                    onClick={() => handleAdd(index)}
                    className="border px-3 py-1 cursor-pointer border-[#FFB204] hover:bg-[#FFB204] rounded hover:text-white w-fit"
                  >
                    Add
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrement(index)}
                      className="w-8 h-8 flex items-center justify-center border border-[#FFB204] text-[#FFB204] rounded hover:bg-[#FFB204] hover:text-white cursor-pointer"
                    >
                      −
                    </button>
                    <span className="font-medium">{count}</span>
                    <button
                      onClick={() => increment(index)}
                      className="w-8 h-8 flex items-center justify-center border border-[#FFB204] text-[#FFB204] rounded hover:bg-[#FFB204] hover:text-white cursor-pointer"
                    >
                      +
                    </button>
                    
                  </div>  
                )}
                        <div className="hover:bg-[#E69F00] w-22 h-10 border border-[#FFB204] flex items-center justify-center rounded">
          <NavLink
            to="/cart"
            className="text-black hover:text-white"
          >
            Buy Now
          </NavLink>
        </div>
                </div>


                
              </div>
            );
          })}

          {/* Why Shop Section */}
          <div className="mt-10 grid gap-4">
            <p className="font-semibold">Why Shop from Uplift?</p>

            {[
              {
                img: "https://thumbs.dreamstime.com/b/diverse-poor-people-getting-food-donation-non-profit-organization-center-group-aid-team-volunteers-giving-multiethnic-371077933.jpg",
                title: "Support a Greater Cause",
                desc: "Every purchase helps fund vital programs — from feeding the hungry to providing shelter and education to the homeless.",
              },
              {
                img: "https://craftizen.org/wp-content/uploads/2025/01/Black-White-Minimalist-Personal-Professional-Email-Signature-Facebook-Post-1.png",
                title: "Empower Communities",
                desc: "Artisans proudly working on handicrafts in a community setting—perfect visual for empowerment.",
              },
              {
                img: "https://thumbs.dreamstime.com/b/diverse-poor-people-getting-food-donation-non-profit-organization-center-group-aid-team-volunteers-giving-multiethnic-371077933.jpg",
                title: "Be Part of a Movement",
                desc: "A volunteer and artisan together, symbolizing unity and collective action—a great fit for showcasing movement and togetherness.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-30 h-20">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="text-[12px]">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <UserReviews/>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
