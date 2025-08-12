import React from "react";

const JobDescriptionModal = ({
  isOpen,
  onClose,
  title,
  description,
  onApply,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>

          {/* Description as parsed JSX */}
          <div className="text-gray-700 space-y-4 text-sm sm:text-base leading-relaxed">
            <p>{description.intro}</p>

            <div>
              <strong>Responsibilities:</strong>
              <ul className="list-disc list-inside mt-1">
                {description.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>Requirements:</strong>
              <ul className="list-disc list-inside mt-1">
                {description.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="mt-8">
            <button
              onClick={() => {
                onClose();
                setTimeout(() => onApply(title), 100);
              }}
              className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionModal;
