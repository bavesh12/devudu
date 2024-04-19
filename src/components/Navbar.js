import React from "react";
import "./Navbar .css";
export default function Navbar() {
    return (
        <div>
<nav class="navbar">
<div class="logo">
            <img src="logo.png" alt="Logo"/>
            <a href="/#">;sljkd</a>
        </div>  
    <ul class="navbar-links">
    <li class="navbar-dropdown">
      <a href="#">About</a>
      <div class="dropdown">
        <a href="#">Overview</a>
        <a href="#">Temple history</a>
      </div>
    </li>
    <li class="navbar-dropdown">
      <a href="#">Sevas and Darshanams</a>
      <div class="dropdown">
        <a href="#">Overview</a>
        <a href="#">Prathyaksha seva</a>
        <a href="#">Dharshanam</a>
        <a href="#"></a>
      </div>
    </li>
    <li class="navbar-dropdown">
      <a href="#">Donations</a>
      <div class="dropdown">
        <a href="#">Overview</a>
        <a href="#">E-hundi</a>
        <a href="#">Trust</a>
      </div>
    </li>
    <li class="navbar-dropdown">
      <a href="/Booking">Booking</a>
      <div class="dropdown">
        <a href="/Booking">Overview</a>
        <a href="#">Pratyaksha seva</a>
        <a href="/Darshanam">Darshanam</a>
      </div>
    </li>
    <li class="navbar-dropdown">
      <a href="#">Support</a>
      <div class="dropdown">
        <a href="#">Overview</a>
        <a href="/Faq">Faq</a>
        <a href="/Contact">Contact Us</a>
      </div>
    </li>
  </ul>
</nav>
</div>
    );
}