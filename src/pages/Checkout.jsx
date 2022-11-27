import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Information & Checkout — Hashingmart`;
  });

  return (
    <>
      <Announcement />
      <Navbar />
    </>
  )
};

export default Checkout;
