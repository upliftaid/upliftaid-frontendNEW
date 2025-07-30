import ProductCartDetails from "../constants/product/ProductCart";

const ProductCart = () => {
  return (
    <div className="!mt-20 !mb-5">

      {/* Hero Section */}
      <section>
        <p className="font-semibold text-lg mb-2 pl-2">Cart Summary</p>
        <div className="grid w-full lg:h-140 lg:grid-cols-[60%_40%] lg:mt-17 p-2 gap-2 md:mt-18 mt-15">
          {/* Left: Cart Summary */}
          <div className="p-4 h-[70vh] md:h-140 overflow-y-auto shadow-md hide-scrollbar">
            <div className="grid gap-4">
              {ProductCartDetails.map((cart, index) => (
                <div
                  className="shadow w-full h-30 md:h-26 rounded p-4 flex gap-10"
                  key={index}
                >
                  <div className="w-20 h-20 border rounded border-gray-200">
                    <img
                      src={cart.image}
                      alt="image"
                      className="w-full h-full object-scale-down"
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold">{cart.title}</h1>
                    <p>Quantity : {cart.qunatity}</p>
                    <p className="font-semibold">Price : ₹{cart.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Address + Bill Summary */}
          <div className="grid gap-4 h-[70vh] md:h-140 overflow-y-auto hide-scrollbar">
            {/* Address Section */}
            <div className="w-full h-54 p-4 shadow-md rounded">
              <h1 className="font-semibold text-lg mb-4">
                Choose Your Address
              </h1>
              <label
                htmlFor="address1"
                className="border border-gray-200 h-20 flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="radio"
                  name="address"
                  id="address1"
                  className="accent-blue-500"
                />
                <div className="text-sm text-gray-700 leading-tight">
                  <p>Bandra, Pune</p>
                  <p>Mumbai, India - 40001</p>
                  <p>Phone: 1234567890</p>
                </div>
              </label>
              <div className="border border-dashed text-center p-2 cursor-pointer mt-4">
                <p>Add Address</p>
              </div>
            </div>

            {/* Bill Summary */}
            <div className="p-4 shadow rounded">
              <h1 className="font-semibold text-lg mb-4">Bill Summary</h1>
              <div className="p-4 grid gap-4">
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <p className="font-semibold">Total Quantity:</p>
                    <p className="font-normal">6 Items</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Total Price:</p>
                    <p className="font-normal">₹2000</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Delivery Charge:</p>
                    <p className="font-normal">₹199</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Grand Total:</p>
                    <p className="font-normal">₹2199</p>
                  </div>
                </div>

                <div className="grid gap-4 pt-2">
                  <button className="w-full h-10 border border-[#FFB204] font-semibold cursor-pointer hover:bg-[#E69F00] hover:text-white">
                    Online Payment
                  </button>
                  <button className="w-full h-10 border border-[#FFB204] font-semibold cursor-pointer hover:bg-[#E69F00] hover:text-white">
                    Cash on Delivery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductCart;
