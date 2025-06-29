import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaUserTie } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import Loding from "./Loding";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut();
    toast.success("Logout successfull");
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {user ? (
                <>
                  <div>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/all-packages">All Packages</NavLink>
                  <NavLink to="/aboutUs">About Us</NavLink>
                  <NavLink to="/myBookings">My Bookings</NavLink>
                  <NavLink to="/myBookings">My Bookings</NavLink>
                  <NavLink to="/add-package">Add Package</NavLink>
                  <NavLink to="/manage-my-packages">Manage My Packages</NavLink>
                  <button
                    className="btn border py-1"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/all-packages">All Packages</NavLink>
                  <NavLink to="/aboutUs">About Us</NavLink>
                  <NavLink to="/myBookings">My Bookings</NavLink>
                  <NavLink to="/login">
                    <button className="btn border py-1">Log In </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button className="btn border py-1">
                      Registration
                    </button>
                  </NavLink>
                </>
              )}
            </ul>
          </div>

          <div className="flex gap-3 items-center">
            <p className="text-primary text-2xl md:text-4xl">🌍</p>
            <h2 className="text-2xl md:text-4xl font-medium text-primary">
              Travel<span className="text-black">Nest</span>
            </h2>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <div className="flex gap-5 items-center font-medium text-lg ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-packages">All Packages</NavLink>
              <NavLink to="/aboutUs">About Us</NavLink>
              {user ? (
                <>
                  <NavLink to="/myBookings">My Bookings</NavLink>

                  <div>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" m-1">
                        {" "}
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        <li>
                          <NavLink to="/add-package">Add Package</NavLink>
                        </li>
                        <li>
                          <NavLink to="/manage-my-packages">
                            Manage My Packages
                          </NavLink>
                        </li>
                        <li>
                          <button
                            className="btn btn-primary mt-2"
                            onClick={handleLogOut}
                          >
                            Log Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex gap-5">
                  <NavLink to="/login">
                    <button className="btn btn-primary px-6">Log In </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button className="btn btn-primary px-6">
                      Registration
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navber;
