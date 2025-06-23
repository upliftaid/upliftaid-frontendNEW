const Header = () => {
  return (
    <div className="relative lg:w-full mt-10 min-w-[320px]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/about-header-bg.jpg')] bg-fixed -z-10 bg-top"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative bg-white/10 h-60 md:mt-10 lg:mt-0 flex justify-center">
        <div className="pt-20 lg:px-40 md:px-16 px-5 md:block hidden">
          <h1 className="font-semibold md:text-[42px]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="pt-20 lg:px-40 md:px-16 px-5 md:hidden block text-center">
          <h1 className="font-semibold text-[28px]">Frequently Asked</h1>
          <h1 className="font-semibold text-[28px]"> Questions</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
