
// import Image from "next/image"
// import Link from "next/link"
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart } from '../../redux/ProductSlice'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const cartTotal = useSelector(state => state.cart.total)
  console.log(cartItems)

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, newQuantity }))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  function onSubmit(){
    console.log(cartItems)
  }

  return (
    <div className="  bg-white min-h-[calc(100vh-64px)]">
        <div className="text-[42px] w-full flex  bg-[#F2F2F2] p-8">
          <div className="md:px-25 mt-18 ">
            <h1 className="text-start">Your Shopping Cart</h1>
          </div>
        </div>
      {/* <h1 className="text-4xl font-extrabold text-blue-800 mb-10 text-center">Your Shopping Cart</h1> */}

      <div className='w-full mt-10 container px-4 mx-auto  py-12 md:py-20'>
        {cartItems.length === 0 ? (
        <div className="max-w-2xl mx-auto text-center py-16 px-8 shadow-lg border border-gray-200 bg-white rounded-xl">
          <h2 className="text-3xl font-bold text-[#FFB204] mb-4">Your Cart is Empty</h2>
          <p className="text-lg text-gray-700 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/product">
            <button className="bg-[#FFB204] hover:bg-[#ffc43c] text-white text-lg px-8 py-4 rounded-lg shadow-md transition-all">
              Start Shopping Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Cart Items List */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
            <div className="px-0 pt-0 pb-6">
              <h2 className="text-2xl font-bold text-gray-900">Items in Your Cart</h2>
            </div>
            <div className="px-0 py-0 space-y-6">
              {cartItems.map((item) => {
                const itemPrice = Number.parseFloat(item.product.price.replace(/[^0-9.]/g, "")) || 0
                const itemTotalPrice = itemPrice * item.quantity

                return (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0"
                  >
                    <Link href={`/products/${item.product.id}`} className="flex-shrink-0">
                      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                        <img
                          src={item.product.primaryImage || "/placeholder.svg"}
                          alt={item.product.productName}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                    <div className="flex-grow grid gap-1 text-center sm:text-left">
                      <Link to={`/product/${item.product.id}`}>
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-[#FFB204] transition-colors">
                          {item.product.productName}
                        </h3>
                      </Link>
                      <p className="text-gray-700 text-base">Unit Price: €{itemPrice.toFixed(2)}</p>
                      <div className="flex items-center justify-center sm:justify-start  mt-3">
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-9 w-9 rounded-l-md flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-minus"
                          >
                            <path d="M5 12h14" />
                          </svg>
                          <span className="sr-only">Decrease quantity</span>
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item.product.id, Number(e.target.value))}
                          className="w-20 h-9 text-center text-lg font-medium border-y border-gray-300  text-gray-900 outline-none focus:ring-blue-300 focus:border-blue-500"
                          min="1"
                          aria-label={`Quantity for ${item.product.productName}`}
                        />
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="h-9 w-9 flex items-center justify-center rounded-r-md border border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plus"
                          >
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                          <span className="sr-only">Increase quantity</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center sm:items-end gap-2 mt-4 sm:mt-0">
                      <span className="text-2xl font-bold text-gray-900">€{itemTotalPrice.toFixed(2)}</span>
                      <button
                        onClick={() => handleRemoveFromCart(item.product.id)}
                        className="text-red-500 hover:bg-red-50 px-3 py-1 rounded-md transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="px-0 pt-6 flex justify-end">
              <button
                onClick={handleClearCart}
                className="border border-red-500 text-red-500 hover:bg-red-50 bg-transparent px-6 py-3 rounded-lg transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
            <div className="px-0 pt-0 pb-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
            </div>
            <div className="px-0 py-6 space-y-4">
              <div className="flex justify-between text-lg text-gray-700">
                <span>Subtotal ({cartItems.length} items):</span>
                <span className="font-semibold text-gray-900">€{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Shipping:</span>
                <span className="font-semibold text-gray-900">Free</span>
              </div>
              <div className="h-px bg-gray-200"></div>
              <div className="flex justify-between text-3xl font-extrabold text-[#FFB204]">
                <span>Total:</span>
                <span>€{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="px-0 pt-6 flex flex-col gap-4 border-t border-gray-100">
              <button 
                onClick={onSubmit}
                className="w-full bg-[#FFB204] hover:bg-[#ffbf2a] text-white text-lg px-6 py-3 rounded-lg shadow-md transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
