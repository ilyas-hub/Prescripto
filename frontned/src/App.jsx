import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import MyAppointments from "./pages/MyAppointments";
import ContactUs from "./pages/ContactUs";
import Appointment from "./pages/Appointment";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import MyProfile from "./pages/MyProfile";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/Appointment/:docid" element={<Appointment />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/my-profile" element={<MyProfile/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
