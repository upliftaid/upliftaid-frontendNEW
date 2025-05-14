import React from 'react';
import HeroSection from '../components/HeroSection';

const Donate: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="Support Our Cause" 
        backgroundImage="https://images.pexels.com/photos/6994984/pexels-photo-6994984.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Make a Difference Today</h2>
              <p className="text-gray-600">
                Your contribution helps us continue our work in providing clean water, education, 
                and healthcare to communities in need.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Choose Donation Amount</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[25, 50, 100].map((amount) => (
                    <button 
                      key={amount} 
                      className="py-3 border-2 border-[#1D6F6F] rounded-md text-[#1D6F6F] font-semibold hover:bg-[#1D6F6F] hover:text-white transition-colors"
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="mb-8">
                  <label htmlFor="customAmount" className="block text-gray-700 mb-2">Custom Amount:</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">$</span>
                    <input 
                      type="number" 
                      id="customAmount" 
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D6F6F]" 
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
                
                <button className="w-full py-4 bg-[#1D6F6F] text-white font-semibold rounded-md hover:bg-[#185555] transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Where Your Money Goes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1D6F6F] mr-2">•</span>
                    <span>85% directly supports our programs and services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D6F6F] mr-2">•</span>
                    <span>10% goes toward administrative costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D6F6F] mr-2">•</span>
                    <span>5% is used for fundraising efforts</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Other Ways to Help</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#1D6F6F] mr-2">•</span>
                    <span>Volunteer your time and skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D6F6F] mr-2">•</span>
                    <span>Organize a fundraising event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D6F6F] mr-2">•</span>
                    <span>Become a corporate sponsor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1D6F6F] mr-2">•</span>
                    <span>Spread the word about our cause</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;