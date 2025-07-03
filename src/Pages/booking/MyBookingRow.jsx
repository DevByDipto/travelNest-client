import React, { useState } from "react";
import Button from "../../Components/common/Button";
import useAuthSecure from "../../Hook/useAuthSecure";
import toast from "react-hot-toast";

const MyBookingRow = ({ bookedToure, index }) => {
 
  const [bookingStatus, setbookingStatus] = useState(bookedToure.status);
  const { user, axiosSecure } = useAuthSecure();
 const isEven = index % 2 === 0;
  const {
    _id,
    tour_name,
    guide_name,
    guide_contact_no,
    departure_date,
    departure_location,
    destination,
    special_note
  } = bookedToure;
  const handleConfirmBooking = () => {
    axiosSecure
      .patch(`/booking/${_id}?email=${user.email}`, { status: "completed" })
      .then((res) => {
        if (res.data.modifiedCount) {
          setbookingStatus("completed");
          toast.success("Booking confirmed for your selected tour package.");
        }
      })
  };

  return (
    <tr className={`${!isEven && "bg-gray-200 dark:bg-[#242a31]"}`}>
      <th>{index + 1}</th>
      <td>{tour_name}</td>
      <td>{guide_name}</td>
      <td>{guide_contact_no}</td>
      <td>{departure_date}</td>
      <td>{departure_location}</td>
      <td>{destination}</td>
      <td>{special_note}</td>
      <td onClick={handleConfirmBooking}>
        {bookingStatus == "pending" ? <Button>Confirm</Button> : <span className=" bg-green-400 p-1 rounded-4xl">Confirmed</span>}
      </td>
    </tr>
  );
};

export default MyBookingRow;
