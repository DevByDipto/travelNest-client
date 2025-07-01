import React, { useState } from 'react'
import Button from '../../Components/common/Button'
import useAuthSecure from '../../Hook/useAuthSecure'
import toast from 'react-hot-toast'

const MyBookingRow = ({bookedToure,index}) => {
    const {_id,tour_name} = bookedToure
const [bookingStatus,setbookingStatus] =useState(bookedToure.status)
const {user,axiosSecure} = useAuthSecure()
const handleConfirmBooking=()=>{
    axiosSecure.patch(`/booking/${_id}?email=${user.email}`,{status:"completed"}).then(res=>{
        if(res.data.modifiedCount){
            setbookingStatus('completed')
            toast.success("Booking confirmed for your selected tour package.")
        }
    }
    )
}

  return (
     <tr>
        <th>{index+1}</th>
        <td>{tour_name}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td onClick={handleConfirmBooking}>{
           bookingStatus  == "pending" ? <Button>Confirm</Button> : "confirmed"
            }</td>
      </tr>
  )
}

export default MyBookingRow