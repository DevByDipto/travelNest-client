import React from 'react'
import useAuthSecure from '../../Hook/useAuthSecure';
import useSecureFetch from '../../Hook/useSecureFetch';
import Loding from '../../Components/Loding'
import MyBookingRow from './MyBookingRow';
const MyBookings = () => {
    const {user} = useAuthSecure()
const {data: myBookedTours,loading,} = useSecureFetch(`/bookings?email=${user.email}`);
if(loading) return <Loding></Loding>
// console.log(myBookedTours);

  return (
    <div className='container py-16 md:pb-32 md:pt-24'>
      <div className=' pt-16 pb-10  '>
      <h2  className=" text-3xl md:text-4xl font-bold rounded-full inline-block">My <span className='text-amber-500'>Bookings</span></h2>
       <p className=" md:text-xl lg:text-lg font-medium text-gray-700 dark:text-[#ECF9FF] pt-5">View all your tour bookings in one place. You can track booking status, check package details,<br /> and manage your upcoming trips from here.</p>
   </div>
      <div className="overflow-x-auto">
  <table className="table border border-gray-100 dark:border-[#242a31]">
    {/* head */}
    <thead>
      <tr className='bg-gray-400 dark:bg-[#242a31]'>
        <th></th>
        <th>Package Name</th>
        <th>Guide Name</th>
        <th>Guide Contact</th>
        <th>Departure Date</th>
        <th>Departure location</th>
        <th>Destination</th>
        <th>Special Note</th>
        <th>Status</th>
             </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{myBookedTours.map((bookedToure,index)=><MyBookingRow key={bookedToure._id} bookedToure={bookedToure} index={index}></MyBookingRow>)}
     
    
    </tbody>
  </table>
</div>
    </div>
  )
}

export default MyBookings