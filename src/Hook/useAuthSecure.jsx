import React from 'react'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAuthSecure = () => {
    const { user } = useAuth();
const {axiosSecure} = useAxiosSecure()
  return {user,axiosSecure}
}

export default useAuthSecure