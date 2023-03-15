import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";
import { BASE_URL } from "../../baseUrl";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then();
  }, []);

  const fetchOrders = async () => {
    await axios
      .get(
        `${BASE_URL}/api/v1/order-history/my-order/list/paginated?page=0&size=200`,
        {
          params: {
            access_token: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        let temp = [];
        if (response.data.data?.content !== undefined) {
          response.data.data?.content.forEach((item) => {
            temp.push(item);
          });
          setOrders(temp);
        }
      });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Order#</th>
            <th>Products</th>
            <th>Total Cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => {
            return (
              <tr key={i}>
                <td>{order.id}</td>
                <td>
                  {order.products[0]?.name},{order.products[1]?.name}
                </td>
                <td>{order.totalCost}</td>
                <td>{order.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
