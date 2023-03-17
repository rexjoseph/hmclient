import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/apiCalls";
import OrderItem from "./OrderItem";

const Orders = ({ filters }) => {
  const orders = useSelector((state) => state.order.orders);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  useEffect(() => {
    setFilteredOrders(
      orders.filter((item) =>
        Object.entries(filters).every(([key, value]) => item.status === value)
      )
    );
  }, [orders, filters]);

  return (
    <div>
      <div className="productList">
        {orders.length > 0 ? (
          <div className="listable" style={{ margin: "4rem 0" }}>
            <div className="listable-responsive">
              <table width="100%">
                <thead>
                  <tr>
                    <td>
                      No.&nbsp;<i className="fa fa-caret-down"></i>
                    </td>
                    <td>
                      Order ID&nbsp;<i className="fa fa-caret-down"></i>
                    </td>
                    <td>
                      Customer&nbsp;<i className="fa fa-caret-down"></i>
                    </td>
                    <td>
                      Email address&nbsp;<i className="fa fa-caret-down"></i>
                    </td>
                    <td>
                      Order cost&nbsp;<i className="fa fa-caret-down"></i>
                    </td>
                    <td>
                      Status&nbsp;<i className="fa fa-caret-down"></i>
                    </td>
                    <td>
                      Date&nbsp;<i className="fa fa-caret-down"></i>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders
                    .map((item) => <OrderItem item={item} key={item._id} />)
                    .reverse()}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div>
            <h1>No orders yet!</h1>
            <p>Seems we don't have orders at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
