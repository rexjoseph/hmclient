import React, { useEffect, useState } from 'react'
import Announcement from '../../components/Announcement';
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar';
import { userRequest } from '../../requestMethods';
import Sidebar from './Sidebar';
import {format} from "timeago.js"
import { deleteUser } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Admin Users List — Hashingmart`;
  });

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('/users')
        setUsers(res.data);
        setLoading(true)
      } catch (err) {}
    }
    getOrders()
  }, [])

  const handleDelete = (id) => {
    deleteUser(id, dispatch)
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <section className='adm-productList-container'>
        <div className="flex">
          <Sidebar />
          <div className="mainbody">
            <div className="mainbody-header">
              <h1 className="mainbody-title">User Analytics</h1>
              <div className="span">
                <span>
                  In this section, you can review and manage all users. You can view, edit information such as user
                  role, as well as review, suspend or delete users. Access to this area is limited. Only administrators and team
                  leaders can reach this section. The changes you make will be approved after they’re submitted.
                </span>
                <br />
                <br />
              </div>
              <div className='search__holder-admin'>
                <form className='search'>
                  <input type="text" className="search__input" name="u" placeholder="Search for user, email address..." />
                </form>
              </div>
            </div>
            <div className="productList">
              {loading ? (
                users.length > 0 ? (
                  <div className='listable' style={{margin: "4rem 0"}}>
                    <div className="listable-responsive">
                      <table width="100%">
                        <tbody>
                          {users?.map(item => (
                            <tr key={item._id}>
                              <td>{item.firstName}&nbsp;{item.lastName}</td>
                              <td>{item.email}</td>
                              <td>
                                {
                                  item.address &&
                                    <>
                                      {item.address.city}, {item.address.zip}, {item.address.country}
                                    </>
                                }
                              </td>
                              <td>{format(item.createdAt)}</td>
                              <td>
                                <i className="fa fa-ellipsis-h actions-ellipsis drop">
                                  <ul className='drop-menu'>
                                    <li>
                                      <a href={`/admin/users/edit/${item._id}`}>Edit</a>
                                    </li>
                                    <li>
                                      <button onClick={() => handleDelete(item._id)}>Delete</button>
                                    </li>
                                  </ul>
                                </i>
                              </td>
                            </tr>
                          )).reverse()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h1>No users found!</h1>
                    <p>Seems we don't have users at the moment.</p>
                  </div>
                )
              ) : (
                <Loading />
              )}
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UsersList