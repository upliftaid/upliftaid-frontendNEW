import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogData } from '../../redux/blogSlice';
import { FaUser, FaCalendarAlt, FaHeart, FaAngleRight, FaAngleDown } from 'react-icons/fa';

const BlogSection = ({ totalPages = 4 }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const { blogPosts, popularPosts, categories, archives, tags, status } = useSelector((state) => state.blog);
  
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogData());
    }
  }, [dispatch, status]);

  return (
    <div>
  <div className="bg-[#f2f2f2] text-[32px] md:text-[42px] lg:px-22 py-5 mt-18 px-5 text-center">Blog</div>

  <div className="flex flex-col lg:flex-row lg:px-20">
    {/* Blog Posts */}
    <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
      {blogPosts.map((post, index) => (
        <div key={index} className="p-4 min-w-[274px] lg:w-[346px]">
          <div className='min-w-[274px] min-  h-[174px] lg:w-[346px] lg:h-[220px]'>
            <img src={post.img} alt={post.title} className="w-full h-full object-scale-down" />
          </div>
          <h2 className="text-[24px] md:text-[28] mt-4 mb-3">{post.title}</h2>
          <p className="text-black mb-4 text-[14px] text-justify">{post.desc}</p>
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-2 text-[12px]">
              <FaUser className="text-[#FFB204]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <FaCalendarAlt className="text-[#FFB204]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="text-[#FFB204]" />
              <span>{post.categories.join(', ')}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="col-span-full flex justify-end mt-8">
        <div className="inline-flex overflow-hidden">
          <button
            onClick={() => handleClick(currentPage - 1)}
            className="px-3 py-2 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
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
                className={`px-4 py-2 cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-[#FFB204]'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handleClick(currentPage + 1)}
            className="px-3 py-2 hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>

    <div className="w-full lg:w-[30%] space-y-6 pt-6 lg:pl-6 px-5">
      {/* Upcoming Events */}
      <div>
        <h3 className="font-bold text-[18px] mb-2 ">Upcoming Events</h3>
        {popularPosts.map((item, i) => (
          <div key={i} className="flex gap-4 mb-4">
            <div className='w-[90px] h-[70px]'>
              <img src={item.img} alt={item.desc} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[14px] text-[#7f7f7f] leading-snug">{item.desc}</p>
              <div className="flex items-center gap-2 text-gray-500 text-[12px] mt-1">
                <FaCalendarAlt className="text-[#FFB204]" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-bold text-[18px] mb-2">Blog Categories</h3>
        <ul className="space-y-2">
          {categories.map((cat, i) => (
            <li key={i}>
              <button
                onClick={() => toggleDropdown(i)}
                className="flex items-center justify-between w-full text-left text-[#7f7f7f] text-[14px] cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  {openCategory === i ? <FaAngleDown /> : <FaAngleRight />}
                  {cat}
                </span>
              </button>
              {openCategory === i && (
                <ul className="ml-6 mt-1 text-sm text-gray-500">
                  <li>- Sub item 1</li>
                  <li>- Sub item 2</li>
                  <li>- Sub item 3</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="font-bold text-[18px] mb-2">Popular Posts</h3>
        {popularPosts.map((item, i) => (
          <div key={i} className="flex gap-4 mb-4">
            <img src={item.img} alt={item.desc} className="w-[84px] h-[84px] object-cover" />
            <div>
              <p className="text-[14px] text-[#7f7f7f] leading-snug">{item.desc}</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                <FaCalendarAlt className="text-[#FFB204]" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Archives */}
      <div>
        <h3 className="font-bold text-[18px] mb-2">Archives</h3>
        <ul className="text-sm space-y-2 text-[#7f7f7f]">
          {archives.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div>
        <h3 className="font-bold text-[18px] mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-[#FFB204] text-[12px]">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default BlogSection;
