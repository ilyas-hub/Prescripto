import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const Navigate = useNavigate();

  const [token, settoken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 ">
      <img
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="assets.logo"
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5  mx-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5  mx-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5  mx-auto hidden" />
        </NavLink>

        <NavLink to={"/contactUs"}>
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5  mx-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5 rounded-full" src={assets.dropdown_icon} alt="" />

            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-48 bg-slate-100 rounded flex flex-col gap-4 p-4">
                <p className="hover:text-black cursor-pointer" onClick={()=>Navigate("my-profile")}>My profile</p>
                <p className="hover:text-black cursor-pointer" onClick={()=>Navigate("my-appointments")}>My Appointments</p>
                <p className="hover:text-black cursor-pointer" onClick={()=>settoken(false)}>Lougout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => Navigate("/login")}
            className="bg-primary text-white outline-none px-8 py-3 rounded-full hidden md:block"
          >
            Create Acount
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
