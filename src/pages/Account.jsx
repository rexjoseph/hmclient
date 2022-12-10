import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { logout } from "../redux/apiCalls";
import "./Account.css";

const Account = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Account — Hashingmart`;
  });

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout);
    navigate("/");
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="account">
        <div className="container">
          <h1 style={{ paddingTop: "8rem" }}>My Account</h1>

          <div className="signOut">
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="row">
            <div className="orders">
              <p>You haven't placed any orders yet.</p>
            </div>
            <div className="defaultAddress">
              <h3>{user.firstName}&nbsp;{user.lastName}</h3>
              <div className="address-body">
                <div className="email">{user.email}</div>
                {/* <div>{user.address.street}</div>
                <div>{user.address.apartment}</div>
                <div className="city-state">{user.address.city},&nbsp;</div>
                <div className="city-state">{user.address.state}&nbsp;</div>
                <div className="city-state">{user.address.zip}</div>
                <div>{user.address.country}</div>
                <div>{user.address.phone}</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
