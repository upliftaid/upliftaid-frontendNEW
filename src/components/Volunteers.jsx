import VolunteersDetails from "../constants/Volunteers";

const Volunteers = () => {
  return (
    <div className="lg:w-full grid gap-20 lg:p-6 min-w-[320px] place-items-center justify-center">
      <div className="grid gap-1 text-center">
        <h1 className="text-[36px]">MEET OUR VOLUNTEER</h1>
        <div className="bg-[#00733C] w-16 h-[2.5px] mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 p-4 md:grid-cols-3 grid-cols-1">
        {VolunteersDetails.map((data, index) => {
          return (
            <div className="grid lg:w-[350px] gap-5" key={data.name + index}>
              <div className="lg:w-[350px] h-[188px]">
                <img src={data.image} alt="" className="w-full h-full" />
              </div>
              <div className="text-center grid gap-4">
                <div className="grid gap-1 text-center">
                  <h1 className="text-[18px]">{data.name}</h1>
                  <div className="bg-[#00733C] w-8 h-[2.5px] mx-auto"></div>
                </div>
                <h1>{data.post}</h1>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Volunteers;
