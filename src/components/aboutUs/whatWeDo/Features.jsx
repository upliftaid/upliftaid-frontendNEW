import FeaturesDetails from "../../../constants/aboutUS/whatWeDO/FeaturesDetails";

const Features = () => {
  return (
    <section className="w-full bg-[#f7f7f7] py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00733C]">
          What We Do
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our initiatives span multiple sectors to create sustainable change.
          Here are some key areas we focus on.
        </p>
        <div className="mt-4 mx-auto w-20 h-1 bg-[#00733C] rounded-full" />
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {FeaturesDetails.map((data, index) => (
          <div
            key={data.heading + index}
            className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col gap-4 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00733C]/10 transition-all duration-300 group-hover:bg-[#00733C]">
              <data.icon
                className="transition-colors duration-300 text-[#00733C] group-hover:text-white"
                size={24}
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#00733C] transition-colors duration-300">
              {data.heading}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
