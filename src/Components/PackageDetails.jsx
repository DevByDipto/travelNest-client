import React from "react";
import { NavLink } from "react-router";
import Button from "./common/Button";

const PackageDetails = ({ singlePackage, openModal, setOpenModal }) => {
  const {
    _id,
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
  } = singlePackage;
  return (
    <div>
      {" "}
      {openModal && (
        <button
          onClick={document.getElementById(singlePackage._id).showModal()}
        ></button>
      )}
      <dialog id={singlePackage._id} className="modal">
        <div className="modal-box ">
          {/* package details */}
          <div className=" shadow-md rounded-2xl">
            <figure>
              <img
                src={image}
                alt="cox's"
                className="w-full h-[200px] rounded-t-2xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-semibold">
                {singlePackage.tour_name}
              </h2>
              <p className="">{package_details}</p>
              {/* guid info */}
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <img className="rounded-full w-10" src={guide_photo} alt="" />
                  <div>
                    <h4 className="text-lg">{guide_name}</h4>
                    {/* <h4 className="text-sm text-gray-500">
                      {guide_contact_no}
                    </h4> */}
                  </div>
                </div>
                <h4 className=" border-b text-gray-500 border-gray-500 border-dashed pb-[2px]">
                  Contact no: {guide_contact_no}
                </h4>
              </div>
              {/* tour map */}
              <div className="flex items-center justify-center mt-3 mb-6">
                <h4 className="p-1 rounded-lg  bg-yellow-400 border-none">
                  {departure_location}
                </h4>
                <span className="text-lg inline">🗺️➡️🏖️</span>
                <h4 className="p-1 rounded-lg bg-green-400 border-none">
                  {destination}
                </h4>
              </div>

              <div className="card-actions justify-between pb-2">
                <div className="flex flex-col gap-2">

                <h4 className="badge badge-outline bg-purple-400 border-none">
                  {departure_date}
                </h4>
                <h4 className="badge badge-outline  bg-purple-400 border-none">
                  Price:{price}
                </h4>
                </div>
                <div className="flex flex-col gap-2">
                <h4 className="badge badge-outline  bg-purple-400 border-none">
                  {duration}
                </h4>
                <p className="badge badge-outline  bg-purple-400 border-none">
                  booked:{bookingCount}
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-action flex justify-between">
            {/* book now btn */}
            <div>
              <NavLink to={`/add-booking/${singlePackage._id}`}>
                <Button>Book Now</Button>
              </NavLink>
            </div>
            {/* modal close btn*/}
            <form method="dialog">
              <button className="btn" onClick={() => setOpenModal(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PackageDetails;
