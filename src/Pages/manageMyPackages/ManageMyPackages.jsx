import React, { use , useEffect, useState } from "react";
import MyPackageRow from "./MyPackageRow";
import useAuthSecure from "../../Hook/useAuthSecure";
import useSecureFetch from "../../Hook/useSecureFetch";
import useAuth from "../../Hook/useAuth";
import Loding from "../../Components/Loding";
import { useLocation, useNavigate, useNavigation } from "react-router";

const ManageMyPackages = () => {
  const { user } = useAuth();
  const {
    data: myPackages,
    setData: setMyPackages,
    loading,
  } = useSecureFetch(`/my-packages?email=${user.email}`);
  const navigate = useLocation()
  navigate.state=navigate.pathname
  // console.log(navigate);
  
  
  if (loading) return <Loding></Loding>;

 

  return (

    
    <div className="container pb-32">
      <h2 className="text-4xl font-bold rounded-full inline-block py-10">Manage My Packages</h2>

      <div className="overflow-x-auto">
        <table className="table border border-gray-100 dark:border-[#242a31]">
          {/* head */}
          <thead>
            <tr className='bg-gray-400 dark:bg-[#242a31]'>
              <th></th>
              <th>Name</th>
              <th>Price </th>
              <th>Departure Location</th>
              <th>Destination</th>
              <th>Booking Count</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myPackages.map((pkg, index) => (
              <MyPackageRow
                key={pkg._id}
                pkg={pkg}
                index={index}
                setMyPackages={setMyPackages}
                myPackages={myPackages}
              ></MyPackageRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyPackages;
