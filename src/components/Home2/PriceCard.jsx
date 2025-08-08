import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedPlan } from "../../redux/donationSlice";
import PriceCardDetails from "../../constants/Home2/PriceCardDetails";

const StatsCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDonateClick = (plan) => {
    dispatch(setSelectedPlan(plan));
    navigate("/donate");
  };

  return (
    <div className="mt-10 px-4 py-20 md:px-8 lg:px-16 min-w-[320px] lg:w-full">
      <div className="grid gap-1 text-center !my-10 place-items-center">
        <h1 className="text-3xl md:text-4xl lg:text-[42px]">Donate Now</h1>
        <div className="bg-[#00733C] w-16 h-[2.5px] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 min-[1250px]:!grid-cols-4 gap-10 mt-8 justify-items-center md:grid-cols-2">
        {PriceCardDetails.map((card, index) => {
          const heading = card.heading.toUpperCase();
          const isDiamond = heading === "DIAMOND";
          const isGold = heading === "GOLD";

          return (
            <div
              className="group w-full max-w-[350px] h-[450px] border-2 rounded-sm shadow-xl grid place-items-center transition-all duration-300 border-[#FFB204]"
              key={card.heading + index}
            >
              <h1 className="text-[30px] font-medium mt-4 group-hover:text-[#00733C] transition-all duration-300">
                {card.heading}
              </h1>

              <div className="flex justify-center flex-col items-center">
                <p>Starting at</p>
                <div className="grid place-items-center">
                  <p className="text-[#00733C] text-3xl font-bold">
                    ₹{card.price}
                  </p>
                  <p className="text-xs">/month</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-center px-2">
                <p
                  className={
                    isDiamond || isGold ? "" : "text-[#1E1E1E66] line-through"
                  }
                >
                  {card.product1}
                </p>
                <p>{card.product2}</p>
                <p>{card.product3}</p>
                <p className={isDiamond ? "" : "text-[#1E1E1E66] line-through"}>
                  {card.product4}
                </p>
              </div>

              {/* Donate Button */}
              <button
                className="bg-[#FFB204] hover:bg-[#E69F00] duration-300 rounded text-white w-[132px] h-13 flex items-center justify-center text-lg mt-4 cursor-pointer"
                onClick={() => handleDonateClick(card)}
              >
                Donate Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsCard;
