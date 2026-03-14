import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <div>
      <h2 className="font-bold mb-5"> find us</h2>
      <div className="">
        <div className="join join-vertical gap-3 w-full">
          <button className="btn  bg-base-100 justify-start join-item">
         <FaFacebook></FaFacebook>   facebook
          </button>
          <button className="btn  bg-base-100 justify-start join-item">
          <FaTwitter></FaTwitter>  Twitter
          </button>
          <button className="btn bg-base-100 justify-start  join-item">
           <FaInstagram></FaInstagram> instragram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Findus;
