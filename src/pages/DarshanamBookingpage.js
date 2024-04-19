import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/DarshanamBooking.css"
import DarshanamBooking from "../components/DarshanamBooking";

export default function DarshanamBookingPage(){
    
    return(
      <div>
        <Navbar />
        <DarshanamBooking />
        <Footer />
   </div>   
 );
}