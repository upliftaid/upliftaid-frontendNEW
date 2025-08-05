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
    <div className="w-full px-10 py-8">
      <div className="flex flex-col lg:flex-row items-start max-lg:items-center gap-10">
        {/* Form Section */}
        <div className="w-full max-w-lg">
          <form
            className="grid gap-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded outline-amber-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded outline-amber-500"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded outline-amber-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded outline-amber-500 resize-none"
            />
            <button
              type="submit"
              className="w-full p-3 flex items-center justify-center gap-2 text-[#00733C] hover:text-white font-medium bg-white border border-1.5 border-[#00733C] hover:bg-[#00733C] rounded transition duration-200"
            >
              <span>Send Now</span>
              <LuSend size={18} />
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.0570093263!2d77.19937116953125!3d28.68118195000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5caa3e588c7%3A0xf6811bd445ca4091!2sGhaziabad%2C%20Uttar%20Pradesh%20201001!5e0!3m2!1sen!2sin!4v1693646140000!5m2!1sen!2sin"
            className="w-full h-[350px] border-none rounded"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
