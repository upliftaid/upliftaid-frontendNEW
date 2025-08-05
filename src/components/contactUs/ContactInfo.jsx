import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardVoice, MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center text-sm lg:text-base mb-8">
        {/* Address */}
        <div className="group w-full max-w-xs flex flex-col items-center gap-4 text-center cursor-pointer transition duration-200">
          <div className="w-16 h-16 bg-[#F7F7F7] group-hover:bg-[#00733C] group-hover:text-white rounded-full flex items-center justify-center text-[#00733C] transition duration-200">
            <FaLocationDot size={24} />
          </div>
          <div>
            <p className="font-semibold group-hover:text-[#00733C] transition duration-200">
              Address
            </p>
            <p className="break-words">
              Ghaziabad, Uttar Pradesh, India, 201001
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="group w-full max-w-xs flex flex-col items-center gap-4 text-center cursor-pointer transition duration-200">
          <div className="w-16 h-16 bg-[#F7F7F7] group-hover:bg-[#00733C] group-hover:text-white rounded-full flex items-center justify-center text-[#00733C] transition duration-200">
            <MdKeyboardVoice size={28} />
          </div>
          <div>
            <p className="font-semibold group-hover:text-[#00733C] transition duration-200">
              Phone
            </p>
            <p className="break-words">+91-8319301965</p>
          </div>
        </div>

        {/* Email */}
        <div className="group w-full max-w-xs flex flex-col items-center gap-4 text-center cursor-pointer transition duration-200">
          <div className="w-16 h-16 bg-[#F7F7F7] group-hover:bg-[#00733C] group-hover:text-white rounded-full flex items-center justify-center text-[#00733C] transition duration-200">
            <MdEmail size={28} />
          </div>
          <div>
            <p className="font-semibold group-hover:text-[#00733C] transition duration-200">
              Email
            </p>
            <p className="break-words">hello@upliftaid.org</p>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto h-[1px] bg-[#e1e1e1]" />
    </>
  );
};

export default ContactInfo;
