import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../redux/apiCalls";

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  return (
    <tr key={item._id}>
      <td>#{item.unitNumber}</td>
      <td>{item._id.substring(0, 8)}</td>
      <td>
        {item.user.firstName}&nbsp;{item.user.lastName}
      </td>
      <td>{item.user.email}</td>
      <td>${item.totalCost.toFixed(2)}</td>
      <td>
        <div className="status-div">
          {item.status === "pending" ? (
            <div>
              <i className="fa fa-clock-o status-icon status-icon--pending"></i>
              <span className="pending-span">&nbsp;Pending</span>
            </div>
          ) : item.status === "processing" ? (
            <div>
              <i className="fa fa-spinner status-icon status-icon--processing"></i>
              <span className="processing-span">&nbsp;Processing</span>
            </div>
          ) : item.status === "sent" ? (
            <div>
              <i className="fa fa-cube status-icon status-icon--sent"></i>
              <span className="sent-span">&nbsp;Sent</span>
            </div>
          ) : item.status === "delivered" ? (
            <div>
              <i className="fa fa-check status-icon status-icon--sent"></i>
              <span className="sent-span">&nbsp;Delivered</span>
            </div>
          ) : (
            <div>
              <i className="fa fa fa-times status-icon status-icon--canceled"></i>
              <span className="canceled-span">&nbsp;Canceled</span>
            </div>
          )}
        </div>
      </td>
      <td>{format(new Date(item.createdAt), "yyyy/MM/dd")}</td>
      <td>
        <i className="fa fa-ellipsis-h actions-ellipsis drop">
          <ul className="drop-menu">
            <li>
              <a href={`/admin/orders/${item._id}`}>Details</a>
            </li>
            <li>
              <a href={`/admin/orders/edit/${item._id}`}>Edit</a>
            </li>
            <li>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </li>
          </ul>
        </i>
      </td>
    </tr>
  );
};

export default OrderItem;
