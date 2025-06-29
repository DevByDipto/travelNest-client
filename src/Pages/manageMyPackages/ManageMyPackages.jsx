import React from 'react'
import useAxiosSecure from '../../Hook/useAxiosSecure'
import useAuth from '../../Hook/useAuth'

const ManageMyPackages = () => {
    const {user} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    axiosSecure.get(`/my-Packages?email=${user.email}`).then(res=>console.log(res.data)
    )
  return (
    <div>ManageMyPackages</div>
  )
}

export default ManageMyPackages