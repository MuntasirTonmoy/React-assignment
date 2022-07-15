import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingForm from "./Components/BookingForm";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ShowDetails from "./Components/ShowDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="showdetails/:id" element={<ShowDetails />}></Route>
        <Route path="booking/:id" element={<BookingForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
