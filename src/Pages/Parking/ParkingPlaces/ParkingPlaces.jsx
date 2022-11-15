import { format } from "date-fns";
import React from "react";

const ParkingPlaces = ({ range }) => {
  return (
    <section>
      <h1 className="text-center font-bold text-accent text-xl">
        Parking places requested date:{" "}
        {range?.from && `${format(range?.from, "PP")}`}
        to : {range?.to && `${format(range?.to, "PP")}`}
      </h1>
    </section>
  );
};

export default ParkingPlaces;
