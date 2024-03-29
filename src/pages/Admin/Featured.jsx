import React from 'react'
import { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';
import Chart from './Chart';
import './Featured.css'
import WidgetOrders from './WidgetOrders';

const Featured = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const [orders, setOrders] = useState({});
  const [users, setUsers] = useState({});

  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) => 
          setUserStats((prev) => [
            ...prev,
            {  name: MONTHS[item._id - 1], "Active Users": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS])

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    }
    getIncome();
  }, []);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    }
    getOrders();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users");
        setUsers(res.data);
      } catch {}
    }
    getUsers();
  }, []);

  return (
    <div className='featured'>
      <h3>Activity</h3>
      <div className="featuredWrapper">
        <div className="featuredItem">
          <div className="featuredFlex">
            <div></div>
            <div className="featuredFlexcaption">
              <span className="featuredTitle">Revenue</span>
            </div>
          </div>
          <div className="featuredBodyHolder">
            <span className='bold-text metric'>${income[0]?.total || 0}</span>
            <span className={perc < 0 ? (`'metric-rate metric-rate-bad'`) : ('metric-rate metric-rate-good')}>
              {perc < 0 ? (
                <>-</>
              ) : (
                <>+</>
              )}
              {Math.floor(perc)}%
            </span>
          </div>
          <span className='comparespan'>Compared to last month</span>
        </div>

        <div className="featuredItem">
          <div className="featuredFlex">
            <div></div>
            <div className="featuredFlexcaption">
              <span className="featuredTitle">All Customers</span>
            </div>
          </div>
          <div className="featuredBodyHolder">
            <span className='bold-text metric'>{users.length}</span>
            <span className='metric-rate metric-rate-bad'>-1.44%&nbsp;</span>
          </div>
          <span className='comparespan'>Compared to last month</span>
        </div>

        <div className="featuredItem">
          <div className="featuredFlex">
            <div></div>
            <div className="featuredFlexcaption">
              <span className="featuredTitle">Orders</span>
            </div>
          </div>
          <div className="featuredBodyHolder">
            <span className='bold-text metric'>{orders.length}</span>
            <span className='metric-rate metric-rate-good'>+5.44%&nbsp;</span>
          </div>
          <span className='comparespan'>Compared to last month</span>
        </div>

        <div className="featuredItem">
          <div className="featuredFlex">
            <div></div>
            <div className="featuredFlexcaption">
              <span className="featuredTitle">Refunds</span>
            </div>
          </div>
          <div className="featuredBodyHolder">
            <span className='bold-text metric'>0</span>
            <span className='metric-rate metric-rate-good'>+0%&nbsp;</span>
          </div>
          <span className='comparespan'>Compared to last month</span>
        </div>
      </div>
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active Users"  
      />
      <>
        <WidgetOrders />
      </>
    </div>
  )
}

export default Featured