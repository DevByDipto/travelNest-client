import React from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
const AddPackage = () => {
  const { user } = useAuth();
const {axiosSecure} = useAxiosSecure()

  const handleAddPackage = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageInfo = Object.fromEntries(formData.entries());

    packageInfo.price = parseFloat(packageInfo.price);
    packageInfo.bookingCount = 0;
    packageInfo.created_at = new Date().toISOString();

    axiosSecure.post(`/packages?email=${user.email}`,packageInfo).then(res=>{
      if(res.data.insertedId){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
      }
    })
    console.log(packageInfo);
  };

  return (
    <form onSubmit={handleAddPackage}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Add Tour</legend>

        {/* Tour Name */}
        <label className="label">Tour Name</label>
        <input
          type="text"
          name="tour_name"
          className="input"
          placeholder="Enter tour name"
        />

        {/* image */}
        <label className="label">Image URL</label>
        <input
          type="text"
          name="image"
          className="input"
          placeholder="Enter tour image URL"
        />

        {/* Duration */}
        <label className="label">Duration</label>
        <select defaultValue="" name="duration" className="select">
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
          className="input"
          placeholder="Departure location"
        />

        {/* destination */}
        <label className="label">Destination Location</label>
        <input
          type="text"
          name="destination"
          className="input"
          placeholder="Destination location"
        />

        {/* price */}
        <label className="label">Tour Package Price</label>
        <input
          type="number"
          name="price"
          className="input"
          placeholder="Enter price in BDT"
        />

        {/* departure_date */}
        <label className="label">Departure Date</label>
        <label className="input">
          <input type="date" name="departure_date" />
        </label>

        {/* package_details */}
        <label className="label">Package Details</label>
        <input
          type="text"
          name="package_details"
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
          className="input"
          placeholder="Contact number"
        />
      </fieldset>

      <input className="btn btn-primary" type="submit" value="submit" />
    </form>
  );
};

export default AddPackage;
