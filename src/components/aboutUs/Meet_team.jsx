import React from 'react';
import { Facebook, Twitter, Plus, Eye } from 'lucide-react';

const Meet_team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Phillip Parisis",
      role: "Senior Worker",
      image: "https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
      id: 2,
      name: "Fruklein",
      role: "Senior Worker", 
      image: "https://media.istockphoto.com/id/1479374308/photo/portrait-of-a-happy-helpful-middle-aged-female-volunteer-adult-caucasian-woman-in-blue-t.jpg?s=612x612&w=0&k=20&c=Laa03JjDWoa4kWpqaDGWQF3d2u_Cski8fSBHv1PfXrI=",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
      id: 3,
      name: "Kimberley",
      role: "Senior Worker",
      image: "https://media.istockphoto.com/id/2155998573/photo/charity-high-five-and-volunteer-team-in-park-with-parcel-for-donation-distribution-or.jpg?s=612x612&w=0&k=20&c=FWrCJWwrzTLHnfMnHiC8dKi4zhmQCrukhRrr90vc340=",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
      id: 4,
      name: "Mariya",
      role: "Senior Worker",
      image: "https://media.istockphoto.com/id/668214842/photo/voluteer-group-of-people-for-charity-donation-in-the-park.jpg?s=612x612&w=0&k=20&c=uWklZNqevBrOnO-aaMurM0JTE8mAcCp-kWAKG0bBcsI=",
      description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    }
  ];

  const SocialIcon = ({ type, className = "" }) => {
    const baseClasses =
      "w-8 h-8 bg-gray-100 hover:bg-[#00733C] hover:text-white rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer";

    switch (type) {
      case 'facebook':
        return <div className={`${baseClasses} ${className}`}><Facebook size={16} /></div>;
      case 'twitter':
        return <div className={`${baseClasses} ${className}`}><Twitter size={16} /></div>;
      case 'google':
        return <div className={`${baseClasses} ${className}`}><Plus size={16} /></div>;
      case 'pinterest':
        return <div className={`${baseClasses} ${className}`}><Eye size={16} /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">MEET THE TEAM</h2>
          <div className="w-16 h-1 bg-[#00733C] mx-auto"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center group">
              {/* Image Container */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Member Info */}
              <div className="space-y-4 px-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">{member.name}</h3>
                <div className="w-12 h-0.5 bg-[#00733C] mx-auto"></div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center space-x-3 pt-4">
                  <SocialIcon type="facebook" />
                  <SocialIcon type="twitter" />
                  <SocialIcon type="google" />
                  <SocialIcon type="pinterest" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meet_team;
