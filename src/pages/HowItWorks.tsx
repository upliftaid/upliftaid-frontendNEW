import React from 'react';
import HeroSection from '../components/HeroSection';

const HowItWorks: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="How It Works" 
        backgroundImage="https://images.pexels.com/photos/6646859/pexels-photo-6646859.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
            
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-[#1D6F6F] text-white flex items-center justify-center text-2xl font-bold mx-auto">1</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3">Identify Communities in Need</h3>
                  <p className="text-gray-600">
                    We work with local partners to identify communities facing challenges related to water, 
                    education, healthcare, and economic opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-[#1D6F6F] text-white flex items-center justify-center text-2xl font-bold mx-auto">2</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3">Develop Sustainable Solutions</h3>
                  <p className="text-gray-600">
                    Rather than quick fixes, we develop long-term, sustainable projects that address 
                    root causes and empower communities to become self-sufficient.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-[#1D6F6F] text-white flex items-center justify-center text-2xl font-bold mx-auto">3</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3">Engage Community Participation</h3>
                  <p className="text-gray-600">
                    We believe that community involvement is key to success. Local residents 
                    participate in planning, implementation, and maintenance of all projects.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="w-20 h-20 rounded-full bg-[#1D6F6F] text-white flex items-center justify-center text-2xl font-bold mx-auto">4</div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-3">Measure Impact and Adjust</h3>
                  <p className="text-gray-600">
                    We continuously monitor and evaluate the impact of our initiatives to ensure 
                    they're making a difference and adjust our approach when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;