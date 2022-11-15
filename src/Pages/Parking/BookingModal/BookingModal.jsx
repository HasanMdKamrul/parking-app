import { format } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";

const BookingModal = ({ place, range, setPlace }) => {
  //   const { place: parkingPlace, slots } = place;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const bookingHandle = (data) => {
    console.log(data);
    setPlace(null);
  };

  return (
    <>
      {errors && <p className="text-red-600">{errors?.message}</p>}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{place?.place}</h3>
          <form onSubmit={handleSubmit(bookingHandle)}>
            <input
              {...register("from", {
                required: true,
              })}
              defaultValue={range?.from && format(range?.from, "PP")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              {...register("to", {
                required: true,
              })}
              defaultValue={range?.to && format(range?.to, "PP")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <select
              {...register("slot", {
                required: true,
              })}
              className="select select-bordered w-full "
            >
              {place?.slots?.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="submit"
              value="Book"
              className="input input-bordered w-full "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
