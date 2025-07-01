import React from 'react'
import useAuthSecure from '../../Hook/useAuthSecure';
import useSecureFetch from '../../Hook/useSecureFetch';
import Loding from '../../Components/Loding'
import MyBookingRow from './MyBookingRow';
const MyBookings = () => {
    const {user} = useAuthSecure()
const {data: myBookedTours,loading,} = useSecureFetch(`/bookings?email=${user.email}`);
if(loading) return <Loding></Loding>
console.log(myBookedTours);

  return (
    <div>
      <h2>MyBookings</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
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