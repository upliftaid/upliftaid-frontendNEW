import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClipboardList,
  FaBriefcase,
} from "react-icons/fa";

const jobApplications = [
  {
    title: "HR Intern",
    location: "Mumbai, Maharashtra",
    appliedAt: "August 1, 2025",
    status: "Accepted",
  },
  {
    title: "MRMS Intern",
    location: "Remote",
    appliedAt: "August 3, 2025",
    status: "Under Review",
  },
  {
    title: "Fundraising Volunteer",
    location: "Delhi, India",
    appliedAt: "July 25, 2025",
    status: "Rejected",
  },
];

// Status -> Icon and Color
const getStatusMeta = (status) => {
  switch (status) {
    case "Submitted":
      return {
        icon: <FaClipboardList className="text-yellow-500" />,
        color: "text-yellow-600",
      };
    case "Under Review":
      return {
        icon: <FaBriefcase className="text-blue-500" />,
        color: "text-blue-600",
      };
    case "Accepted":
      return {
        icon: <FaCheckCircle className="text-green-500" />,
        color: "text-green-600",
      };
    case "Rejected":
      return {
        icon: <FaTimesCircle className="text-red-500" />,
        color: "text-red-600",
      };
    default:
      return {
        icon: <FaClipboardList className="text-gray-400" />,
        color: "text-gray-600",
      };
  }
};

const JobApplications = () => {
  return (
    <div className="w-full shadow-md rounded bg-white p-6 md:p-8 grid gap-8">
      <h2 className="font-semibold text-xl md:text-2xl mb-6">
        Your Job Applications
      </h2>

      {jobApplications.length > 0 ? (
        <div className="space-y-6">
          {jobApplications.map((job, index) => {
            const statusMeta = getStatusMeta(job.status);

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
              >
                {/* Left: Job Info */}
                <div>
                  <p className="font-semibold text-lg">{job.title}</p>
                  <p className="text-sm text-gray-600">{job.location}</p>
                  <p className="text-sm text-gray-500">
                    Applied on {job.appliedAt}
                  </p>
                </div>

                {/* Right: Status */}
                <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
                  <span className="flex items-center gap-2">
                    {statusMeta.icon}
                    <span className={statusMeta.color}>
                      Status: {job.status}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="italic text-gray-500">
          You have not applied to any roles yet.
        </p>
      )}
    </div>
  );
};

export default JobApplications;
