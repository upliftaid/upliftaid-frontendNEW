import { NavLink } from "react-router-dom";
import PriceCardDetails from "../../constants/Home2/PriceCardDetails";

const StatsCard = () => {
  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16 min-w-[320px] lg:w-full">
      <div className="grid gap-1 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-[42px]">Donate Now</h1>
        <div className="bg-[#00733C] w-16 h-[2.5px] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8 justify-items-center md:grid-cols-2">
        {PriceCardDetails.map((card, index) => {
          const heading = card.heading.toUpperCase();
          const isDiamond = heading === "DIAMOND";
          const isGold = heading === "GOLD";

          return (
            <div
              className="group w-full max-w-[250px] h-[450px] border-2 rounded-sm shadow-xl grid place-items-center transition-all duration-300 border-[#FFB204]"
              key={card.heading + index}
            >
              <h1 className="text-xl font-semibold mt-4 group-hover:text-[#00733C] transition-all duration-300">
                {card.heading}
              </h1>
              <p>Starting at</p>
              <div className="grid place-items-center">
                <p className="text-[#00733C] text-3xl font-bold">
                  ₹{card.price}
                </p>
                <p className="text-xs">/month</p>
              </div>

              <div className="grid gap-6 place-items-center text-center px-2">
                <p className={isDiamond || isGold ? "" : "text-[#1E1E1E66]"}>
                  {card.product1}
                </p>
                <p className={isDiamond ? "" : ""}>{card.product2}</p>
                <p className={isDiamond ? "" : ""}>{card.product3}</p>
                <p className={isDiamond ? "" : "text-[#1E1E1E66]"}>
                  {card.product4}
                </p>
              </div>

              <div className="bg-[#FFB204] hover:bg-[#E69F00] text-black rounded hover:text-white w-[132px] h-13 flex items-center justify-center text-lg mt-4 cursor-pointer">
                <NavLink to="/">Donate Now</NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;
