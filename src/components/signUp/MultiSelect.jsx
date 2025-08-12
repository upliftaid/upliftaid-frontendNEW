import React from 'react';

export const MultiSelect = ({ options, selected, onChange, colorClass = 'bg-blue-500' }) => {
  const handleToggle = (option) => {
    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => handleToggle(option)}
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selected.includes(option)
              ? `${colorClass} text-white`
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};