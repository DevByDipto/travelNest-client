import React from 'react'
import useAuthSecure from '../../Hook/useAuthSecure';
import useSecureFetch from '../../Hook/useSecureFetch';
import Loding from '../../Components/Loding'
import MyBookingRow from './MyBookingRow';
import SlideInLeftToRight from '../../Components/common/SlideInLeftToRight';
import CardFadeInUpAnimation from '../../Components/common/CardFadeInUpAnimation';
const MyBookings = () => {
    const {user} = useAuthSecure()
const {data: myBookedTours,loading,} = useSecureFetch(`/bookings?email=${user.email}`);
if(loading) return <Loding></Loding>
// console.log(myBookedTours);

  return (
    <div className='container py-16 md:pb-32 md:pt-24'>
      <SlideInLeftToRight>
<div className=' pt-16 pb-10  '>
      <h2  className=" text-3xl md:text-4xl font-bold rounded-full inline-block">My <span className='text-amber-500'>Bookings</span></h2>
       <p className=" md:text-xl lg:text-lg font-medium text-gray-700 dark:text-[#ECF9FF] pt-5">View all your tour bookings in one place. You can track booking status, check package details,<br /> and manage your upcoming trips from here.</p>
   </div>
      </SlideInLeftToRight>
      <CardFadeInUpAnimation duration={1} y={100}>
  <div className="overflow-x-auto">
    {
      myBookedTours.length !== 0 ? <table className="table border border-gray-100 dark:border-[#242a31]">
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
  </table> : <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold text-amber-500 bg-amber-100 border-2 border-amber-500 rounded-lg p-4 mt-8">
              You have not add any packages yet.
            </h3>
    }
  
</div>
      </CardFadeInUpAnimation>
    
    </div>
  )
}

export default MyBookings