import { useEffect, useRef, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressBars = () => {
  const ProgressBarDetail = [
    { label: "Funds For Childrens", completed: 60 },
    { label: "Funds For Plants", completed: 65 },
    { label: "Funds For Education", completed: 80 },
    { label: "Funds For Food", completed: 70 },
  ];

  // Track visibility state for each progress bar
  const [visibleBars, setVisibleBars] = useState(
    new Array(ProgressBarDetail.length).fill(false)
  );

  // Refs array to hold references to each progress bar container
  const barRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleBars((prev) => {
              if (!prev[index]) {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              }
              return prev;
            });
            observer.unobserve(entry.target); // stop observing after visible
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    barRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-8 max-w-4xl mx-auto px-4 sm:px-6 md:px-0 grid gap-y-6">
      {ProgressBarDetail.map((bar, index) => (
        <div
          key={index + bar.label}
          data-index={index}
          ref={(el) => (barRefs.current[index] = el)}
          className="w-full"
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-base font-medium text-gray-800">
              {bar.label}
            </span>
            <span className="text-sm text-gray-600">{bar.completed}%</span>
          </div>

          <ProgressBar
            completed={visibleBars[index] ? bar.completed : 0}
            bgColor="#00733C"
            baseBgColor="#e0e0e0"
            height="16px"
            borderRadius="8px"
            isLabelVisible={false}
            animateOnRender={false} // controlled manually by visibility
            transitionDuration="1.5s"
            transitionTimingFunction="ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBars;
