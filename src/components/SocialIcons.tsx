import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const SocialIcons: React.FC = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={18} />, color: '#1877F2', url: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={18} />, color: '#E1306C', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, color: '#0A66C2', url: 'https://linkedin.com' },
    { name: 'YouTube', icon: <Youtube size={18} />, color: '#FF0000', url: 'https://youtube.com' }
  ];

  return (
    <div className="flex space-x-2">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-10 h-10 rounded-md transition-all duration-300 hover:-translate-y-1`}
          style={{ backgroundColor: social.color }}
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;