import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { logout } from "../redux/apiCalls";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logout);
    navigate('/');
  }
  
  return (
    <div>
      <Announcement />
      <Navbar />
      <h1 style={{paddingTop: "8rem"}}>My Account</h1>
      <p>{currentUser.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
