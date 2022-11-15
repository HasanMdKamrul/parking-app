import { addDays } from "date-fns";
import React, { useState } from "react";
import ParkingPlaces from "../ParkingPlaces/ParkingPlaces";
import ParkingBanner from "./ParkingBanner/ParkingBanner";

const Parking = () => {
  const [range, setRange] = useState(
    {
      from: new Date(),
      to: addDays(new Date(), 7),
    } || undefined
  );
  // console.log(format(range?.from, "PP"), format(range?.to, "PP"));

  // if (range?.from !== undefined && range?.to !== undefined) {
  //   console.log(format(range?.from, "PP"), format(range?.to, "PP"));
  // }

  // <h1>
  // {range && (
  //   <p>
  //     From {format(range.from, "PP")}
  //     to {format(range.to, "PP")}
  //     Selected
  //   </p>
  // )}
  // </h1>

  // let footer = <p>Please pick the first day.</p>;
  // if (range?.from) {
  //   if (!range.to) {
  //     footer = <p>{format(range.from, "PPP")}</p>;
  //   } else if (range.to) {
  //     footer = (
  //       <p>
  //         {format(range.from, "PPP")}–{format(range.to, "PPP")}
  //       </p>
  //     );
  //   }
  // }

  return (
    <div>
      <ParkingBanner range={range} setRange={setRange} />
      <ParkingPlaces range={range} />
    </div>
  );
};

export default Parking;
