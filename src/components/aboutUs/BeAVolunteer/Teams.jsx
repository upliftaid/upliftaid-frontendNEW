import TeamsDetails from "../../../constants/aboutUs/BeVolunteer/TeamsDetails";

const Teams = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-10 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          MEET OUR TEAMS
        </h1>
        <div className="bg-[#00733C] w-16 h-[3px] mx-auto" />
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {TeamsDetails.map((data, index) => (
          <div
            key={data.name + index}
            className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden group">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 text-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {data.name}
                </h2>
                <div className="bg-[#00733C] w-8 h-[2.5px] mx-auto my-1" />
                <p className="text-sm text-gray-600">{data.post}</p>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
