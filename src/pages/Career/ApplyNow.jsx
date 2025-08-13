import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const jobListings = [
  {
    title: "HR Intern",
    location: "Mumbai, Maharashtra",
    workingHours: "Part-time, 20 hrs/week",
    experience: "Fresher",
    skills: [
      "Communication",
      "Recruitment",
      "Microsoft Office",
      "Time Management",
      "Interpersonal Skills",
    ],
    image:
      "https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25062.jpg",
    description: {
      intro:
        "As an HR Intern at UpliftAid Foundation, you will support our recruitment, onboarding, and employee engagement initiatives to help empower communities.",
      responsibilities: [
        "Assist in screening resumes and scheduling interviews",
        "Maintain HR documents and databases",
        "Support team building and employee wellness activities",
      ],
      requirements: [
        "Excellent communication skills",
        "Proficiency in Microsoft Office",
        "Detail-oriented and eager to learn",
      ],
    },
  },
  {
    title: "MRMS Intern",
    location: "Remote",
    workingHours: "Flexible, 15-20 hrs/week",
    experience: "Fresher",
    skills: ["Market Strategy", "Market Research"],
    image:
      "https://img.freepik.com/free-vector/hiring-concept-illustration_114360-5185.jpg",
    description: {
      intro:
        "As an MRMS Intern, you'll help analyze market data and support our strategic initiatives to create sustainable impact.",
      responsibilities: [
        "Conduct market research and competitor analysis",
        "Assist in developing reports and presentations",
        "Collaborate with the strategy team on insights",
      ],
      requirements: [
        "Analytical thinking",
        "Basic understanding of marketing and research",
        "Self-driven and curious mindset",
      ],
    },
  },
];

const ApplyNowPage = () => {
  const { jobTitle } = useParams();
  const navigate = useNavigate();
  const job = jobListings.find((j) => j.title === decodeURIComponent(jobTitle));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
    position: job?.title || "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  if (!job) {
    return <div className="p-10 text-center text-red-500">Job not found.</div>;
  }

  return (
    <div className="font-[Poppins] px-6 md:px-20 py-10 bg-[#f9fafb] pt-25">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#2e7d32] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#256628] transition"
        >
          ← Back to Careers
        </button>
      </div>

      {/* Image */}
      <div className="max-w-4xl mx-auto">
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Job Info */}
      <div className="max-w-4xl mx-auto bg-white p-6 mt-6 rounded-2xl shadow-md border-t-4 border-[#2e7d32]">
        <h1 className="text-3xl font-bold text-[#2e7d32] mb-2">{job.title}</h1>
        <div className="text-gray-600 space-y-1 mb-4">
          <p>
            <span className="font-semibold">Location:</span> {job.location}
          </p>
          <p>
            <span className="font-semibold">Working Hours:</span>{" "}
            {job.workingHours}
          </p>
          <p>
            <span className="font-semibold">Experience:</span> {job.experience}
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed">{job.description.intro}</p>
      </div>

      {/* Details */}
      <div className="max-w-4xl mx-auto bg-white p-6 mt-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold text-[#2e7d32] mb-2">
          Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {job.description.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-[#2e7d32] mt-6 mb-2">
          Requirements
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          {job.description.requirements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Application Form */}
      <div className="max-w-4xl mx-auto bg-white p-6 mt-8 rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-[#2e7d32] mb-6">
          Apply Now
        </h2>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
            />
          </div>

          <div>
            <label className="block font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
            />
          </div>

          <div>
            <label className="block font-medium">Job Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              readOnly
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <label className="block font-medium">
              Upload Resume <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              required
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium">Cover Letter</label>
            <textarea
              rows="5"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Your Cover Letter"
              className="w-full mt-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e7d32]"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#2e7d32] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#256628] transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowPage;
