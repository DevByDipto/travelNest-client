import React, { use } from 'react'
import { Navigate, useLocation } from 'react-router'
import Loading from '../Components/Loding'
import { AuthContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
  
    const {user,loding} = use(AuthContext)
    const location = useLocation()
    if(loding){
      return <Loading></Loading>
    }
  
if(!user){
  return <Navigate state={location.pathname} to='/login'></Navigate>
}
  return children
}

export default PrivateRoute