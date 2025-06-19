import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCardDetails from "../constants/ProductCardDetails";

const ProductCard = () => {
  const [counts, setCounts] = useState({});
  const navigate = useNavigate();

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

  const redirectToProductDetailPage = () => {
    navigate("/product-detail");
  };

  return (
    <div className="p-10 grid lg:grid-cols-5 md:grid-cols-3 gap-20 lg:gap-10 place-items-center">
      {ProductCardDetails.map((data, index) => {
        const count = counts[index] || 0;

        return (
          <div
            className="w-60 h-80 bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-100 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            key={index}
          >
            <div className="w-full h-50" onClick={redirectToProductDetailPage}>
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-scale-down"
              />
            </div>
            <div className="p-4 grid gap-1">
              <h1 className="font-semibold">{data.title}</h1>
              <p className="text-gray-500">Size : {data.size}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="font-semibold">Price : ₹{data.price}</p>
                {count === 0 ? (
                  <button
                    onClick={() => handleAdd(index)}
                    className="border px-3 py-1 cursor-pointer border-[#FFB204] hover:bg-[#FFB204] rounded hover:text-white"
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
