import { addDays } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import ParkingPlaces from "../ParkingPlaces/ParkingPlaces";
import ParkingBanner from "./ParkingBanner/ParkingBanner";

const Parking = () => {
  const [range, setRange] = useState(
    {
      from: new Date(),
      to: addDays(new Date(), 7),
    } || undefined
  );

  const [places, setPlaces] = useState([]);

  const [place, setPlace] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`ParkingOptions.json`);
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, []);

  const handleBooking = (place) => {
    setPlace(place);
  };

  return (
    <div>
      <ParkingBanner range={range} setRange={setRange} />
      <ParkingPlaces
        handleBooking={handleBooking}
        places={places}
        setPlaces={setPlaces}
        range={range}
      />
      {place && (
        <BookingModal setPlace={setPlace} range={range} place={place} />
      )}
    </div>
  );
};

export default Parking;
