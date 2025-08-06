import React from 'react';
import { AlertCircle } from 'lucide-react';

export const FormField = ({ label, error, required = false, children }) => {
    // console.log(error);
  return (
    <div>
      <label className="block text-sm font-medium text-green-800 mb-2">
        {label} {required && '*'}
      </label>
      {children}
      {error && (
        <div className="flex items-center mt-1 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error.message}
        </div>
      )}
    </div>
  );
};