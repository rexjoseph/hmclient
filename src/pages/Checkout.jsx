import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Checkout = () => {

  useEffect(() => {
    document.title = `Information & Checkout — Hashingmart`;
  },);

  return (
    <>
    <Announcement />
    <Navbar />
    </>
  )
};

export default Checkout;
