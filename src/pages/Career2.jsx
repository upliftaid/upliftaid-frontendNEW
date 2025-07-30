// build by Manav juneja at branch CareerPage-mana
import React from "react";
import hands from '../assets/images/hands.jpeg';
import puzzle from '../assets/images/image.png'
import apply from '../assets/images/puzzle.png'

const JoinTeamPage = () => {
  return (
    <div className="font-[Poppins]">
      {/* Hero Section */}
      <div
        className="h-[400px] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{
            backgroundImage: `url(${hands})`
        }}
      >
        Join Our Team
      </div>

      {/* Our Culture */}
       <div className="py-16 px-8 md:px-20 bg-white">
        <div className="grid lg:grid-cols-2 place-items-center">
          <img
            src={apply}
            alt="culture"
            className="w-96 md:w-[500px] mb-6 md:mb-0 md:mr-10"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Culture</h2>
            <p className="text-gray-700 text-lg">
              UpliftAid believe in compassion, inclusivity, and relentless dedication. Our team is
              united by a commitment to making a tangible difference. We foster an environment where
              every voice is heard and every effort is valued. Collaboration, innovation, and empathy
              empower us to tackle challenges and create a sustainable impact. Together, we uplift
              communities, inspire change, and build a brighter future.
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-16 px-8 md:px-20 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-12">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-3xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
            <p className="text-gray-600">
              UpliftAid Foundation, understand the importance of work-life balance. Our flexible
              working hours allow you to manage your personal commitments while contributing
              meaningfully to our cause.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
            <p className="text-gray-600">
              At UpliftAid, collaboration is key. You will be part of a supportive team where your
              ideas are valued, and everyone works together towards a common goal.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
            <p className="text-gray-600">
              At UpliftAid Foundation, we invest in our team’s growth. You’ll have access to training
              and development opportunities that enhance your skills and help you advance in your
              career.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings Section */}
      <div className="py-16 px-8 md:px-20 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Join Our Team</h2>
        <p className="text-center text-gray-600 mb-12">
          We’re looking for passionate individuals to join our growing team. Explore our job
          openings below and apply today!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25062.jpg"
              alt="HR Intern"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">HR Intern</h3>
              <p className="text-gray-600 text-sm mb-1">Location: Mumbai, Maharashtra</p>
              <p className="text-gray-600 text-sm mb-1">Experience: Fresher</p>
              <p className="text-gray-600 text-sm mb-3">
                Skills: Communication, Recruitment, Microsoft Office, Time Management, Interpersonal Skills
              </p>
              <a href="#" className="text-green-700 underline text-sm">View Job Description</a>
              <button className="block w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-800">
                APPLY NOW
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://img.freepik.com/free-vector/hiring-concept-illustration_114360-5185.jpg"
              alt="MRMS Intern"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">MRMS Intern</h3>
              <p className="text-gray-600 text-sm mb-1">Location: Remote</p>
              <p className="text-gray-600 text-sm mb-1">Experience: Fresher</p>
              <p className="text-gray-600 text-sm mb-3">
                Skills: Market Strategy, market Research
              </p>
              <a href="#" className="text-green-700 underline text-sm">View Job Description</a>
              <button className="block w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-800">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="py-20 px-8 md:px-20 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-10 text-center">Apply for a Career</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form className="space-y-6">
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Job Position</label>
              <input
                type="text"
                placeholder="Select From Current Openings"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Upload Resume</label>
              <input
                type="file"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Cover Letter (optional)</label>
              <textarea
                rows="5"
                placeholder="Your Cover Letter (optional)"
                className="w-full mt-1 border border-gray-300 p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              SUBMIT APPLICATION
            </button>
          </form>

          <div className="flex justify-center">
            <img
              src={puzzle}
              alt="Apply"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeamPage;
