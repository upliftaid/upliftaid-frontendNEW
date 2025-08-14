
// import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/ProductSlice'
import { getProductById } from "../../constants/product2/mock-products"
import { Link, useNavigate, useParams } from "react-router-dom"
import Review from "../../components/Product2/Review"
import { Star } from "lucide-react"
import review from "../../constants/product2/review"
// import Link from "next/link"

export default function ProductDisplayPage({ params }) {
  const { id } = useParams();
  const product = getProductById(id)
  const dispatch = useDispatch()

  const [currentImage, setCurrentImage] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [totalPrice, setTotalPrice] = useState(0)

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setCurrentImage(product.primaryImage)
    }
  }, [product])

  useEffect(() => {
    if (product) {
      const basePrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0
      setTotalPrice(basePrice * quantity)
    }
  }, [quantity, product])

  const handleQuantityChange = useCallback((event) => {
    const value = Number.parseInt(event.target.value, 10)
    if (!isNaN(value) && value >= 1) {
      setQuantity(value)
    } else if (event.target.value === "") {
      setQuantity(0)
    }
  }, [])

  const handleIncrement = useCallback(() => {
    setQuantity((prev) => prev + 1)
  }, [])

  const handleDecrement = useCallback(() => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }, [])

  const handleAddToCart = useCallback(() => {
    if (product && quantity > 0) {
      dispatch(addToCart({ product, quantity }))
      alert(`${quantity} x ${product.productName} added to cart!`)
    }
  }, [product, quantity, dispatch])

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-2xl text-gray-600">Product not found.</div>
    )
  }


  const averageRating = review.reduce((sum, review) => sum + review.rating, 0) / review.length;

  const handleBuyNow =async () => {
    try {
      if(!localStorage.getItem('userId')) {
        alert('Please login to join the event')
        navigate('/auth')
        return
      }

      // backend call to buy now

      // data to sent to backend
      console.log("product", product)
      console.log("quantity", quantity)
      console.log("total price", totalPrice)
      console.log("user id", localStorage.getItem('userId'))


    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-12 md:py-20 bg-white text-gray-800">
      <div className="mb-8">
        <Link
          to="/product"
          className="text-green-600 hover:text-green-800 flex items-center gap-2 text-lg font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Back to Products
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Product Image Gallery */}
        <div className="grid gap-4 md:gap-6">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <img
              src={currentImage || "/placeholder.svg"}
              alt={`Main image of ${product.productName}`}
              fill
              style={{ objectFit: "cover" }}
              className="transition-opacity duration-300"
            />
          </div>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  currentImage === image ? "border-green-600" : "border-gray-200 hover:border-green-400"
                }`}
                onClick={() => setCurrentImage(image)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1} of ${product.productName}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span className="sr-only">{`View image ${index + 1}`}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="grid gap-6 md:gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
              {product.productName}
            </h1>
            {product.category && <p className="text-base text-gray-500 mb-4">Category: {product.category}</p>}
            <div className="flex items-center gap-2 mb-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-sm font-semibold text-gray-700">
                {averageRating.toFixed(1)} out of 5
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">{product.description}</p>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-extrabold text-[#FFB204]">
                €{(Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0).toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-lg text-red-500 line-through opacity-80">{product.discount}</span>
              )}
            </div>
            
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-700 text-lg">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="h-10 w-10 rounded-none rounded-l-md border-r-0 border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              >
                -
              </button>
              <input
                type="number"
                value={quantity === 0 ? "" : quantity}
                onChange={handleQuantityChange}
                className="w-20 text-center border-y-0 border-x-0 rounded-none text-lg font-semibold text-gray-900 outline-none"
                min="1"
                aria-label="Product quantity"
              />
              <button
                onClick={handleIncrement}
                className="h-10 w-10 rounded-none rounded-r-md border-l-0 border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
              >
                +
              </button>
            </div>
          </div>

          {/* Total Price Display */}
          <div className="flex items-center justify-between text-2xl font-bold text-gray-900 mt-2">
            <span>Total Price:</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Specifications */}
          <div className="grid gap-3 text-base">
            {product.material && (
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-28">Material:</span>
                <span className="text-gray-800">{product.material}</span>
              </div>
            )}
            {product.size && (
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-28">Size:</span>
                <span className="text-gray-800">{product.size}</span>
              </div>
            )}
            {product.weight && (
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-28">Weight:</span>
                <span className="text-gray-800">{product.weight}</span>
              </div>
            )}
            {product.otherSpecification && (
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-28">Other:</span>
                <span className="text-gray-800">{product.otherSpecification}</span>
              </div>
            )}
          </div>

          <div className="h-px bg-gray-100"></div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 hover:bg-[#FFB204] text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors shadow-md"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="flex-1 border border-green-600 text-green-600 hover:bg-blue-50 hover:text-green-700 py-3 px-6 rounded-lg text-lg font-semibold transition-colors bg-transparent shadow-sm"
            >
              Buy Now
            </button>
          </div>
          {/* <ReviewModal/> */}
        </div>
      </div>
          <Review />
    </div>
  )
}


  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="flex gap-1 ">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={` w-3 h-3  ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400 transition-colors' : ''}`}
            onClick={interactive ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };


