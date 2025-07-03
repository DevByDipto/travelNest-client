import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`
})
const useAxiosSecure = () => {
const token = localStorage.getItem('token')
    // request interceptors
    axiosSecure.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${token}`
        return config
    })


axiosSecure.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error( error.response?.data || error.message);
    return Promise.reject(error);
  }
);


  return {axiosSecure}
}

export default useAxiosSecure