import React from 'react';
import { FaUser, FaCalendarAlt, FaHeart } from 'react-icons/fa';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Feed A Hungry Child',
      img: '/images/blog5.jpg',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'John Deo',
      date: '03.11.2014',
      categories: ['Travel', 'Nature', 'Business'],
    },
    {
      title: 'Adopt Child',
      img: '/images/blog6.jpg',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'John Deo',
      date: '03.11.2014',
      categories: ['Travel', 'Nature', 'Business'],
    },
    {
      title: 'Become Volunteer',
      img: '/images/blog7.jpg',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'John Deo',
      date: '03.11.2014',
      categories: ['Travel', 'Nature', 'Business'],
    },
    {
      title: 'Donate Money',
      img: '/images/blog8.jpg',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      author: 'John Deo',
      date: '03.11.2014',
      categories: ['Travel', 'Nature', 'Business'],
    },
  ];

  const popularPosts = [
    { img: '/images/pop1.jpg', desc: 'The standard chunk of Lorem Ipsum used since.', date: '03.11.2014' },
    { img: '/images/pop2.jpg', desc: 'The standard chunk of Lorem Ipsum used since.', date: '03.11.2014' },
    { img: '/images/pop3.jpg', desc: 'The standard chunk of Lorem Ipsum used since.', date: '03.11.2014' },
  ];

  const categories = [
    'Awareness', 'Blog', 'Education', 'Food', 'Gallery', 'Health', 'Lifesaving', 'Water',
  ];

  const archives = [
    'August 2014', 'September 2014', 'October 2014', 'November 2014', 'December 2014',
  ];

  const tags = [
    'Charity', 'Child', 'Education', 'Food', 'Homeless', 'Hungry', 'Water',
  ];

  return (
    <div className="">
      <h1 className="text-[42px] h-[116px] p-[30px] font-lora  mb-12 bg-[#f2f2f2]">Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Blog Posts */}
        <div className="lg:col-span-3 grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <div key={index}>
              <img src={post.img} alt={post.title} className="w-full h-60 object-cover rounded" />
              <h2 className="text-2xl font-semibold mt-4">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.desc}</p>
              <div className="flex flex-wrap text-sm text-gray-500 mt-3 items-center space-x-4">
                <span className="flex items-center">
                  <FaUser className="mr-1 text-blue-500" /> {post.author}
                </span>
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-1 text-blue-500" /> {post.date}
                </span>
                <span className="flex items-center">
                  <FaHeart className="mr-1 text-blue-500" />
                  {post.categories.join(', ')}
                </span>
              </div>
              <hr className="mt-6 border-t" />
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          {/* Popular Posts */}
          <div>
            <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
            {popularPosts.map((post, idx) => (
              <div key={idx} className="flex items-start space-x-4 mb-4">
                <img src={post.img} alt="Popular Post" className="w-12 h-12 object-cover rounded" />
                <div>
                  <p className="text-sm text-gray-800">{post.desc}</p>
                  <p className="flex items-center text-xs text-gray-500 mt-1">
                    <FaCalendarAlt className="mr-1 text-blue-500" /> {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Archives */}
          <div>
            <h3 className="text-xl font-bold mb-4">Archives</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              {archives.map((item, idx) => (
                <li key={idx} className="cursor-pointer hover:text-blue-600">{item}</li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2 text-sm">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 flex items-center justify-center border ${
              num === 1 ? 'bg-blue-500 text-white' : 'hover:bg-blue-100'
            } rounded`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
