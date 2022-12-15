import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { resetCart } from '../redux/cartRedux';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Success = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location.state.authData;
  const cart = location.state.cart;
  const amount = location.state.amount;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  
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
          cart: cart?.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            title: item.title,
            color: item.color,
            size: item.size
          })),
          amount: amount,
          address: currentUser.address,
          paymentId: data
        })
        setOrderId(res.data._id);
        resetCart(dispatch);
      } catch {}
    }
    data && createOrder();
  }, [data, cart, amount, currentUser, dispatch])

  return (
    <>
      <Announcement />
      <Navbar />
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8rem"
        }}
      >
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Successful. Your order is being prepared...`
        }
      </div>
    </>
  )
}

export default Success