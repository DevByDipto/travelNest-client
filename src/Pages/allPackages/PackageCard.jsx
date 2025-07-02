import React, { useState } from "react";
import Button from "../../Components/common/Button";
import useAuth from "../../Hook/useAuth";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";
import PackageDetails from "../../Components/PackageDetails";

const PackageCard = ({ singlePackage }) => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const { _id, bookingCount, image, guide_photo, guide_name } =
    singlePackage;
  const location = useLocation();
  const navigate = useNavigate();

 const handleDetailsModal = () => {
    if (!user) {
      return navigate("/login", { state: location.pathname });
    }

    setOpenModal(true);
  };

  return (
    <div>
      {/* package card */}
      <div className="bg-amber-50 shadow-md rounded-2xl">
        <figure>
          <img
            src={image}
            alt="cox's"
            className="w-full h-[200px] rounded-t-2xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-semibold">{singlePackage.tour_name} </h2>
          {/* guid info */}
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
<img className="rounded-full w-7" src={guide_photo} alt="" />
            <h4 className="text-lg">{guide_name}</h4>
            </div>
                        <h4 className=" border-b border-gray-500 border-dashed pb-[2px]">{singlePackage.duration}</h4>
          </div>
          <div className="card-actions justify-end pb-2">
            <h4 className="badge badge-outline bg-purple-400 border-none">
              {singlePackage.departure_date}
            </h4>
            <h4 className="badge badge-outline  bg-purple-400 border-none">{singlePackage.price}</h4>
            <div className="badge badge-outline  bg-purple-400 border-none">booked:{bookingCount}</div>
          </div>
          <Button
                      onClick={() => {
              handleDetailsModal();
            }}
          >
            Details
          </Button>
                  </div>
      </div>
      {/*selected package modal */}
     <PackageDetails singlePackage={singlePackage} openModal={openModal} setOpenModal={setOpenModal}></PackageDetails>
    </div>
  );
};

export default PackageCard;
