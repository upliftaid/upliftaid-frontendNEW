import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonations } from "../redux/donationSlice";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import Pagination from "./Pagination";

const CausesContent = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [current, setCurrent] = useState(0);

  const { donations, categories, status, error, causes, images, tags } =
    useSelector((state) => state.donation);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(donations.length / itemsPerPage);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    dispatch(fetchDonations());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDonations = donations.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto px-4 font-[Poppins]">
      <div className="h-[115px] bg-[#f2f2f2] text-[54px] p-[30px] text-xl">
        Causes
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left - Donations */}
        <div className="md:w-4/5 w-full p-4">
          {status === "loading" && <p>Loading...</p>}
          {status === "failed" && <p className="text-red-500">{error}</p>}
          {status === "succeeded" &&
            currentDonations.map((donation) => (
              <div key={donation.id} className="flex flex-col md:flex-row mb-10 border-b border-dashed border-gray-300 pb-6">
                <img
                  src={donation.image}
                  alt={donation.title}
                  className="md:w-1/3 w-full rounded-lg object-cover"
                />
                <div className="md:ml-6 mt-4 md:mt-0">
                  <h2 className="text-[33.28px] font-[Poppins] font-semibold">
                    {donation.title}
                  </h2>
                  <p className="text-[17.92px]">
                    <strong>Raised:</strong> ${donation.raised} &nbsp;|&nbsp;
                    <span className="text-[#00adef] font-semibold">
                      Goal: ${donation.goal}
                    </span>
                  </p>
                  <p className="mt-[10px] mb-[15px] h-auto text-[17.92px]">
                    {donation.description}
                  </p>
                  <button className="bg-[#00adef] h-[40px] text-white px-4 py-2 hover:bg-[#00adef] mt-2">
                    Donate Now
                  </button>
                </div>
              </div>
            ))}

          {/* Pagination Controls */}
          <div className="flex justify-end mt-8 pr-4">
            <div className="inline-flex border rounded overflow-hidden">
              <button
                onClick={() => handleClick(currentPage - 1)}
                className="px-3 py-2 hover:bg-gray-100 disabled:opacity-50"
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={i}
                    onClick={() => handleClick(pageNum)}
                    className={`px-4 py-2 border-l ${
                      currentPage === pageNum
                        ? "bg-[#00adefcc] text-white"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => handleClick(currentPage + 1)}
                className="px-3 py-2 border-l hover:bg-gray-100 disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="hidden lg:block lg:w-1/5 mt-8 space-y-8">

          {/* Categories */}
          <div>
            <h3 className="text-[28px] font-[Poppins] font-bold mb-4">Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="text-[17.92px] h-[33px] text-[#7f7f7f] hover:text-black cursor-pointer"
                >
                  &rsaquo; {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Causes */}
          <div className="w-full p-4 bg-white shadow-sm rounded">
            <h2 className="text-2xl font-bold mb-4">Latest Causes</h2>
            <div className="space-y-4">
              {causes.map((cause) => (
                <div key={cause.id} className="flex items-center space-x-4">
                  <img
                    src={cause.image}
                    alt="Cause"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="text-gray-700 text-sm">{cause.text}</p>
                    <div className="flex items-center text-sm text-blue-500 mt-1">
                      <CalendarDays size={16} className="mr-1" />
                      <span>{cause.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="w-full text-center space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">Gallery</h2>
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={images[current]}
                alt={`Gallery image ${current + 1}`}
                className="w-full h-64 object-cover rounded-md shadow"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="font-[Poppins] font-bold text-[18px] mb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#00adefcc] text-white rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default CausesContent;
