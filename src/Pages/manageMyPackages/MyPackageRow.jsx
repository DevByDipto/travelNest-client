import React from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router";
import useAuthSecure from "../../Hook/useAuthSecure";
import { MdDeleteForever, MdEditSquare } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const MyPackageRow = ({ pkg, index, setMyPackages, myPackages }) => {
   const isEven = index % 2 === 0;
   const {
    _id,
    tour_name,
    bookingCount,
    image,
    guide_photo,
    guide_name,
    guide_contact_no,
    price,
    departure_date,
    duration,
    package_details,
    departure_location,
    destination,
  } = pkg;
 
    const {user,axiosSecure} = useAuthSecure()

  const handledeletePackage = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/packages/${_id}?email=${user.email}`).then((res) => {
          if (res.data.deletedCount) {
            const newPackages = myPackages.filter((pkg) => pkg._id !== _id);
            setMyPackages(newPackages);
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Your file has been deleted.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
      }
    });
  };
  return (
    <tr className={`${!isEven && "bg-gray-200 dark:bg-[#242a31]"}`}>
      <th>{index + 1}</th>
      <td>{tour_name}</td>
      <td>{price}</td>
      <td>{departure_location}</td>
      <td>{destination}</td>
      <td>{bookingCount}</td>
      <td className="text-blue-500 hover:text-blue-600"><NavLink to={`/update-my-Package/${_id}`}><RiEdit2Fill size={25} /></NavLink></td>
      <td className="text-red-500 hover:text-red-600" onClick={handledeletePackage}><MdDeleteForever size={25} /></td>
    </tr>
  );
};

export default MyPackageRow;
