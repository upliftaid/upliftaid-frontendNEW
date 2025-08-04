import { FaPaperPlane } from "react-icons/fa";

const inputStyle =
  "w-full px-4 py-2 bg-white border border-[#E1E1E1] rounded-sm text-sm text-gray-700 font-medium placeholder:text-gray-400 placeholder:text-[0.8rem] focus:outline-none focus:ring-2 focus:ring-[#00733C] transition";

export default function BecomeAVolunteer() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto items-start">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          <img
            src="https://zozothemes.com/html/the-charity/img/sections/team/featured-volunteers.jpg"
            alt="volunteer"
            className="rounded-md w-full h-auto object-cover"
          />
          <p className="text-sm text-gray-700 leading-relaxed">
            Thank you for your interest in volunteering with us! By filling out
            this form, you’re taking the first step toward making a real impact
            in the community. Whether you’re looking to give back, gain
            experience, or connect with others, we have a place for you. Our
            team will reach out with opportunities that match your skills and
            interests.
          </p>
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-white p-6 rounded-md shadow-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-[#00733C]">
            BECOME A VOLUNTEER
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              className={inputStyle}
            />
            <input
              type="tel"
              placeholder="Phone"
              className={inputStyle}
            />
            <textarea
              placeholder="Why do you want to volunteer?"
              className={`${inputStyle} resize-none h-24`}
            />
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 hover:bg-[#00733C] hover:text-white text-[#00733C] border-[1.5px] border-[#00733C] font-semibold text-sm py-3 rounded-sm transition-all duration-300"
            >
              JOIN US
              <FaPaperPlane className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
