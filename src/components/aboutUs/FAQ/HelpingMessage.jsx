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
          <h1 className="font-bold text-[36px] text-[#FFB204]">
            DONATE NOW AND BE THE DIFFERENCE
          </h1>
          <p className="text-[14px] lg:w-[800px] text-ellipsis">
Your donation can bring hope, healing, and opportunity to those who need it most. Every contribution, big or small, creates real change. Donate now and be the difference someone is waiting for.
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
