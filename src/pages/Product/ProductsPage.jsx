
import { useState, useMemo } from "react"
import { ProductCard } from "../../components/Product2/ProductCard"
import { mockProducts } from "../../constants/product2/mock-products"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  // Extract unique categories from mock products
  const categories = useMemo(() => {
    const uniqueCategories = new Set()
    mockProducts.forEach((product) => {
      if (product.category) {
        uniqueCategories.add(product.category)
      }
    })
    return ["all", ...Array.from(uniqueCategories).sort()]
  }, [])

  // Filter products based on search query, selected category, and price range
  const filteredProducts = useMemo(() => {
    const parsedMinPrice = Number.parseFloat(minPrice)
    const parsedMaxPrice = Number.parseFloat(maxPrice)

    return mockProducts.filter((product) => {
      const productPrice = Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0

      const matchesSearch =
        product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory

      const matchesPrice =
        (isNaN(parsedMinPrice) || productPrice >= parsedMinPrice) &&
        (isNaN(parsedMaxPrice) || productPrice <= parsedMaxPrice)

      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchQuery, selectedCategory, minPrice, maxPrice])

  return (
    <div className="bg-white text-gray-800">
      <div className="w-full   pb-16 py-18">
        {/* <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-12 text-center leading-tight">
          Discover Our Exquisite Collection
        </h1> */}
        <div className="text-[42px] w-full flex  bg-[#F2F2F2] p-8">
          <div className="md:px-25 ">
            <h1 className="text-start">Discover Our Exquisite Collection</h1>
          </div>
        </div>

        <div className="container p-10 mx-auto max-w-7xl">
          {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col px-4 md:flex-row gap-6 justify-center items-center">
          {/* Search Input */}
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 md:pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-lg outline-none"
            />
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
              className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-[180px] h-12 border border-gray-300 rounded-lg shadow-sm text-lg px-3 outline-none focus:ring-green-500 focus:border-green-500 bg-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all" ? "All Categories" : category}
              </option>
            ))}
          </select>

          {/* Price Filter */}
          <div className="flex gap-4 w-full md:w-auto">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-lg px-3 py-2 outline-none"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 text-lg px-3 py-2 outline-none"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-2xl text-gray-600 py-16">No products found matching your criteria.</div>
        )}
        </div>
      </div>
    </div>
  )
}
