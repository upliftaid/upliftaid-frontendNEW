import { useState } from "react";
import { LuSend } from "react-icons/lu";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-full lg:p-19 h-auto mt-10 lg:mt-0">
      <div className="w-full h-auto flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
        <div className="lg:px-30 w-full px-4 lg:w-fit">
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="p-2 outline-amber-500 lg:w-[320px] w-full border border-[#e1e1e1] rounded"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-2 outline-amber-500 lg:w-[320px] w-full border border-[#e1e1e1] rounded"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-2 outline-amber-500 lg:w-[320px] w-full border border-[#e1e1e1] rounded"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="p-2 outline-amber-500 lg:w-[320px] w-full border border-[#e1e1e1] rounded"
              />
            </div>
            <button
              type="submit"
              className="p-2 outline-amber-500 lg:w-[320px] w-full border border-[#e1e1e1] rounded flex items-center justify-center cursor-pointer gap-4 hover:bg-[#E69F00] bg-[#FFB204] hover:text-white"
            >
              <p>Send Now</p>
              <LuSend />
            </button>
          </form>
        </div>

        <div className="w-full px-4 lg:px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-122.084!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e5555!2sGoogleplex!5e0!3m2!1sen!2sus!4v1621234567890"
            className="lg:w-[650px] w-full h-[350px] border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
