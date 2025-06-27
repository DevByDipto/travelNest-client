import React, { useContext, useRef, useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthContext";
import GoogleSignIn from "./GoogleSignin";

const Login = () => {
  const { login, forgatePass } = useContext(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

  

    login(email, password)
      .then(() => {
      toast.success('Login successful')
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
       toast.error(err.message)
      });
  };

  const handleForgatePass = () => {
    const email = emailRef.current.value;
    forgatePass(email)
      .then(() => {
        toast.success("please check you email")
        window.location.href = "https://mail.google.com";
      })
      .catch((err) => {
        toast.error(err.message)
      });
  };

  return (
    <div className=" flex items-center justify-center min-h-screen px-6 md:px-0">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <h1 className="text-3xl font-bold text-center pt-3">Login now!</h1>

        <div className="card-body">
          <form className="form" onSubmit={handleLogin}>
            {/* email */}
            <label className="label">Email</label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <div>
              <a target="_blank"  onClick={handleForgatePass} className="link link-hover">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>
            <GoogleSignIn></GoogleSignIn>
            <p className="mt-2">
              Dont’t Have An Account ?
              <span
                onClick={() => navigate("/register", { state: location.state })}
                className="text-secondary cursor-pointer hover:underline"
              >
                Creat an Account
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;