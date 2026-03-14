import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">login With </h2>
      <div className=" space-y-5">
        <button className="btn btn-outline btn-secondary w-full">
          {" "}
          <FaGoogle  className="size-5"/>
          Login with Google
        </button>
        <button className="btn btn-outline btn-primary w-full">
          <FaGithub className="size-5" />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
