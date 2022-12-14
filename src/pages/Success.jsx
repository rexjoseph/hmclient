import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const data = location.state.authData;
  const cart = location.state.products;
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
          userId: currentUser._id,
          products: cart?.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
          amount: amount,
        })
        console.log(res.data);
        setOrderId(res.data._id);
      } catch {}
    }
    data && createOrder();
  }, [data, cart, amount, currentUser])

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`}
    </div>
  )
}

export default Success