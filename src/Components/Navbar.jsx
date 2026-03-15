import React, { useContext } from "react"; // fix useContext
import logo from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { Authcontex } from "../Provider/AuthProvider";

const Navbar = () => {
    
  const { user , logOut } = useContext(Authcontex); // ✅ fix useContext
  const handeleLogout =()=>{
   console.log("out");
   logOut()
   .then(() => {
     alert(" Sign-out successful")
   }).catch((error) => {
     console.log(error);
   });
  }
  return (
    <div className="flex justify-between items-center text-accent">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-4 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn gap-2 flex">
        <img src={logo} alt="" />
        {user ? (
          <button onClick={handeleLogout} className="btn  btn-primary px-9 ">Log out</button>
        ) : (
          <Link
            to="auth/login"
            className="btn  btn-primary px-9 btn  btn-primary px-9 ">
            {" "}
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;