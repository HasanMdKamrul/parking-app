import { format } from "date-fns";
import React from "react";
import ParkingPlace from "../Parking/ParkingPlace/ParkingPlace";

const ParkingPlaces = ({ range, places, setPlaces, handleBooking }) => {
  console.log(places);
  return (
    <section>
      <h1 className="text-center font-bold text-accent text-xl">
        Parking places requested date:{" "}
        {range?.from && `${format(range?.from, "PP")}`}
        to : {range?.to && `${format(range?.to, "PP")}`}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {places?.map((place) => (
          <ParkingPlace
            handleBooking={handleBooking}
            key={place._id}
            place={place}
          />
        ))}
      </div>
    </section>
  );
};

export default ParkingPlaces;
