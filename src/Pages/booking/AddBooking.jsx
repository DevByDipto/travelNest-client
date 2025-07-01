import React from 'react'
import useAuth from '../../Hook/useAuth'
import useAuthSecure from '../../Hook/useAuthSecure'
import { useNavigate, useParams } from 'react-router'
import useSecureFetch from '../../Hook/useSecureFetch'
import Loding from '../../Components/Loding'
import Swal from 'sweetalert2'

const AddBooking = () => {
  const {id} = useParams()
const {user,axiosSecure} = useAuthSecure()
const {data: selectedPackage,loading,} = useSecureFetch(`/my-packages?email=${user.email}&id=${id}`);
const navigate = useNavigate()
  if (loading) return <Loding></Loding>;
console.log(selectedPackage);

  const handleBookingTour=(e)=>{
 e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageInfo = Object.fromEntries(formData.entries());
    packageInfo.user_email = user.email
    packageInfo.status = "pending"

    axiosSecure.post(`/bookings?email=${user.email}`,packageInfo).then(res=>{if(res.data.insertedId){
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
navigate('/my-bookings')
    }})
  }
  return (
    <div>
      
 <form onSubmit={handleBookingTour}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Reserve Your Tour - TravelNest</legend>

        {/* Tour Name */}
        <label className="label">Tour Name</label>
        <input
          type="text"
          name="tour_name"
          defaultValue={selectedPackage.tour_name}
          className="input"
          placeholder="Enter tour name"
          readOnly
        />

        {/* price */}
        <label className="label">Tour Package Price</label>
        <input
          type="number"
          name="price"
             defaultValue={selectedPackage.price}
          className="input"
          placeholder="Enter price in BDT"
          readOnly
        />

      

        {/* guide_name */}
        <label className="label">Guide Name</label>
        <input
          type="text"
          name="guide_name"
          defaultValue={selectedPackage.guide_name}
          className="input"
          placeholder="Guide name"
          readOnly
        />

        {/* guide_email */}
        <label className="label">Guide Email</label>
        <input
          type="text"
          name="guide_email"
          defaultValue={selectedPackage.guide_email}
          className="input"
          placeholder="Guide email"
          readOnly
        />

        {/* Booking_Date */}
        <label className="label">Booking Date</label>
        <input
          type="text"
          name="booking_date"
          className="input"
          placeholder="Booking date"
          defaultValue={new Date().toISOString()}
          readOnly
        />

        {/* Special Note */}
        <label className="label">Special Note</label>
         <textarea className="textarea h-24" placeholder="Bio" name='spacial_note'></textarea>

   
      </fieldset>

      <input className="btn btn-primary" type="submit" value="Book Now" />
    </form>
    </div>
  )
}

export default AddBooking