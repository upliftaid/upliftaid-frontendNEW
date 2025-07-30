import React, { useState } from "react";
import { Star } from "lucide-react";

const ReviewModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    profilePic: "",
    rating: 0,
    comment: "",
    images: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.profilePic || !form.comment || form.rating < 1) {
      alert("Please fill in all required fields and rating.");
      return;
    }
    onSubmit(form);
    setForm({
      name: "",
      profilePic: "",
      rating: 0,
      comment: "",
      images: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-white w-full max-w-lg rounded-lg p-6 space-y-4 shadow-xl relative">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Add Your Review</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl cursor-pointer"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="border p-2 w-full rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="url"
              placeholder="Profile picture URL"
              className="border p-2 w-full rounded"
              value={form.profilePic}
              onChange={(e) => setForm({ ...form, profilePic: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Rating:</label>
            <div className="flex space-x-1 text-yellow-400 cursor-pointer">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < form.rating ? "#FACC15" : "none"}
                  strokeWidth={1.5}
                  onClick={() => setForm({ ...form, rating: i + 1 })}
                />
              ))}
            </div>
          </div>

          <textarea
            placeholder="Your review"
            className="border p-2 w-full rounded"
            rows={3}
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Image URLs (comma separated)"
            className="border p-2 w-full rounded"
            value={form.images}
            onChange={(e) => setForm({ ...form, images: e.target.value })}
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 rounded border text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="hover:text-white px-4 py-2 rounded hover:bg-[#E69F00] bg-[#FFB204] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
