import React, { useEffect, useState } from 'react'
import useAuthSecure from '../../Hook/useAuthSecure'
import { useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';
import useSecureFetch from '../../Hook/useSecureFetch';
import Loding from '../../Components/Loding';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const UpdateMyPackage  = () => {
    const {id} = useParams()
const {user,axiosSecure} = useAuthSecure()
    const {
    data: myPackage,
    loading,
  } = useSecureFetch(`/my-packages?email=${user.email}&id=${id}`);
  if (loading) return <Loding></Loding>;



//   const {user,axiosSecure} = useAuthSecure()
//       const [myPackage, setMyPackage] = useState();
// const {id} = useParams()

//  useEffect(() => {
//     axiosSecure
//       .get(`/my-packages?email=${user.email}&id=${id}`)
//       .then(res => setMyPackage(res.data))
//   }, [user?.email, axiosSecure,id]);

 const handleUpdatePackage=()=>{
 axiosSecure.put(`/my-packages/${id}?email=${user.email}`)
       .then(res => console.log(res.data))
  }
  console.log(myPackage);
  
  return (
    <div>
         <form onSubmit={handleUpdatePackage}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Add Tour</legend>

        {/* Tour Name */}
        <label className="label">Tour Name</label>
        <input
          type="text"
          name="tour_name"
          defaultValue={myPackage?.tour_name}
          className="input"
          placeholder="Enter tour name"
        />

        {/* image */}
        <label className="label">Image URL</label>
        <input
          type="text"
          name="image"
             defaultValue={myPackage?.image}
          className="input"
          placeholder="Enter tour image URL"
        />

        {/* Duration */}
        <label className="label">Duration</label>
        <select defaultValue={myPackage?.duration} name="duration" className="select">
          <option disabled value="">
            Select Duration
          </option>
          <option>3 Days 2 Nights</option>
          <option>2 Days 1 Nights</option>
          <option>1 Day</option>
        </select>

        {/* departure_location */}
        <label className="label">Departure Location</label>
        <input
          type="text"
          name="departure_location"
             defaultValue={myPackage?.departure_location}
          className="input"
          placeholder="Departure location"
        />

        {/* destination */}
        <label className="label">Destination Location</label>
        <input
          type="text"
          name="destination"
             defaultValue={myPackage?.destination}
          className="input"
          placeholder="Destination location"
        />

        {/* price */}
        <label className="label">Tour Package Price</label>
        <input
          type="number"
          name="price"
             defaultValue={myPackage?.price}
          className="input"
          placeholder="Enter price in BDT"
        />

        {/* departure_date */}
        <label className="label">Departure Date</label>
        <label className="input">
          <input type="date" name="departure_date" defaultValue={myPackage?.departure_date}/>
        </label>

        {/* package_details */}
        <label className="label">Package Details</label>
        <input
          type="text"
          name="package_details"
             defaultValue={myPackage?.package_details}
          className="input"
          placeholder="Write details about the tour"
        />

        {/* guide_name */}
        <label className="label">Guide Name</label>
        <input
          type="text"
          name="guide_name"
          defaultValue={user.displayName}
          className="input"
          placeholder="Guide name"
          readOnly
        />

        {/* guide_email */}
        <label className="label">Guide Email</label>
        <input
          type="text"
          name="guide_email"
          defaultValue={user.email}
          className="input"
          placeholder="Guide email"
          readOnly
        />

        {/* guide_photo */}
        <label className="label">Guide Photo</label>
        <input
          type="text"
          name="guide_photo"
          defaultValue={user.photoURL}
          className="input"
          placeholder="Guide photo URL"
          readOnly
        />

        {/* guide_contact_no */}
        <label className="label">Guide Contact No</label>
        <input
          type="text"
          name="guide_contact_no"
             defaultValue={myPackage?.guide_contact_no}
          className="input"
          placeholder="Contact number"
        />
      </fieldset>

      <input className="btn btn-primary" type="submit" value="Update" />
    </form>
        
         </div>
  )
}

export default UpdateMyPackage 