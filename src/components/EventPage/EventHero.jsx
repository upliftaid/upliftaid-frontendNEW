import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const EventHero = ({ event }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Happening':
        return 'bg-green-500 text-white';
      case 'Upcoming':
        return 'bg-blue-500 text-white';
      case 'Completed':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover  transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold shadow-lg">
              {event.category}
            </span>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(event.status)}`}>
              {event.status}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {event.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6" style={{ color: '#FFB204' }} />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" style={{ color: '#FFB204' }} />
              <span>{event.place}</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;