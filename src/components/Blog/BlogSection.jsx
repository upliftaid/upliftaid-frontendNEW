import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogData } from '../../redux/blogSlice';
import { FaUser, FaCalendarAlt, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PopularPosts from '../EventPage/PopularPosts';
import UpcomingEventsSection from "../EventPage/UpcomingEventsSection";
import BlogCategories from "../EventPage/BlogCategories";
import ArchivesDate from "../EventPage/ArchivesDate";
import TagsSection from "../EventPage/TagsSection";


const BlogSection = ({ totalPages = 4 }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

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
        <div className="text-[42px] w-full flex  bg-[#F2F2F2] p-8">
          <div className="px-25">
            <h1 className="text-start">Blog</h1>
          </div>
        </div>

  <div className="flex flex-col lg:flex-row lg:px-20 mt-20">
    {/* Blog Posts */}
    <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 pt-20 ">
      {blogPosts.map((post, index) => (
        <div onClick={() => navigate(`/blog/${index}`)} key={index} className="group p-4 border-b border-gray-800 pb-10 border-dotted cursor-pointer ">
          <div className=' mb-10 overflow-hidden '>
            <img src={post.img} alt={post.title} className="group-hover:scale-105 duration-300 w-full h-full object-scale-down" />
          </div>
          <h2 className="text-xl font-semibold md:text-[28] mt-4  group-hover:text-[#FFB204] mb-5 duration-300">{post.title}</h2>
          <p className="text-gray-500  text-[14px] text-justify mb-5">{post.desc}</p>
          <div className="flex flex-wrap gap-3 text-gray-400 text-sm">
            <div className="flex items-center gap-2 text-[12px]">
              <FaUser className="text-[#FFB204]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <FaCalendarAlt className="text-[#FFB204]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-[12px]">
              <FaHeart className="text-[#FFB204]" />
              <span>{post.categories.join(', ')}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="col-span-full flex  lg:justify-end my-8">
        <div className="inline-flex items-center justify-between w-full overflow-hidden">
          <button
            onClick={() => handleClick(currentPage - 1)}
            className="px-3 py-2 hover:bg-gray-100 text-2xl disabled:opacity-50 cursor-pointer"
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          <div>
            {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={i}
                onClick={() => handleClick(pageNum)}
                className={`h-10 w-10 cursor-pointer duration-300 ${
                  currentPage === pageNum
                    ? 'bg-[#FFB204]'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          </div>

          <button
            onClick={() => handleClick(currentPage + 1)}
            className="px-3 py-2 hover:bg-gray-100 disabled:opacity-50 text-2xl cursor-pointer"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>

    <div className="flex flex-1/4 flex-col gap-10 px-5 pb-5 lg:py-20">
       <UpcomingEventsSection />
       <BlogCategories />
       <PopularPosts />
       <ArchivesDate />
       <TagsSection />
    </div>
    
  </div>
</div>

  );
};

export default BlogSection;
