import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { resetCart } from '../redux/cartRedux';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Success = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location.state.authData;
  const cart = location.state.cart;
  const amount = location.state.amount;
  const totalQty = location.state.totalQty;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(() => {
    document.title = `Successful Order — Hashingmart`;
  });

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          user: {
            email: currentUser.email,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            userId: currentUser._id
          },
          cart: {
            items: cart?.map((item) => ({
              productId: item.id,
              quantity: item.quantity,
              title: item.title,
              color: item.color,
              size: item.size,
              price: item.price
            }))
          },
          totalCost: amount,
          totalQty: totalQty,
          address: currentUser.address,
          paymentId: data
        })
        setOrderId(res.data._id);
        dispatch(resetCart())
      } catch {}
    }
    data && createOrder();
  }, [data, cart, amount, currentUser, totalQty, dispatch])

  return (
    <>
      <Announcement />
      <Navbar />
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "10rem auto",
        maxWidth: "500px",
        padding: "0 1.5rem"
        }}
      >
        {orderId
          ? <p className='total'>`Order has been created successfully. Your order number is ${orderId}.` Order value is $<span id='totalCost'>{amount}</span></p>
          : `Successful. Your order is being prepared...`
        }
      </div>
      <Footer />
    </>
  )
}

export default Success