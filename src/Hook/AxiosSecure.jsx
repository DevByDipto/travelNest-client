import axios from 'axios'
import React from 'react'
import useAuth from './useAuth'
const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})
const AxiosSecure = () => {
    const user = useAuth()
    console.log(user?.accessToken);
    
    axiosSecure.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })
  return axiosSecure
}

export default AxiosSecure