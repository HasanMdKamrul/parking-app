import React from "react";

const ParkingPlace = ({ place, handleBooking }) => {
  const { place: parkingPlace, slots } = place;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{parkingPlace}</h2>
        <p>
          {slots.length > 0
            ? slots.length > 1
              ? `${slots.length} slots avaiable`
              : `${slots.length} slot aviable`
            : "No Slots Avaiable"}
        </p>
        <div className="card-actions ">
          <label
            onClick={() => handleBooking(place)}
            htmlFor="booking-modal"
            className="btn btn-primary"
          >
            Booking
          </label>
        </div>
      </div>
    </div>
  );
};

export default ParkingPlace;
