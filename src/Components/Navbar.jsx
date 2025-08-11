import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaUserTie } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import Loding from "./Loding";
import ThemChange from "./ThemeChange";
import Button from "./common/Button";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  // const navigate = useNavigate();
  // console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut();
    toast.success("Logout successfull");
  };

  return (
    <nav className="bg-gray-100 dark:bg-[#1D232A] border-b border-gray-300">
      <div className="navbar container flex justify-between pl-0  md:px-10">
        <div className="navbar-start  lg:w-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost pl-0 lg:hidden"
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
            {/* for mobile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {user ? (
                <>
                  <div className="flex items-center gap-5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                    <ThemChange></ThemChange>
                  </div>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/all-packages">All Packages</NavLink>
                  <NavLink to="/about-us">About Us</NavLink>
                  <NavLink to="/my-bookings">My Bookings</NavLink>
                  <NavLink to="/add-package">Add Package</NavLink>
                  <NavLink to="/manage-my-packages">Manage My Packages</NavLink>
                  <button className="btn border py-1" onClick={handleLogOut}>
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/all-packages">All Packages</NavLink>
                  <NavLink to="/about-us">About Us</NavLink>
                  <NavLink to="/my-bookings">My Bookings</NavLink>
                  <ThemChange></ThemChange>
                  <NavLink to="/login">
                    <button className="btn border py-1">Log In </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button className="btn border py-1">Registration</button>
                  </NavLink>
                </>
              )}
            </ul>
          </div>
{/* logo */}
          <div className="flex gap-3 items-center">
            <p className="text-primary text-2xl md:text-4xl">🌍</p>
            <h2 className="text-2xl md:text-4xl font-medium text-amber-500">
              Travel<span className="text-black dark:text-white ">Nest</span>
            </h2>
          </div>
        </div>

        <div className="navbar-end hidden lg:flex lg:w-0 flex-1">
          {/* for leptop */}
          <ul className="menu menu-horizontal px-1">
            <div className="flex gap-5 items-center font-medium text-lg ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/all-packages">All Packages</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              {user ? (
                <>
                  <NavLink to="/my-bookings">My Bookings</NavLink>
                  <ThemChange></ThemChange>
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
                          <Button className="mt-2" onClick={handleLogOut}>
                            Log Out
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex gap-5">
                  <NavLink to="/login">
                    <Button className="px-6">Log In </Button>
                  </NavLink>
                  <NavLink to="/register">
                    <Button className="px-6">Registration</Button>
                  </NavLink>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
