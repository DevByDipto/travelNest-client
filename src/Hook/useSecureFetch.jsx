import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "./useAxiosSecure";

const useSecureFetch = (routeName) => {
  const {axiosSecure} = useAxiosSecure()
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    axiosSecure
      .get(`${routeName}`)
      .then((res) => setData(res.data))
    //   .catch((err) => toast.error(err.message))
      .finally(() => setLoding(false));
  }, [routeName,axiosSecure]);

  return { data,setData, loading };
};

export default useSecureFetch;