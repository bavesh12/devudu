import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Bookingpage from './pages/Bookingpage';
import Navbar from './components/Navbar';
import Slideshow from "./components/Slideshow";
import Homepage1 from './pages/Homepage1';
import DarshanamBookingPage from "./pages/DarshanamBookingpage";
import Contactuspage from "./pages/Contactuspage";
import FAQpage from "./pages/FAQpage";


export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route index element={<Homepage1 />} />
          <Route path="/Booking" element={<Bookingpage />} />
          <Route path="/Darshanam" element={<DarshanamBookingPage />}/>
          <Route path="/Contact" element={<Contactuspage/>}/>
          <Route path="/Faq" element={<FAQpage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
