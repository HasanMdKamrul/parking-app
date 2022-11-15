import Lottie from "lottie-react";
import React from "react";
import { DayPicker } from "react-day-picker";
import ParkingAnimation from "../../../../assets/ParkingAnimation.json";

const ParkingBanner = ({ range, setRange }) => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className="text-center text-3xl font-extrabold ">
          Select Your Dates
        </h1>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <DayPicker
            className=" bg-gray-500 p-32 "
            mode="range"
            defaultMonth={new Date()}
            selected={range}
            onSelect={setRange}
          />

          <div className="relative lg:w-1/2">
            <Lottie animationData={ParkingAnimation} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingBanner;
