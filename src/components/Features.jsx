import FeaturesDetails from "../constants/FeaturesDetails";

const Features = () => {
  return (
    <div className="lg:w-full grid gap-20 lg:p-6 min-w-[320px] place-items-center justify-center bg-[#e1e1e1]/40">
      <div className="grid lg:grid-cols-3 gap-10 md:gap-20 p-4 md:grid-cols-2">
        {FeaturesDetails.map((data, index) => {
          return (
            <div className="gap-4 flex" key={data.heading + index}>
              <div className="mt-1">
                <data.icon color="#00733C" size={20} />
              </div>
              <div className="grid gap-4">
                <p className="text-[18px]">{data.heading}</p>
                <p className="text-[14px] md:w-75 lg:w-80">
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
