import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D6F6F] text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold mb-2 relative">
            About us
            <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#E91E63]"></span>
          </h3>
          <p className="text-sm leading-relaxed">
            UpliftAid Foundation is more than just a non-profit—it's a movement.
          </p>
          <p className="text-sm leading-relaxed">
            We invite you to join us in our efforts to make the world a better, 
            kinder place. Whether through donations, volunteering, or raising 
            awareness, your support can help us continue to create meaningful 
            change.
          </p>
          <Link to="/about" className="text-sm font-semibold hover:text-[#F8E9A1] transition-colors">
            Read More
          </Link>
          <SocialIcons />
        </div>

        {/* Useful Links Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold mb-2 relative">
            Useful Links
            <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#E91E63]"></span>
          </h3>
          <div className="flex flex-col space-y-2">
            {['Home', 'How it work', 'Donate', 'About', 'Contact', 'Career'].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm hover:text-[#F8E9A1] transition-colors flex items-center"
              >
                <span className="mr-2">›</span>
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* What We Do Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold mb-2 relative">
            What we do
            <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#E91E63]"></span>
          </h3>
          <div className="flex flex-col space-y-2">
            {['Latest Donations', 'Success Stories', 'Volunteer', 'Campaigns', 'Blogging'].map((item) => (
              <Link
                key={item}
                to="/about"
                className="text-sm hover:text-[#F8E9A1] transition-colors flex items-center"
              >
                <span className="mr-2">›</span>
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold mb-2 relative">
            Contact Info
            <span className="absolute left-0 bottom-0 w-16 h-1 bg-[#E91E63]"></span>
          </h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#F8E9A1]" />
              <span className="text-sm">Ghaziabad, Uttar pradesh, India</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-[#F8E9A1]" />
              <span className="text-sm">8319301961</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-[#F8E9A1]" />
              <span className="text-sm">hello@upliftaid.org</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#2A8A8A] py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>Copyright© {currentYear} UpliftAid | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;