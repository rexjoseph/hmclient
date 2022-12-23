import React from 'react'
import { useEffect, useState } from 'react';
import './WidgetOrders.css'
import {format} from "timeago.js"
import { userRequest } from '../../requestMethods';

const WidgetOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  return (
    <div className='widgetOrders'>
      <div className="widgetLarge">
        <h3 className='widgetTitle'>Recent Invoices</h3>
        {orders.length > 0 ? (
          <table className='widgetTable'>
          <thead>
            <tr className='widgetTr'>
              <th className='widgetTh'>Order ID</th>
              <th className='widgetTh'>Customer Name</th>
              <th className='widgetTh'>Order Date</th>
              <th className='widgetTh'>Country</th>
              <th className='widgetTh'>Status</th>
              <th className='widgetTh'>Amount</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody key={order._id}>
              <tr className='widgetTr' key={order._id}>
                <td className='widgetID'>
                  <span>#{order._id.substring(0, 8).toUpperCase()}</span>
                </td>
                <td className='widgetUser'>
                  <span>{order.user.firstName}&nbsp;{order.user.lastName}</span>
                </td>
                <td className='widgetDate'>{format(order.createdAt)}</td>
                <td className='widgetDate'>{order.address.country}</td>
                <td className='widgetStatus'>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</td>
                <td className='widgetAmount'>${order.totalCost.toFixed(2)}</td>
              </tr>
            </tbody>
          )).reverse()}
          </table>
        ) : (
          <p>No orders yet</p>
        )}
      </div>
    </div>
  )
}

export default WidgetOrders