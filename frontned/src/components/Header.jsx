import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex  md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10  text-white">
      {/* leftside div */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-sm font-light ">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="group_profiles"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#spacility"
          className="flex items-center rounded-full gap-2  bg-white text-gray-600 text-sm px-8 py-3 mx-auto md:m-0 hover:scale-105 justify-center transition-all duration-300"
        >
          <p> Book appointment</p>{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* rightside Div */}
      <div className="w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 top h-auto rounded-lg"
          src={assets.header_img}
          alt="header_img"
        />
      </div>
    </div>
  );
};

export default Header;
