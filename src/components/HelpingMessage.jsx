import { NavLink } from "react-router-dom";

const HelpingMessage = () => {
  return (
    <div className="relative lg:w-full mt-10 min-w-[320px]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/slider/charity-slide2.jpg')] lg:bg-fixed bg-cover bg-top-center -z-10"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative bg-black/70 md:py-16 md:px-8">
        <div className="grid gap-4 text-white place-items-center p-4 text-center">
          <h1 className="font-bold text-[36px]">
            Working with us by helping & donation
          </h1>
          <p className="text-[14px] lg:w-[800px] text-ellipsis">
            Join us in making a real difference. Whether you give your time,
            skills, or resources, your support helps us reach more lives and
            build stronger communities. Every donation fuels education,
            healthcare, protection, and hope. Every volunteer brings compassion
            and change. Together, we can transform lives—one act of kindness at
            a time.
          </p>
          <div className="bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white w-[111px] h-10 flex items-center justify-center text-[14px]">
            <NavLink to="/" className="">
              Donate Now!!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpingMessage;
