import React, { useEffect, useState } from 'react'
import useAuthSecure from '../../Hook/useAuthSecure'
import { useLocation, useNavigate, useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import useSecureFetch from '../../Hook/useSecureFetch';
import Loding from '../../Components/Loding';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';
import Button from '../../Components/common/Button';

const UpdateMyPackage  = () => {
    const {id} = useParams()
const {user,axiosSecure} = useAuthSecure()
const {data: myPackage,loading,} = useSecureFetch(`/my-packages?email=${user.email}&id=${id}`);
const navigate = useNavigate()
  if (loading) return <Loding></Loding>;

 const handleUpdatePackage=(e)=>{
     e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageInfo = Object.fromEntries(formData.entries());

    packageInfo.price = parseFloat(packageInfo.price);
    packageInfo.bookingCount = 0;
    packageInfo.created_at = new Date().toISOString();
    // console.log(packageInfo);
    
 axiosSecure.put(`/tour-packages/${id}?email=${user.email}`,packageInfo)
       .then(res =>{
        if(res.data.modifiedCount){
            Swal.fire({
  position: "top",
  icon: "success",
  title: "Package updated successfully",
  showConfirmButton: false,
  timer: 1500
});
navigate('/manage-my-packages')
        }
       })
  }
//   console.log(myPackage);
  
  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-400 pb-32 dark:bg-[#1D232A]">

    
    <div className="container">
       <div className="flex items-center justify-center py-10">
        <h2 className="text-4xl font-bold rounded-2xl py-3 w-2xl text-center ">
          Update Tour Package
        </h2>
        </div>
         <form className='form lg:w-[60%] mx-auto' onSubmit={handleUpdatePackage}>
      <fieldset className="fieldset border-none shadow-2xl bg-white dark:bg-[#1D232A] rounded-box border p-4 grid grid-cols-2">

        {/* Tour Name */}
        <div>

    
        <label className="label">Tour Name</label>
        <input
          type="text"
          name="tour_name"
          defaultValue={myPackage?.tour_name}
          className="input"
          placeholder="Enter tour name"
        />
    </div>

        {/* image */}
        <div>

      
        <label className="label">Image URL</label>
        <input
          type="text"
          name="image"
             defaultValue={myPackage?.image}
          className="input"
          placeholder="Enter tour image URL"
        />
          </div>

        {/* Duration */}
        <div>

        
        <label className="label">Duration</label>
        <select defaultValue={myPackage?.duration} name="duration" className="select">
          <option disabled value="">
            Select Duration
          </option>
          <option>3 Days 2 Nights</option>
          <option>2 Days 1 Nights</option>
          <option>1 Day</option>
        </select>
</div>
        {/* departure_location */}
        <div>

     
        <label className="label">Departure Location</label>
        <input
          type="text"
          name="departure_location"
             defaultValue={myPackage?.departure_location}
          className="input"
          placeholder="Departure location"
        />
   </div>
        {/* destination */}
        <div>

       
        <label className="label">Destination Location</label>
        <input
          type="text"
          name="destination"
             defaultValue={myPackage?.destination}
          className="input"
          placeholder="Destination location"
        />
 </div>
        {/* price */}
        <div>

       
        <label className="label">Tour Package Price</label>
        <input
          type="number"
          name="price"
             defaultValue={myPackage?.price}
          className="input"
          placeholder="Enter price in BDT"
        />
 </div>
        {/* departure_date */}
        <div>

       
        <label className="label">Departure Date</label>
        <label className="input">
          <input type="date" name="departure_date" defaultValue={myPackage?.departure_date}/>
        </label>
 </div>
        {/* package_details */}
        <div>

    
        <label className="label">Package Details</label>
        <input
          type="text"
          name="package_details"
             defaultValue={myPackage?.package_details}
          className="input"
          placeholder="Write details about the tour"
        />
    </div>
        {/* guide_name */}
        <div>

       
        <label className="label">Guide Name</label>
        <input
          type="text"
          name="guide_name"
          defaultValue={user.displayName}
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
          defaultValue={user.email}
          className="input"
          placeholder="Guide email"
          readOnly
        />
</div>
        {/* guide_photo */}
        <div>

       
        <label className="label">Guide Photo</label>
        <input
          type="text"
          name="guide_photo"
          defaultValue={user.photoURL}
          className="input"
          placeholder="Guide photo URL"
          readOnly
        />
 </div>
        {/* guide_contact_no */}
        <div>

      
        <label className="label">Guide Contact No</label>
        <input
          type="text"
          name="guide_contact_no"
             defaultValue={myPackage?.guide_contact_no}
          className="input"
          placeholder="Contact number"
        />
        
 </div>
 <Button className='col-span-2 mt-2'><input className="" type="submit" value="Update" /></Button>
      </fieldset>

    </form>
        </div>
         </div>
  )
}

export default UpdateMyPackage 