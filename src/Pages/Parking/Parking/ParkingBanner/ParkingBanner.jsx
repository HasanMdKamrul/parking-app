import { addDays, format } from "date-fns";
import Lottie from "lottie-react";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import ParkingAnimation from "../../../../assets/ParkingAnimation.json";
const ParkingBanner = () => {
  const [range, setRange] = useState({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  console.log(format(range.from, "PP"), format(range.to, "PP"));

  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <DayPicker
            mode="range"
            defaultMonth={new Date()}
            selected={range}
            onSelect={setRange}
          />

          <div className="relative lg:w-1/2">
            <Lottie animationData={ParkingAnimation} />;
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingBanner;
