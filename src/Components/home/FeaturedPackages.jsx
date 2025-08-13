import React, { user, useState } from "react";
import usePackages from "../../Hook/usePackages";
import Loding from "../Loding";
import Button from "../common/Button";
import { NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../Hook/useAuth";
import PackageDetails from "../PackageDetails";
import PackageCard from "../../Pages/allPackages/PackageCard";
import { motion } from "framer-motion";
import AnimatedHeading from "../common/AnimatedHeading";
import AnimatedSubHeading from "../common/AnimatedSubHeading";


const FeaturedPackages = () => {
  const { packages, loading } = usePackages();
console.log(packages);

  if (loading) return <Loding></Loding>;

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // একটার পর একটা আসবে
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
 
  
  return (
    <div className="py-16 md:py-32 bg-gray-100 dark:bg-[#1D232A] md:px-5">
      <div className="container">
        
        




        <motion.div
        initial={{x:-100,opacity:0}}
        whileInView={{x:1,opacity:100}}
         transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          viewport={{ amount: 0.7,once: true }}
        >
        <h2 className="text-3xl md:text-4xl font-bold">Featured <span className="text-amber-500">Packages</span></h2>
        <p className="md:text-xl lg:text-lg font-medium text-gray-700 dark:text-[#ECF9FF] my-5">
          Take a look at our featured travel packages, chosen for their
          popularity, affordability, and <br />
          unforgettable experiences. Whether you’re seeking nature, culture, or
          adventure — <br />
          these tours offer something special for everyone.
        </p>
        </motion.div>
        {/* feature cards */}
        <motion.div 
        variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}

        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages?.slice(0, 3).map((singlePackage) => (
           <PackageCard 
           cardVariants={cardVariants}
           key={singlePackage._id} singlePackage={singlePackage}></PackageCard>
          ))}
        </motion.div>
        {/* feature cards */}
        <motion.div 
        variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}

        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {packages?.slice(3, 6).map((singlePackage) => (
           <PackageCard 
           cardVariants={cardVariants}
           key={singlePackage._id} singlePackage={singlePackage}></PackageCard>
          ))}
        </motion.div>


  {/* {packages?.slice(0, 6).map((singlePackage) => (
           <div key={singlePackage._id} className="w-[300px] h-[250px]">
  <img  src={singlePackage.image} alt="" />
</div>
          ))} */}






        {/* show all button */}
        <div className="mt-5 text-center">
          <NavLink to="/all-packages">
            <Button>Show All</Button>
          </NavLink>
        </div>
      </div>
      
    </div>
  );
};

export default FeaturedPackages;


//  <div key={singlePackage._id}>
//               {/* package card */}
//               <div className="bg-amber-50 shadow-md rounded-r-2xl flex items-center">
//                 <div className="">
//                   <figure>
//                     <img
//                       src={singlePackage.image}
//                       alt="cox's"
//                       className="w-full "
//                     />
//                   </figure>
//                 </div>
//                 <div className="card-body flex-1">
//                   <h2 className="card-title font-semibold">
//                     {singlePackage.tour_name}{" "}
//                   </h2>
//                   {/* guid info */}
//                   <div className="flex items-center justify-between py-2">
//                     <div className="flex items-center gap-2">
//                       <img
//                         className="rounded-full w-7"
//                         src={singlePackage.guide_photo}
//                         alt=""
//                       />
//                       <h4 className="text-lg">{singlePackage.guide_name}</h4>
//                     </div>
//                     <h4 className=" border-b border-gray-500 border-dashed pb-[2px]">
//                       {singlePackage.duration}
//                     </h4>
//                   </div>
//                   <div className="card-actions justify-end pb-2">
//                     <h4 className="badge badge-outline bg-purple-400 border-none">
//                       {singlePackage.departure_date}
//                     </h4>
//                     <h4 className="badge badge-outline  bg-purple-400 border-none">
//                       {singlePackage.price}
//                     </h4>
//                     <div className="badge badge-outline  bg-purple-400 border-none">
//                       booked:{singlePackage.bookingCount}
//                     </div>
//                   </div>
//                   <Button onClick={handleDetailsModal}>Details</Button>
//                 </div>
//               </div>

//  {/*selected package modal */}
//      <PackageDetails singlePackage={singlePackage} openModal={openModal} setOpenModal={setOpenModal}></PackageDetails>
//             </div>