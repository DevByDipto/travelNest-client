import React, { use } from "react";
import usePackages from "../../Hook/usePackages";
import Loding from "../Loding";
import Button from "../common/Button";
import { NavLink } from "react-router";

const FeaturedPackages = () => {
  const { packages, loading } = usePackages();
  if (loading) return <Loding></Loding>;
  console.log(packages, loading);

  return (
    <div>
      <h2>FeaturedPackages</h2>
      {/* feature cards */}
      <div className="flex">
        {packages.slice(0, 6).map((singlePackage) => (
          <div
            className="card bg-base-100 image-full w-96 shadow-sm"
            key={singlePackage._id}
          >
            <figure>
              <img src={singlePackage.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singlePackage.tour_name}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
{/* show all button */}
      </div>
      <NavLink to='/all-packages'>
      <Button>Show All</Button>
      </NavLink>
    </div>
  );
};

export default FeaturedPackages;
