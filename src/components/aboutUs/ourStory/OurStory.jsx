const OurStory = () => {
  return (
    <div className="relative w-full mt-10 min-w-[320px] h-80 md:h-[22rem] lg:h-[26rem]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 w-full h-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/about-header-bg.jpg')] bg-fixed bg-cover bg-center md:bg-right-top lg:bg-top -z-10"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative flex items-center justify-center w-full h-full bg-white/10 px-4 md:px-12 lg:px-20">
        <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-center text-white drop-shadow-md">
          Our Story
        </h1>
      </div>
    </div>
  );
};

export default OurStory;
