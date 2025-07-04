import React, { useContext, useState } from "react";
import { NavLink, useLoaderData, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import GoogleSignIn from "./GoogleSignin";
import { AuthContext } from "../../Context/AuthContext";
import Button from "../../Components/common/Button";
import sugnUpAnimation from '../../assets/signUpAnimation2.json'
import Lottie from "lottie-react";
const Register = () => {
  const [error, setError] = useState("");

  const { registetion, sendingUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const data = useLoaderData();
  // console.log(data);

  const handleRestretion = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    // console.log(email);

    if (!/^(?=.*[A-Z]).+$/.test(password)) {
      return setError("must shoud have a uppercase latter");
    } else if (!/^(?=.*[a-z]).+$/.test(password)) {
      return setError("must shoud have a lower latter");
    } else if (password.length < 6) {
      return setError("must shoud have 6 degit");
    }

    registetion(email, password)
      .then(() => {
        sendingUserInfo(name, photoUrl)
          .then(() => {
            toast.success("Registration successful");
            navigate(location.state ? location.state : "/");
            // console.log("relod is worak");
            window.location.reload();
            

          })
          .catch((err) => {
            toast.error(err.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className=" flex flex-col-reverse lg:flex-row  items-center justify-center min-h-screen px-6 md:px-0 bg-gradient-to-r from-amber-500 to-amber-400 py-5">
      <div className="card m-0 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  mt-[5vh] pt-3">
        <h1 className="text-3xl font-bold text-center">Register now!</h1>

        <div className="card-body">
          <form className="form" onSubmit={handleRestretion}>
            {/* name */}
            <label className="label">Name</label>
            <input
              type="name"
              name="name"
              className="input"
              placeholder="name"
            />

            {/* url */}
            <label className="label">Photo url</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="photo Url"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              onMouseEnter={() => setError("")}
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <p>{error}</p>
            {/* <button type="submit" className="btn btn-primary mt-4 w-full">
            Register Now
            </button> */}
            <Button className="w-full mt-4 " type="submit">
              Register Now
            </Button>
            <GoogleSignIn></GoogleSignIn>
            <p className="mt-2">
              Already have an account ?
              <NavLink to="/login">
                <span className="text-secondary hover:underline">Login</span>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
         {/* lotti animation */}
        <Lottie className="" animationData={sugnUpAnimation} loop={true} />
    </div>
  );
};

export default Register;
