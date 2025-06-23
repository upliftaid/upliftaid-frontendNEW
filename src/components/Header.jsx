const Header = () => {
  return (
    <div className="relative lg:w-full mt-10 min-w-[320px]">
      {/* Fixed background image */}
      <div
        className="absolute inset-0 h-full w-full bg-[url('https://thumbs.dreamstime.com/b/diverse-poor-people-getting-food-donation-non-profit-organization-center-group-aid-team-volunteers-giving-multiethnic-371077933.jpg')] bg-fixed bg-cover -z-10 bg-center object-scale-down"
        aria-hidden="true"
      ></div>

      {/* Content wrapper with overlay */}
      <div className="relative bg-black/50 h-60 flex justify-center text-white">
        <div className="pt-20 lg:px-40 md:px-16 px-5">
          <h1 className="font-semibold text-[42px]">Products</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
