import React from 'react';
import HeroSection from '../components/HeroSection';
import { Calendar, User } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Clean Water for Rural Communities: A Success Story',
      excerpt: 'Learn how our recent water initiative has transformed lives in rural regions by providing sustainable access to clean water.',
      date: 'May 15, 2025',
      author: 'Sarah Johnson',
      category: 'Projects',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg'
    },
    {
      id: 2,
      title: 'Education Transforms: Building Schools in Underserved Areas',
      excerpt: "Discover the impact of our educational initiatives and how they're helping children access quality education.",
      date: 'April 22, 2025',
      author: 'Michael Roberts',
      category: 'Education',
      image: 'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg'
    },
    {
      id: 3,
      title: 'The Impact of Community-Led Development Projects',
      excerpt: "Why we believe in empowering communities to lead their own development projects and the remarkable results we've seen.",
      date: 'March 30, 2025',
      author: 'Emily Patterson',
      category: 'Community',
      image: 'https://images.pexels.com/photos/3933881/pexels-photo-3933881.jpeg'
    },
    {
      id: 4,
      title: 'Volunteer Spotlight: Meet Our Global Team',
      excerpt: 'Get to know the dedicated volunteers who make our work possible and hear their inspiring stories from the field.',
      date: 'March 12, 2025',
      author: 'Daniel Lee',
      category: 'Volunteers',
      image: 'https://images.pexels.com/photos/7110206/pexels-photo-7110206.jpeg'
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Our Blog" 
        backgroundImage="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="bg-[#1D6F6F] text-white text-xs py-1 px-2 rounded-full mr-3">
                        {post.category}
                      </span>
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 hover:text-[#1D6F6F] transition-colors">
                      <a href="#">{post.title}</a>
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <a 
                      href="#" 
                      className="inline-block text-[#1D6F6F] font-medium hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-6 py-3 border-2 border-[#1D6F6F] text-[#1D6F6F] font-medium rounded-md hover:bg-[#1D6F6F] hover:text-white transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;