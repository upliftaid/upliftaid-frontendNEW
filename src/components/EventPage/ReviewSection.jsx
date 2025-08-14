import React, { useEffect, useState } from 'react';
import { Star, User, ThumbsUp, MessageCircle, Loader2 } from 'lucide-react';
import review from '../../constants/Event/reviews';
import { useNavigate } from 'react-router-dom';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const [showAddReview, setShowAddReview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [likedReview, setLikedReview] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    async function fetchData() {
      try {
        // await new Promise((resolve) => setTimeout(resolve, 5000));     // fake api call
        setReviews(review)
      } catch (error) {
        console.log(error.message)
      }finally{
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

  if(isLoading){
    return <div className='w-full mt-10 flex items-center justify-center'><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Loading Reviews...</div>
  }

  const handleSubmitReview = (e) => {
    e.preventDefault();
    try {
        if (newReview.name && newReview.comment) {
          const review = {
            id: reviews.length + 1,
            name: newReview.name,
            rating: newReview.rating,
            date: "Just now",
            comment: newReview.comment,
            helpful: 0,
            avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=100"
          };
          console.log(newReview)
          setReviews([review, ...reviews]);
          setNewReview({ name: '', rating: 5, comment: '' });
          setShowAddReview(false);
        }
    } catch (error) {
        console.log(error.message)
    }
  };

  const handleOpenAddReview = () => {
    try {
      if(!localStorage.getItem('userId')){
        alert('Please login to join the event')
        navigate('/auth')
      }
      setShowAddReview(!showAddReview)
    } catch (error) {
      console.log(error.message) 
    }
  }

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400 transition-colors' : ''}`}
            onClick={interactive ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const handleLoadMoreReviews = () => {
    // Load more reviews logic here
    try {
        setReviews([...reviews, ...review]);
    } catch (error) {
        console.log(error.message)
    }
  };


  const handleHelpfulReview = (id)=>{
    if(!localStorage.getItem('userId')){
      alert('Please login to join the event')
      navigate('/auth')
    }
    if(likedReview.includes(id)){
      return
    }
    try {
      setReviews((prev)=>{
        const updatedReviews = prev.map((review)=>{
          if(review.id === id){
            return {...review, helpful: review.helpful + 1}
          }
          return review
        })
        return updatedReviews
      })

      // backend call for here
      
      setLikedReview([...likedReview, id])
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
      {/* Header */}
      <div className="flex max-[590px]:flex-col max-[590px]:justify-start max-[590px]:items-start items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reviews & Feedback</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-lg font-semibold text-gray-700">
                {averageRating.toFixed(1)} out of 5
              </span>
            </div>
            <span className="text-gray-500">({reviews.length} reviews)</span>
          </div>
        </div>
        <button
          onClick={handleOpenAddReview}
          className="bg-emerald-600 max-[590px]:mt-10 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <MessageCircle className="w-5 h-5 inline mr-2" />
          Add Review
        </button>
      </div>

      {/* Add Review Form */}
      {showAddReview && (
        <div className="bg-emerald-50 rounded-xl p-6 mb-8 border border-emerald-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Your Experience</h3>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
              {renderStars(newReview.rating, true, (rating) => setNewReview({...newReview, rating}))}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                placeholder="Share your thoughts about this event..."
                required
              />
            </div>
            
            <div className="flex gap-3">
              <button
                type="submit"
                className="text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ backgroundColor: '#FFB204' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E6A003'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFB204'}
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setShowAddReview(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                
                <div className="flex items-center gap-4">
                  <button 
                    className={`${likedReview.includes(review.id) ? 'text-emerald-600' : 'text-gray-500'} flex items-center gap-2  hover:text-emerald-600 transition-colors`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm" onClick={() => handleHelpfulReview(review.id)}>Helpful ({review.helpful})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Reviews */}
      <div className="text-center mt-8">
        <button 
            onClick={handleLoadMoreReviews}
            className="text-emerald-600 hover:text-emerald-700 font-semibold px-6 py-2 rounded-lg hover:bg-emerald-50 transition-all duration-300">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;