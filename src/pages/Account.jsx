import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { logout } from "../redux/apiCalls";
import Loading from "../components/Loading";
import "./Account.css";
import { userRequest } from "../requestMethods";

const Account = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Account — Hashingmart`;
  });

  useEffect(() =>{
    const getOrder = async () => {
      try {
        const res = await userRequest.get(`/orders/user`);
        setOrder(res.data);
        setLoading(true);
      } catch (err) {}
    }
    getOrder();
  })

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
            {
              loading ? (
                <>
                  {
                    order.length > 0 ? (
                      <>
                      <div className="orders">
                        {
                          order.length === 1 && <p>{order.length}&nbsp;order</p>
                        }
                        {
                          order.length > 1 && <p>{order.length}&nbsp;orders</p>
                        }
                      </div> 
                      </>
                    ) : (
                      <div className="orders">
                        <p>You haven't placed any orders yet.</p>
                      </div>
                    )
                  }
                </>
              ) : (<Loading />)
            }
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
