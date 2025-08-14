import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventDetails = ({ event }) => {

    const [isLiked, setIsLiked] = React.useState(false);
    const [isJoined, setIsJoined] = React.useState('Join This Event');
    const navigate = useNavigate();
    const [joining, setJoining] = React.useState(false);

    const handleShare = () => {
        if (navigator.share) {
          navigator.share({
            title: event.title,
            text: event.description,
            url: window.location.href
          })
          .then(() => console.log('Post shared successfully'))
          .catch((error) => console.error('Error sharing:', error));
        } else {
          alert('Sharing is not supported on this browser.');
        }
    };

    const handleLiked =() =>{
        try {
            if(!localStorage.getItem('userId')){
              alert('Please login to join the event')
              navigate('/auth')
            }
            // backed call to store the like
            setIsLiked(!isLiked)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleJoinEvent =async ()=>{
      if(isJoined === 'Joined successfully' || isJoined === 'You are already joined') {
        setIsJoined('You are already joined')
        return
      }
        try {
          if(!localStorage.getItem('userId')){
            alert('Please login to join the event')
            navigate('/auth')
          }
          setJoining(true)


          // backed call to join the event
          await new Promise((resolve) => setTimeout(resolve, 5000));  // fake api call


          setIsJoined('Joined successfully')
        } catch (error) {
            console.log(error.message)
        }finally{
          setJoining(false)
        }
    }


  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
        <div className="flex gap-3">
          <button onClick={handleLiked} className={`${isLiked ? 'bg-red-200 hover:bg-red-300' : 'bg-emerald-50'} p-3 hover:bg-red-100 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group`}>
            <Heart  className={`${isLiked ? 'text-red-500' : 'text-emerald-600'} w-5 h-5 text-emerald-600 group-hover:text-red-500 transition-colors`} />
          </button>
          <button className="p-3 bg-emerald-50 hover:bg-emerald-100 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group">
            <Share2 onClick={handleShare} className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
          </button>
          
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {event.description}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-3">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          className="flex-1 bg-emerald-600 hover:bg-[#FFB204] cursor-pointer text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          onClick={handleJoinEvent}
          disabled={joining}
          style={{ opacity: joining ? 0.5 : 1 }}
        >
          {isJoined }
          
        </button>
        
      </div>
    </div>
  );
};

export default EventDetails;