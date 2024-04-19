import React from "react";
import Navbar from "../components/Navbar";
import Slideshow from "../components/Slideshow";
import Homepage from "../components/Homepage";
import Footer from "../components/Footer";
import "../components/Homepage.css";

export default function Homepage1(){
    
    return(
      <div>
        <Navbar />
        <Slideshow />
        <Homepage />
        <Footer />
   </div>   
 );
}