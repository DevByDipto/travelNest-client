import React, { useEffect, useState } from 'react'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import useAuth from '../../Hook/useAuth'
import MyPackageRow from './MyPackageRow'

const ManageMyPackages = () => {
    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
      const [myPackages, setMyPackages] = useState([]);


    useEffect(() => {
    if (!user?.email) return;
    axiosSecure
      .get(`/my-packages?email=${user.email}`)
      .then(res => setMyPackages(res.data))
  }, [user?.email, axiosSecure]);
  return (
    <div>
        <h2>ManageMyPackages</h2>
       
            <div  className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {myPackages.map((packageData,index)=><MyPackageRow key={packageData._id} packageData={packageData} index={index}></MyPackageRow>)}
     
     
    </tbody>
  </table>
</div>
         
        
    </div>
  )
}

export default ManageMyPackages