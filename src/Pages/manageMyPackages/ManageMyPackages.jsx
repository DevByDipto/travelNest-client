import React, { use, useEffect, useState } from "react";
import MyPackageRow from "./MyPackageRow";
import useAuthSecure from "../../Hook/useAuthSecure";
import useSecureFetch from "../../Hook/useSecureFetch";
import useAuth from "../../Hook/useAuth";
import Loding from "../../Components/Loding";
import { useLocation, useNavigate, useNavigation } from "react-router";
import SlideInLeftToRight from "../../Components/common/SlideInLeftToRight";
import CardFadeInUpAnimation from "../../Components/common/CardFadeInUpAnimation";

const ManageMyPackages = () => {
  const { user } = useAuth();
  const {
    data: myPackages,
    setData: setMyPackages,
    loading,
  } = useSecureFetch(`/my-packages?email=${user.email}`);
  const navigate = useLocation();
  navigate.state = navigate.pathname;
  // console.log(navigate);

  if (loading) return <Loding></Loding>;

  return (
    <div className="container pb-32">
      <SlideInLeftToRight>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold rounded-full inline-block pt-24 pb-6  md:pt-32 ">
          Manage <span className="text-amber-500">My Packages</span>
        </h2>
        <p className="md:text-xl lg:text-lg font-medium text-gray-700 dark:text-[#ECF9FF]  md:pb-10">
          Here you can view, update, or delete your booked tour packages. Keep
          your details up-to-date <br /> and manage all your travel plans
          effortlessly in one place.
        </p>
      </SlideInLeftToRight>

      <CardFadeInUpAnimation duration={1} y={100}>
        <div className="overflow-x-auto">
          {console.log(myPackages.length)}
          {myPackages.length !== 0 ? (
            <table className="table border border-gray-100 dark:border-[#242a31]">
              {/* head */}
              <thead>
                <tr className="bg-gray-400 dark:bg-[#242a31]">
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
          ) : (
            <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-amber-500 bg-amber-100 border-2 border-amber-500 rounded-lg p-4 mt-8">
              You have not add any packages yet.
            </h3>
          )}
        </div>
      </CardFadeInUpAnimation>
    </div>
  );
};

export default ManageMyPackages;
