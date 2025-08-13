import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaUserTie } from "react-icons/fa";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
import Loding from "./Loding";
import ThemChange from "./ThemeChange";
import Button from "./common/Button";
import { motion } from "framer-motion";
const Navber = () => {
  const { user, logOut,loding } = useContext(AuthContext);
 const [show, setShow] = useState(true); // Navbar visible/hidden state
  const [lastScrollY, setLastScrollY] = useState(0);

  // if(loding){
  //   return <p>loading...</p>
  // }

 

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
// console.log(window.addEventListener("scroll",controlNavbar));


      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);


  // const navigate = useNavigate();
  // console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut();
    toast.success("Logout successfull");
  };


let userDependedNavItems
  if(user){
    userDependedNavItems = <>
                  <NavLink to="/my-bookings">My Bookings</NavLink>
                  
                  <ThemChange></ThemChange>
                  <div>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" ">

                      <div className="relative top-[2px] left-0">
 <img
                          className="h-8 w-8 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                       
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
  }else{
userDependedNavItems = <div className="flex gap-5">
                  <Link to="/login">
                    <Button className="px-6">Log In </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="px-6">Registration</Button>
                  </Link>
                </div>
  }


   const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        // console.log(window.scrollY);
        
        setShow(false);
      } else {
        // Scroll Up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  return (
    <nav
        className={`fixed top-0 left-0 right-0 bg-gray-100 dark:bg-[#1D232A] shadow-md transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}>
         {/* className="bg-gray-100 dark:bg-[#1D232A] border-b border-gray-300  md:px-5" */}
      <motion.div
      initial={{ y: -100, opacity: 0 }} // শুরুতে উপরে + transparent
      animate={{ y: 0, opacity: 1 }}    // নিচে এসে visible হবে
      transition={{
        duration: 1.2,                   // সময় লাগবে
        ease: "easeIn"
         }}
               viewport={{ once: true }}

      className="navbar container flex justify-between pl-0 ">
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
                                    <NavLink to="/achievement">Achievement</NavLink>

                  <p className="" onClick={handleLogOut}>
                    Log Out
                  </p>
                </>
              ) : (
                <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/all-packages">All Packages</NavLink>
                  <NavLink to="/about-us">About Us</NavLink>
                  <NavLink to="/my-bookings">My Bookings</NavLink>
                                    <NavLink to="/achievement">Achievement</NavLink>

                  <Link to="/login">
                    <p className=" ">Log In </p>
                  </Link>
                  <Link to="/register">
                    <p className=" ">Registration</p>
                  </Link>
                                    <ThemChange></ThemChange>
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
                                <NavLink to="/achievement">Achievement</NavLink>
{userDependedNavItems}
              {/* {user ? (
               
              ) : (
                
              )} */}
            </div>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navber;
