import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="Empowering Lives Through Kindness" 
        backgroundImage="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" 
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to UpliftAid Foundation</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are a non-profit organization dedicated to helping those in need through sustainable initiatives 
              that create lasting positive change in communities around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#1D6F6F] mb-3">Our Mission</h3>
              <p className="text-gray-700">To provide resources, support, and opportunities to underserved communities.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#1D6F6F] mb-3">Our Impact</h3>
              <p className="text-gray-700">We've helped thousands of families across 12 countries with sustainable solutions.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#1D6F6F] mb-3">Get Involved</h3>
              <p className="text-gray-700">Join our movement by donating, volunteering, or spreading awareness about our cause.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/donate" 
              className="inline-block px-6 py-3 bg-[#1D6F6F] text-white font-medium rounded-md hover:bg-[#185555] transition-colors"
            >
              Support Our Cause
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent initiatives and the impact they've had on communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={`https://images.pexels.com/photos/69${item}5310/pexels-photo-69${item}5310.jpeg`} 
                  alt={`Project ${item}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Clean Water Initiative</h3>
                  <p className="text-gray-600 mb-4">
                    Providing access to clean water for rural communities through sustainable solutions.
                  </p>
                  <Link 
                    to="/gallery" 
                    className="text-[#1D6F6F] font-medium hover:text-[#185555] transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;