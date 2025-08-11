import React from 'react'
import useAuth from '../../Hook/useAuth'
import useAuthSecure from '../../Hook/useAuthSecure'
import { useNavigate, useParams } from 'react-router'
import useSecureFetch from '../../Hook/useSecureFetch'
import Loding from '../../Components/Loding'
import Swal from 'sweetalert2'
import Button from '../../Components/common/Button'
import addToureanimation from '../../assets/addTour2.json'
import Lottie from 'lottie-react'
const AddBooking = () => {
  const {id} = useParams()
const {user,axiosSecure} = useAuthSecure()
const {data: selectedPackage,loading,} = useSecureFetch(`/my-packages?email=${user.email}&id=${id}`);
const navigate = useNavigate()
  if (loading) return <Loding></Loding>;
// console.log(selectedPackage);

  const handleBookingTour=(e)=>{
 e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageInfo = Object.fromEntries(formData.entries());
    packageInfo.user_email = user.email
    packageInfo.package_id = id
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
    <div className='bg-gradient-to-r from-amber-500 to-amber-400 min-h-screen py-5'>
      <h2 className=' text-3xl font-bold text-center pt-16 md:pt-28'>Reserve Your Tour - TravelNest</h2>
   
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center  px-6 md:px-0 gap-10 '>
      
 <form onSubmit={handleBookingTour}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box max-w-xl border p-4 grid grid-cols-1 md:grid-cols-2">
<div>


        {/* Tour Name */}
        <div>

        
        <label className="label">Tour Name</label>
        <input
          type="text"
          name="tour_name"
          defaultValue={selectedPackage.tour_name}
          className="input"
          placeholder="Enter tour name"
          readOnly
        />
</div>
        {/* price */}
        <div>

       
        <label className="label">Tour Package Price</label>
        <input
          type="number"
          name="price"
             defaultValue={selectedPackage.price}
          className="input"
          placeholder="Enter price in BDT"
          readOnly
        />
 </div>
      

        {/* guide_name */}
        <div>

        
        <label className="label">Guide Name</label>
        <input
          type="text"
          name="guide_name"
          defaultValue={selectedPackage.guide_name}
          className="input"
          placeholder="Guide name"
          readOnly
        />
</div>
        {/* guide_email */}
        <div>

        
        <label className="label">Guide Email</label>
        <input
          type="text"
          name="guide_email"
          defaultValue={selectedPackage.guide_email}
          className="input"
          placeholder="Guide email"
          readOnly
        />
        </div>
</div>
<div> 

        {/* Booking_Date */}
        <div>

       
        <label className="label">Booking Date</label>
        <input
          type="text"
          name="booking_date"
          className="input"
          placeholder="Booking date"
          defaultValue={new Date().toISOString()}
          readOnly
        />
 </div>
        {/* Special Note */}
        <div>    
        <label className="label">Special Note</label>
         <textarea className="textarea h-24" placeholder="Bio" name='special_note'></textarea>
  </div>
   </div>
   <Button className='md:col-span-2 mt-3'>  <input className="" type="submit" value="Book Now" /></Button>
      </fieldset>

    
    </form>
   {/* lootifile */}
          <div className="">
            <Lottie className='w-sm' animationData={addToureanimation} loop={true} />
          </div>
          {/* <div className="">
            <Lottie  animationData={addToureanimation} loop={true} />
          </div> */}
    </div>
     </div>
  )
}

export default AddBooking