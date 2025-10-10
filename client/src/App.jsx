/* eslint-disable no-constant-binary-expression */
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AllRooms from "./pages/AllRooms";
import RoomDetails from "./pages/RoomDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Experince from "./pages/Experince";

const App = () => {
  const inOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div >
      {!inOwnerPath && <Navbar />}
     {false && <HotelReg/>}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> 
          <Route path="/experience" element={<Experince />} /> 
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;


