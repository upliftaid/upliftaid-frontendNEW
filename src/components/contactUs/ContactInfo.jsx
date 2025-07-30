import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <>
      <div className="w-full h-auto px-2 py-2 lg:p-19 grid md:grid-cols-3 grid-cols-1 place-items-center text-sm lg:text-base gap-4">
        <div className="lg:w-[336px] w-[200px] h-auto grid place-items-center gap-4">
          <div className="w-23 h-23 bg-[#F7F7F7] rounded-full flex items-center justify-center text-[#00733C]">
            <FaLocationDot size={25} />
          </div>
          <div>
            <p className="text-center">Address</p>
            <p>Ghaizabad, UttaPradesh, India , 201001</p>
          </div>
        </div>

        <div className="lg:w-[336px] w-[200px] h-auto grid place-items-center gap-4 ">
          <div className="w-23 h-23 bg-[#F7F7F7] rounded-full flex items-center justify-center text-[#00733C]">
            <MdKeyboardVoice size={35} />
          </div>
          <div>
            <p className="text-center">Phones</p>
            <p>+91-8319301965</p>
          </div>
        </div>

        <div className="lg:w-[336px] w-[200px] h-auto grid place-items-center gap-4 ">
          <div className="w-23 h-23 bg-[#F7F7F7] rounded-full flex items-center justify-center text-[#00733C]">
            <MdEmail size={35} />
          </div>
          <div>
            <p className="text-center">Email Address</p>
            <p>hello@upliftaid.org</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[1px] bg-[#e1e1e1]" />
    </>
  );
};

export default ContactInfo;
