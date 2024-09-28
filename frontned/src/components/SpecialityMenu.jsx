import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {


  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800 "
      id="speciality"
    >
      <h1>Find by Speciality</h1>
      <p className="sm:w/3 text-centre text-sm">
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        <br /> your appointment hassle-free.
      </p>
      <div className="flex flex-wrap sm:justify-center gap-4 pt-5 w-full ">
        {specialityData.map((item, index) => (
       
          <Link onClick={()=>scrollTop(0,0)} key={index} to={`/doctor/${item.speciality}`} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ">
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt={item.speciality} />
            <p>{item.speciality}</p>
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default SpecialityMenu;
