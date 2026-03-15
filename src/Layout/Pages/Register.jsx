import React, { use } from "react";
import { Link } from "react-router";
import { Authcontex } from "../../Provider/AuthProvider";
const Register = () => {
    const {createUser} =use(Authcontex)
  const handelResgister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const Register = form.Register.value;
    console.log({name,photo,email,password,Register});
     createUser(email,password)
     .then( result =>{
        const user = result.user
        console.log(user);
     })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
   
  })
  };
  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl text-center py-5">
        <h2 className="font-semibold text-2xl">Register your account</h2>
        <form onSubmit={handelResgister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Your Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Please Your Name"
            />
            {/* Photo Url */}
            <label className="label"> Photo URl</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder=" Photo URl"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button
              name="Register"
              type="submit"
              className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold pt-3">Allready Have An Account ? </p>
            <Link className="text-secondary" to="/auth/login">
              Longin
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
