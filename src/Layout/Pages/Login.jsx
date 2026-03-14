import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center py-5">
        <h2 className="font-semibold text-2xl">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            {/* forgate password  */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold pt-3">Dont’t Have An Account ? </p>
            <Link className="text-secondary" to="/auth/register">
              Register
            </Link>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
