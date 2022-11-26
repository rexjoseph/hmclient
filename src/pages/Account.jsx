import { useState } from "react";
import { useSelector } from "react-redux";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 style={{paddingTop: "8rem"}}>My Account</h1>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default Account;
