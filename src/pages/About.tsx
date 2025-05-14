import React from 'react';
import HeroSection from '../components/HeroSection';

const About: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="About Us" 
        backgroundImage="https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                UpliftAid Foundation was founded in 2018 by a group of passionate individuals who believed that meaningful change happens when communities are empowered to address their own challenges with the right support and resources.
              </p>
              <p className="text-gray-700 mb-4">
                What began as a small initiative to provide clean water to a single village has grown into a multi-faceted organization addressing needs in education, healthcare, economic empowerment, and environmental sustainability across multiple countries.
              </p>
              <p className="text-gray-700">
                Throughout our journey, we've maintained our core belief that sustainable, community-led development is the key to creating lasting positive change. Every project we undertake is designed with long-term impact in mind and is implemented in close partnership with local communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To empower underserved communities through sustainable development initiatives that address their most pressing needs and create pathways to self-sufficiency and prosperity.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  A world where all communities have equitable access to clean water, quality education, healthcare, and economic opportunities, enabling every individual to reach their full potential.
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-6">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Community-Centric',
                    description: 'We place communities at the center of all our efforts, respecting their wisdom and agency.'
                  },
                  {
                    title: 'Sustainability',
                    description: 'We design solutions that continue to benefit communities long after our direct involvement ends.'
                  },
                  {
                    title: 'Transparency',
                    description: 'We are committed to openness and accountability in all our operations and financial management.'
                  },
                  {
                    title: 'Inclusivity',
                    description: 'We ensure that our work benefits all community members, regardless of gender, age, or background.'
                  },
                  {
                    title: 'Innovation',
                    description: 'We continuously seek creative and effective approaches to address complex challenges.'
                  },
                  {
                    title: 'Collaboration',
                    description: 'We partner with diverse stakeholders to maximize impact and leverage collective expertise.'
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#1D6F6F] mb-2">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Our Impact By The Numbers</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { number: '50,000+', label: 'Lives Impacted' },
                  { number: '120+', label: 'Projects Completed' },
                  { number: '12', label: 'Countries Reached' },
                  { number: '500+', label: 'Volunteers Worldwide' }
                ].map((stat, index) => (
                  <div key={index} className="p-6">
                    <div className="text-3xl md:text-4xl font-bold text-[#1D6F6F] mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;