import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export const AvatarUpload = ({ onFileSelect }) => {
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <div className="w-20 h-20 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
          {preview ? (
            <img src={preview} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <Camera className="w-8 h-8 text-gray-400" />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
      <div>
        <p className="text-sm text-gray-600">Upload a profile picture</p>
        <p className="text-xs text-gray-500">JPG, PNG or GIF (max 5MB)</p>
      </div>
    </div>
  );
};