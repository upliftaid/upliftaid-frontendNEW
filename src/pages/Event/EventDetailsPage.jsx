import React from 'react'
// import EventModel from "../../components/EventPage/EventModel";
import events from "../../constants/Event/events";
import { useParams } from 'react-router-dom';
import EventHero from '../../components/EventPage/EventHero';
import UpcomingEvents from '../../components/EventPage/UpcomingEvents';
import EventDetails from '../../components/EventPage/EventDetails';
import ReviewSection from '../../components/EventPage/ReviewSection';

export default function EventDetailsPage() {
    const { id } = useParams();
    const event = events.find((event) => event.id === parseInt(id));
    const upcomingEvents = events.filter((event) => event.status === 'Upcoming');
  return (
    <div className="min-h-screen lg:w-3/5 bg-gradient-to-br m-auto  mt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <EventHero event={event} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8">
          {/* Event Details - Main Content */}
          <div className="lg:col-span-2">
            <EventDetails event={event} />
            <ReviewSection />
          </div>

          {/* Sidebar - Upcoming Events */}
          <div className="lg:col-span-1">
            <UpcomingEvents events={upcomingEvents} />
          </div>
        </div>
      </div>
    </div>
  )
}
