import React from "react";
import Swal from "sweetalert2";
import useAuthSecure from "../../Hook/useAuthSecure";
import Lottie from "lottie-react";
import addPackageAnimation from "../../assets/addPackageAnimation.json";
import Button from "../../Components/common/Button";
const AddPackage = () => {
  const { user, axiosSecure } = useAuthSecure();

  const handleAddPackage = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const packageInfo = Object.fromEntries(formData.entries());

    packageInfo.price = parseFloat(packageInfo.price);
    packageInfo.bookingCount = 0;
    packageInfo.created_at = new Date().toISOString();

    axiosSecure
      .post(`/packages?email=${user.email}`, packageInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(packageInfo);
  };

  return (
    <div className="bg-gradient-to-r from-amber-500 to-amber-400 pb-32 dark:bg-[#1D232A]">
      <div className="container">
        <div className="flex items-center justify-center py-10">
        <h2 className="text-4xl font-bold rounded-2xl py-3 w-2xl text-center ">
          Add Package
        </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row">
          <form className="form lg:w-[60%]" onSubmit={handleAddPackage}>
            <fieldset className="fieldset border-none shadow-2xl bg-white dark:bg-[#1D232A] rounded-box border p-4 grid grid-cols-2">
              {/* Tour Name */}
              <div>
                <label className="label dark:text-[#ECF9FF] text-black ">
                  Tour Name
                </label>
                <input
                  type="text"
                  name="tour_name"
                  className="input"
                  placeholder="Enter tour name"
                />
              </div>

              {/* image */}
              <div>
                <label className="label dark:text-[#ECF9FF] text-black">Image URL</label>
                <input
                  type="text"
                  name="image"
                  className="input"
                  placeholder="Enter tour image URL"
                />
              </div>


  {/* Duration */}
  <div>

 
        <label className="label dark:text-[#ECF9FF] text-black">Duration</label>
        <select defaultValue="" name="duration" className="select">
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
        <label className="label dark:text-[#ECF9FF] text-black">Departure Location</label>
        <input
          type="text"
          name="departure_location"
          className="input"
          placeholder="Departure location"
        />
</div>
        {/* destination */}
<div>
        <label className="label dark:text-[#ECF9FF] text-black">Destination Location</label>
        <input
          type="text"
          name="destination"
          className="input"
          placeholder="Destination location"
        />
</div>
        {/* price */}
        <div> 
        <label className="label dark:text-[#ECF9FF] text-black">Tour Package Price</label>
        <input
          type="number"
          name="price"
          className="input"
          placeholder="Enter price in BDT"
        />
</div>
                {/* departure_date */}
                <div>
        <label className="label dark:text-[#ECF9FF] text-black">Departure Date</label>
        <label className="input">
          <input type="date" name="departure_date" />
        </label>
 </div>
        {/* package_details */}
        <div>

       
        <label className="label dark:text-[#ECF9FF] text-black">Package Details</label>
        <input
          type="text"
          name="package_details"
          className="input"
          placeholder="Write details about the tour"
        />
 </div>
        {/* guide_name */}
        <div>

      
        <label className="label dark:text-[#ECF9FF] text-black">Guide Name</label>
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

       
        <label className="label dark:text-[#ECF9FF] text-black">Guide Email</label>
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

       
        <label className="label dark:text-[#ECF9FF] text-black">Guide Photo</label>
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

 
        <label className="label dark:text-[#ECF9FF] text-black">Guide Contact No</label>
        <input
          type="text"
          name="guide_contact_no"
          className="input"
          placeholder="Contact number"
        />
               </div>
<Button className='col-span-2 mt-3'> <input className="" type="submit" value="submit" /> </Button>
            </fieldset>
           
          </form>
          {/* lootifile */}
          <div className="lg:w-[40%]">
            <Lottie animationData={addPackageAnimation} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;





   
       

     

      

        

       

     