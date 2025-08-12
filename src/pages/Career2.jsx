import React, { useState, useRef } from "react";
import hands from "../assets/images/hands.jpeg";
import puzzle from "../assets/images/image.png";
import apply from "../assets/images/puzzle.png";
import JobDescriptionModal from "../components/JobDescriptionModal";

// 🔹 Why Work With Us Data
const whyWorkWithUsData = [
  {
    icon: "🕒",
    title: "Flexible Timing",
    text: "UpliftAid Foundation understands the importance of work-life balance. Our flexible working hours allow you to manage your personal commitments while contributing meaningfully to our cause.",
  },
  {
    icon: "🤝",
    title: "Collaborative Environment",
    text: "At UpliftAid, collaboration is key. You’ll be part of a supportive team where your ideas are valued, and everyone works together towards a common goal.",
  },
  {
    icon: "📈",
    title: "Professional Development",
    text: "At UpliftAid Foundation, we invest in our team’s growth. You’ll have access to training and development opportunities that enhance your skills and help you advance in your career.",
  },
];

// 🔹 Job Listings Data
const jobListings = [
  {
    title: "HR Intern",
    location: "Mumbai, Maharashtra",
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
        "As an HR Intern at UpliftAid Foundation, you will support our recruitment, onboarding, and employee engagement initiatives. This is a great opportunity to gain hands-on experience in Human Resources within the nonprofit sector.",
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
    experience: "Fresher",
    skills: ["Market Strategy", "Market Research"],
    image:
      "https://img.freepik.com/free-vector/hiring-concept-illustration_114360-5185.jpg",
    description: {
      intro:
        "As an MRMS Intern, you'll help analyze market data and support our strategic initiatives. Perfect for someone passionate about market trends and strategy building.",
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

const JoinTeamPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobPosition, setJobPosition] = useState("");
  const formRef = useRef(null);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  const handleApplyNow = (jobTitle) => {
    setJobPosition(jobTitle);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-[Poppins] overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="h-[300px] sm:h-[400px] bg-cover bg-center flex items-center justify-center text-white text-3xl sm:text-5xl font-bold transition-all duration-500"
        style={{
          backgroundImage: `url(${hands})`,
        }}
      >
        Join Our Team
      </div>

      {/* Our Culture */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={apply}
            alt="culture"
            className="w-full max-w-md mx-auto rounded-lg transition-transform duration-500 hover:scale-105"
          />
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-semibold mb-4">Our Culture</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              UpliftAid believes in compassion, inclusivity, and relentless
              dedication. Our team is united by a commitment to making a
              tangible difference. We foster an environment where every voice is
              heard and every effort is valued. Collaboration, innovation, and
              empathy empower us to tackle challenges and create a sustainable
              impact. Together, we uplift communities, inspire change, and build
              a brighter future.
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      {/* Why Work With Us */}
      <div className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {whyWorkWithUsData.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-green-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Join Our Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We’re looking for passionate individuals to join our growing team.
          Explore our job openings below and apply today!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {jobListings.map((job, index) => (
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-1">
                  Location: {job.location}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  Experience: {job.experience}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  Skills: {job.skills}
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(job);
                  }}
                  className="text-green-700 underline text-sm mb-4"
                >
                  View Job Description
                </a>

                {/* This wrapper pushes the button to the bottom */}
                <div className="mt-auto">
                  <button
                    onClick={() => handleApplyNow(job.title)}
                    className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">
          Apply for a Career
        </h2>
        <div
          ref={formRef}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <form className="space-y-6 w-full max-w-lg mx-auto">
            {/* Full Name */}
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Job Position */}
            <div>
              <label className="block font-medium">Job Position</label>
              <input
                type="text"
                placeholder="Select From Current Openings"
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block font-medium">Upload Resume</label>
              <input
                type="file"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block font-medium">
                Cover Letter (optional)
              </label>
              <textarea
                rows="5"
                placeholder="Your Cover Letter"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-[#00733C] border border-1.5 border-[#00733C] transition duration-200 hover:bg-green-700 hover:text-white px-6 py-2 rounded"
            >
              SUBMIT APPLICATION
            </button>
          </form>

          {/* Right Side Image */}
          <div className="flex justify-center animate-fadeIn">
            <img
              src={puzzle}
              alt="Apply"
              className="w-full max-w-sm rounded-lg"
            />
          </div>

          {/* Modal */}
          <JobDescriptionModal
            isOpen={modalOpen}
            onClose={closeModal}
            title={selectedJob?.title}
            description={selectedJob?.description}
            onApply={handleApplyNow}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinTeamPage;
