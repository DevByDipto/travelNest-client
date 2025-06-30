import React from 'react'
import useAuthSecure from '../../Hook/useAuthSecure';
import useSecureFetch from '../../Hook/useSecureFetch';

const MyBookings = () => {
    const {user,axiosSecure} = useAuthSecure()
const {data: selectedPackage,loading,} = useSecureFetch(`/my-packages?email=${user.email}&id=${id}`);
  return (
    <div>MyBookings</div>
  )
}

export default MyBookings