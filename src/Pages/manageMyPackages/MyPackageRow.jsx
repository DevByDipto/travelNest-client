import React from "react";
import Swal from "sweetalert2";
import { NavLink } from "react-router";
import useAuthSecure from "../../Hook/useAuthSecure";

const MyPackageRow = ({ pkg, index, setMyPackages, myPackages }) => {
  const { _id, tour_name } = pkg;
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
        });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{tour_name}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
      <td><NavLink to={`/update-my-Package/${_id}`}>Eidt</NavLink></td>
      <td onClick={handledeletePackage}>Delete</td>
    </tr>
  );
};

export default MyPackageRow;
