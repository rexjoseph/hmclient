import React, { useEffect } from 'react'
import { useState } from 'react';
import { userRequest } from '../../requestMethods';
import './Channel.css'
import Loading from '../../components/Loading';
import Avatar from '../../components/Avatar';

const Channels = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users");
        setUsers(res.data);
        setLoading(true)
      } catch {}
    }
    getUsers();
  }, []);

  return (
    <div className='channel'>
      {
        loading ? (
          <div className="channelWrapper">
            <h3>Latest Customers</h3>
            <div className="channelFlex">
              {users?.map((item) => (
                <div className='itemFlex' key={item._id}>
                  <div className="avatar-div"><Avatar /></div>
                  <div>{item.firstName}&nbsp;{item.lastName}</div>
                  <div className='flexend'><i className="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                </div>
              )).reverse()}
            </div>
          </div>
        ) : (<Loading />)
      }
    </div>
  )
}

export default Channels