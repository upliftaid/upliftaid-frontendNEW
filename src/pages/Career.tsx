import React from 'react';
import HeroSection from '../components/HeroSection';

const Career: React.FC = () => {
  const careers = [
    {
      title: 'Project Coordinator',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Coordinate and manage our community water initiatives, working closely with local partners and stakeholders.',
      requirements: [
        "Bachelor's degree in international development, social work, or related field",
        '3+ years of experience in project management',
        'Strong communication and interpersonal skills',
        'Knowledge of water conservation and community development',
        'Willingness to travel to project sites'
      ]
    },
    {
      title: 'Communications Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create compelling content to share our impact stories and engage supporters through various channels.',
      requirements: [
        'Degree in communications, journalism, or marketing',
        'Experience in non-profit communications',
        'Excellent writing and editing skills',
        'Knowledge of digital marketing and social media management',
        'Photography and basic design skills a plus'
      ]
    },
    {
      title: 'Volunteer Coordinator',
      location: 'Ghaziabad, India',
      type: 'Part-time',
      description: 'Recruit, train, and coordinate volunteers for our various programs and events.',
      requirements: [
        'Experience in volunteer management',
        'Strong organizational and people skills',
        'Ability to inspire and motivate others',
        'Good understanding of non-profit operations',
        'Flexible schedule to accommodate volunteer events'
      ]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Career Opportunities" 
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
              <p className="text-gray-600">
                We're looking for passionate individuals who want to make a difference in the world. 
                Check out our current openings below.
              </p>
            </div>
            
            <div className="space-y-8 mb-12">
              {careers.map((career, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-800">{career.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="bg-[#1D6F6F10] text-[#1D6F6F] text-xs font-medium py-1 px-2 rounded">
                          {career.location}
                        </span>
                        <span className="bg-[#1D6F6F10] text-[#1D6F6F] text-xs font-medium py-1 px-2 rounded">
                          {career.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{career.description}</p>
                    
                    <h4 className="font-medium text-gray-800 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-1">
                      {career.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                    
                    <button className="px-4 py-2 bg-[#1D6F6F] text-white font-medium rounded hover:bg-[#185555] transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-center mb-6">Why Work With Us?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#1D6F6F20] flex items-center justify-center mb-4">
                    <span className="text-[#1D6F6F] text-2xl">🌱</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Meaningful Impact</h4>
                  <p className="text-gray-600">
                    See the direct results of your work as you help transform communities and change lives.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#1D6F6F20] flex items-center justify-center mb-4">
                    <span className="text-[#1D6F6F] text-2xl">🌍</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Global Perspective</h4>
                  <p className="text-gray-600">
                    Work with diverse communities and gain insights into different cultures and challenges.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#1D6F6F20] flex items-center justify-center mb-4">
                    <span className="text-[#1D6F6F] text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Professional Growth</h4>
                  <p className="text-gray-600">
                    Develop valuable skills and experience in a supportive and collaborative environment.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 rounded-full bg-[#1D6F6F20] flex items-center justify-center mb-4">
                    <span className="text-[#1D6F6F] text-2xl">❤️</span>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Inclusive Culture</h4>
                  <p className="text-gray-600">
                    Join a diverse team where every voice is valued and everyone can contribute fully.
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

export default Career;