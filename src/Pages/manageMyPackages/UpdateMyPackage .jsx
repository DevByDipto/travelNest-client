import React, { useEffect, useState } from 'react'
import useAuthSecure from '../../Hook/useAuthSecure'
import { useParams } from 'react-router';

const UpdateMyPackage  = () => {
  const {user,axiosSecure} = useAuthSecure()
      const [myPackage, setMyPackage] = useState([]);
const {id} = useParams()
console.log(id);

 useEffect(() => {
    axiosSecure
      .put(`/my-package/${id}?email=${user.email}`)
      .then(res => setMyPackage(res.data))
  }, [user?.email, axiosSecure,id]);
  console.log(myPackage);
  
  return (
    <div>UpdateMyPackage </div>
  )
}

export default UpdateMyPackage 