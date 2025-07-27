import { useState } from "react";
import GalleryDetails from "../../constants/Home2/GallerDetails";
import { AnimatePresence, motion } from "framer-motion";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? GalleryDetails
      : GalleryDetails.filter((item) => item.category === selectedCategory);

  return (
    <div className="relative lg:w-full mt-10 min-w-[320px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full lg:min-h-screen bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/childrens2.jpg')] bg-cover lg:bg-fixed -z-10"></div>

      {/* Overlay and Content */}
      <div className="relative bg-black/70 p-4 mx-auto md:py-16 md:px-8">
        <div className="text-white text-center grid gap-10">
          <div className="grid gap-1">
            <h1 className="text-[36px]">Gallery</h1>
            <div className="bg-[#00733C] w-16 h-[2.5px] mx-auto"></div>
          </div>

          {/* Category Filter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center w-fit mx-auto">
            {["All", "Charity", "Children", "Nature"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="p-2 hover:border hover:border-white/20 transition duration-300"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-[220px] md:h-[295px] group overflow-hidden"
                >
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt="gallery"
                  />
                  <div className="bg-black/70 absolute top-0 w-full h-full group-hover:flex hidden items-center justify-center flex-col gap-2 transition duration-300 p-4">
                    <p className="text-2xl text-white text-center">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <p>Donate Money</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
