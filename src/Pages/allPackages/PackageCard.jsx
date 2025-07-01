import React, { useState } from "react";
import Button from "../../Components/common/Button";
import useAuth from "../../Hook/useAuth";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router";

const PackageCard = ({ singlePackage }) => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const { _id, tour_name,bookingCount,image } = singlePackage;
  const location = useLocation();
const navigate = useNavigate()
  const handleDetailsModal = () => {
   if(!user){
    return navigate('/login', {state:location.pathname})
   }

    setOpenModal(true);
  };

  return (
    <div>
      {/* package card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="cox's"
            className="w-full h-[200px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{singlePackage.tour_name} </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            <div className="badge badge-outline">booked:{bookingCount}</div>
          </div>
          <button
            className="btn btn-dash"
            onClick={() => {
              handleDetailsModal();
            }}
          >
            Details
          </button>
        </div>
      </div>
      {/*selected package modal */}
      {openModal && (
        <button onClick={document.getElementById(_id).showModal()}></button>
      )}

      <dialog id={_id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{tour_name}</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <NavLink to={`/add-booking/${_id}`}><Button>Book Now</Button></NavLink>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PackageCard;
