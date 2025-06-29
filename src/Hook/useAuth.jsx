import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const useAuth = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    
  return user
}

export default useAuth