import React, { useContext, useRef, useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import GoogleSignIn from "./GoogleSignin";
import { AuthContext } from "../../Context/AuthContext";
import Button from "../../Components/common/Button";
import Lottie from "lottie-react";
import logingAnimation from '../../assets/loginAnimation2.json'
import SlideInLeftToRight from "../../Components/common/SlideInLeftToRight";
import SlideInRightToLeft from "../../Components/common/SlideInRightToLeft";
import ZoomInDown from "../../Components/common/ZoomInDown";
import CardFadeInUpAnimation from "../../Components/common/CardFadeInUpAnimation";
import { motion} from "framer-motion";

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
                    // console.log("relod is worak");
        window.location.reload()
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
    <div className="min-h-[700px] flex flex-col-reverse lg:flex-row items-center justify-center  px-6 md:px-0 gap-10 bg-gradient-to-r from-amber-500 to-amber-400  ">
     
 <motion.div 
  initial={{ y:  50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration:  0.9,
        delay: 0.3, // index এর মাধ্যমে stagger effect
        // ease: "easeOut"
      }}
 
 className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
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

            <div className="mt-1">
              <a target="_blank"  onClick={handleForgatePass} className="link link-hover ">
                Forgot password?
              </a>
            </div>
         <Button className="w-full" type="submit">Login</Button>
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
             </motion.div>
    
     
              {/* lotti animation */}
              <SlideInRightToLeft>
        <Lottie animationData={logingAnimation} loop={true} />
              </SlideInRightToLeft>
    </div>
  );
};

export default Login;