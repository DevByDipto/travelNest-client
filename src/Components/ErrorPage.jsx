import React from "react";
import Lottie from "lottie-react";
import errorAnimation from "../assets/errorAnimation.json";
import Button from "./common/Button";
import { NavLink } from "react-router";
const ErrorPage = () => {
  return (
    <div className="w-6/12 mx-auto">
      <Lottie animationData={errorAnimation} loop={true} />
      <div className="text-center">
        <NavLink to="/">
          <Button>Go Home</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
