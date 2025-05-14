import React from 'react';
import HeroSection from '../components/HeroSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <HeroSection 
        title="Contact Us" 
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions, suggestions, or want to get involved? We'd love to hear from you. 
                  Fill out the form below or contact us directly using the information provided.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1D6F6F10] flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-[#1D6F6F]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Our Location</h3>
                      <p className="text-gray-600">Ghaziabad, Uttar Pradesh, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1D6F6F10] flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#1D6F6F]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Phone Number</h3>
                      <p className="text-gray-600">+91 8319301961</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1D6F6F10] flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#1D6F6F]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Email Address</h3>
                      <p className="text-gray-600">hello@upliftaid.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1D6F6F10] flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#1D6F6F]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                  
                  <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D6F6F]" 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D6F6F]" 
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D6F6F]" 
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D6F6F]" 
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D6F6F]" 
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full py-3 bg-[#1D6F6F] text-white font-semibold rounded-md hover:bg-[#185555] transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;