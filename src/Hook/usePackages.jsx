import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loding from "../Components/Loding";
import { useLocation } from "react-router";

const usePackages = () => {
  // const location = useLocation()
  const [packages, setPackages] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
        axios
      .get('http://localhost:3000/packages')
      .then((res) => setPackages(res.data))
      .catch((err) => toast.error(err.message))
      .finally(() => setLoding(false));
  }, []);

  return { packages,setPackages, loading };
};

export default usePackages;
