import React from "react";
import Navbar from "../components/Navbar";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import "../components/Booking.css";

export default function Bookingpage(){
    
    return(
      <div>
        <Navbar />
        <Booking />
        <Footer />
   </div>   
 );
}