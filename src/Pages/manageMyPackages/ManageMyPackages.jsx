import React, { use, useEffect, useState } from "react";
import MyPackageRow from "./MyPackageRow";
import useAuthSecure from "../../Hook/useAuthSecure";
import useSecureFetch from "../../Hook/useSecureFetch";
import useAuth from "../../Hook/useAuth";
import Loding from "../../Components/Loding";

const ManageMyPackages = () => {
  const { user } = useAuth();
  const {
    data: myPackages,
    setData: setMyPackages,
    loading,
  } = useSecureFetch(`/my-packages?email=${user.email}`);
  if (loading) return <Loding></Loding>;

  // const {user,axiosSecure} = useAuthSecure()
  // const [myPackages, setMyPackages] = useState([]);

  //   useEffect(() => {
  //   axiosSecure
  //     .get(`/my-packages?email=${user.email}`)
  //     .then(res => setMyPackages(res.data))
  // }, [user?.email, axiosSecure]);

  return (
    <div>
      <h2>ManageMyPackages</h2>

      <div className="overflow-x-auto">
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
            {myPackages.map((pkg, index) => (
              <MyPackageRow
                key={pkg._id}
                pkg={pkg}
                index={index}
                setMyPackages={setMyPackages}
                myPackages={myPackages}
              ></MyPackageRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyPackages;
