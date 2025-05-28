import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogData } from '../redux/blogSlice';
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
      <div className=" font-['Lora'] h-[115px] bg-[#f2f2f2] text-[54px] p-[30px] text-xl">Blog</div>
      <div className="flex">
      <div className="grid md:grid-cols-2 gap-8 pt-12 pl-6 pr-6">
        
        {/* Blog Posts */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 w-[1056px] gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className=" p-4 h-[477px]">
              <img src={post.img} alt={post.title} className="w-full h-[233px] object-cover" />
              <h2 className="text-[30.72px] h-[40px] font-[lora] mb-[17px] mt-[25px]">{post.title}</h2>
              <p className="text-black font-[sans-serif] my-[15px]">{post.desc}</p>
              <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#00adefcc]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#00adefcc]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-[#00adefcc]" />
                  <span>{post.categories.join(', ')}</span>
                </div>
              </div>
              
            </div>
            
          ))}
          <div className='flex justify-end mt-8 pr-4'>
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
                  ? 'bg-[#00adefcc] text-white'
                  : 'bg-white text-black hover:bg-gray-100'
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
      </div></div>
        </div>

        {/* Sidebar */}
        
        </div>
        <div className="space-y-6 pt-12  pl-6 w-[300px]">
          {/* Popular Posts */}
          <div >
            <h3 className="font-['lora','serif'] font-bold text-[18px] h-[28.4px] mb-2">Upcoming Events</h3>
            {popularPosts.map((item, i) => (
              <div key={i} className="flex gap-4 mb-[15px]">
                <img src={item.img} alt={item.desc} className="w-[84px] h-[84px] object-cover rounded-md" />
                <div>
                  <p className="text-[17.92px] text-[#7f7f7f] leading-snug">{item.desc}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <FaCalendarAlt className="text-[#00adefcc]" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories with Dropdown */}
          <div>
            <h3 className="font-['lora','serif'] font-bold text-[18px] mb-2">Blog Categories</h3>
            <ul className="space-y-1">
              {categories.map((cat, i) => (
                <li key={i}>
                  <button
                    onClick={() => toggleDropdown(i)}
                    className="flex items-center justify-between w-full text-left text-[#7f7f7f] hover:text-[7f7f7f] font-[14px]"
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


          <div>
            <h3 className="font-['lora','serif'] font-bold h-[28.4px] text-[18px] mb-2">Popular Posts</h3>
            {popularPosts.map((item, i) => (
              <div key={i} className="flex gap-4 mb-[15px]">
                <img src={item.img} alt={item.desc} className="w-[84px] h-[84px] object-cover rounded-md" />
                <div>
                  <p className="text-[17.92px] text-[#7f7f7f] leading-snug">{item.desc}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <FaCalendarAlt className="text-[#00adefcc]" />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
                    {/* Archives */}
                    <div>
            <h3 className="font-['lora','serif'] font-bold text-[18px] h-[28px] mb-2">Archives</h3>
            <ul className="text-sm space-y-4 text-[#7f7f7f]">
              {archives.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
          {/* Tags */}
          <div>
            <h3 className="font-['lora','serif'] font-bold text-[18px] mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-[#00adefcc] text-white rounded text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BlogSection;
