// import Image from "next/image"
// import Link from "next/link"

import { Link } from "react-router-dom"

export function ProductCard({ product }) {
  const basePrice = Number.parseFloat(product.price).toFixed(2)

  return (
    <Link to={`/product/${product.id}`} className="group block h-full">
      <div className="h-full flex flex-col overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 bg-white">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-50 rounded-t-xl">
          <img
            src={product.primaryImage || "/placeholder.svg"}
            alt={product.productName}
            // fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-grow p-6">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FFB204] transition-colors line-clamp-2 mb-2">
            {product.productName}
          </h3>
          {product.category && <p className="text-sm text-gray-500 mb-3">{product.category}</p>}
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{product.description}</p>
        </div>
        <div className="p-6 pt-0 flex justify-between items-center">
          <span className="text-2xl font-extrabold text-[#FFB204]">€{basePrice}</span>
          {product.discount && (
            <span className="text-base text-red-500 line-through opacity-80">{product.discount}</span>
          )}
        </div>
      </div>
    </Link>
  )
}
