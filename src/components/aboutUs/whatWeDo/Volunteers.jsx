import VolunteersDetails from "../../../constants/aboutUS/whatWeDO/Volunteers";

const Volunteers = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-12">
      {/* Section title */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-2">MEET OUR VOLUNTEER</h1>
        <div className="bg-[#00733C] w-16 h-1.5 mx-auto rounded"></div>
      </div>

      {/* Volunteers grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {VolunteersDetails.map((data, index) => (
          <div
            key={data.name + index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 text-center flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-1">{data.name}</h2>
              <div className="bg-[#00733C] w-10 h-1 mx-auto rounded mb-3"></div>
              <h3 className="text-green-700 font-medium mb-2">{data.post}</h3>
              <p className="text-gray-600 text-sm flex-grow">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
