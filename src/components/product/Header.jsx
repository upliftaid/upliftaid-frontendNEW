const Header = () => {
  return (
    <div className="relative lg:w-full mt-10 min-w-[320px] h-80">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://zozothemes.com/html/the-charity/img/sections/bg/about-header-bg.jpg')] bg-fixed -z-10 bg-top md:bg-top-right lg:bg-top"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative bg-white/10 h-80 flex justify-center">
        <div className="pt-35 lg:px-40 md:px-16 px-5">
          <h1 className="font-semibold md:text-[42px] text-[32px]">Product Page</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;