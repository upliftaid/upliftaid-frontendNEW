import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBars = () => {
  const ProgressBarDetail = [
    {
      label: "Funds For Childrens",
      completed: "60",
    },
    {
      label: "Funds For Plants",
      completed: "65",
    },
    {
      label: "Funds For Education",
      completed: "80",
    },
    {
      label: "Funds For Refugees",
      completed: "70",
    },
  ];
  return (
    <div className="mt-4 grid gap-2">
      {/* Label above the progress bar */}

      {ProgressBarDetail.map((bar, index) => {
        return (
          <div
            className="lg:w-[90%] min-w-68 lg:mx-auto mt-4"
            key={index + bar.label}
          >
            <div className="flex">
              <span className="text-[14px]">{bar.label}</span>
              <p className="text-gray-500 lg:px-[200px] px-12 py-2 text-[14px]">
                {bar.completed}%
              </p>
            </div>
            <div></div>

            {/* Progress bar */}
            <ProgressBar
              completed={bar.completed}
              bgColor="#00733C"
              borderRadius="0"
              baseBgColor="#ccc"
              width="100%"
              height="15px"
              isLabelVisible={false} // hide label inside the bar
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBars;
