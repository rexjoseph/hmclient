import { format } from 'date-fns'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Announcement from '../../components/Announcement'
import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'
import { userRequest } from '../../requestMethods'
import Sidebar from './Sidebar'

const EmailV2SubscribersList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Admin Email v2 Subscriber List — Hashingmart`;
  });

  useEffect(() => {
    const getSubscribers = async () => {
      try {
        const res = await userRequest.get('/email/v2/all')
        setSubscribers(res.data);
        setLoading(true)
      } catch (err) {}
    }
    getSubscribers()
  }, [])

  return (
    <div>
      <Announcement />
      <Navbar />
      <section className='adm-productList-container'>
        <div className="flex">
          <Sidebar />
          <div className="mainbody">
            <div className="mainbody-header">
              <h1 className="mainbody-title">Email subscribers (pop-up)</h1>
              <div className="span">
                <span>
                  The changes you make will be approved after they’re submitted.
                </span>
                <br />
                <br />
                {subscribers.length}&nbsp;subscribers
                <br />
              </div>
              <div className='search__holder-admin'>
                <form className='search'>
                  <input type="text" className="search__input" name="u" placeholder="Search for email address..." />
                </form>
              </div>
            </div>
            <div className="productList">
              {loading ? (
                subscribers.length > 0 ? (
                  <div className='listable' style={{margin: "4rem 0"}}>
                    <div className="listable-responsive">
                      <table width="100%">
                        <tbody>
                          {subscribers?.map(item => (
                            <tr key={item._id}>
                              <td>{item.email}</td>
                              <td>{format(new Date(item.createdAt), 'yyyy/MM/dd')}</td>
                              <td>
                                <i className="fa fa-ellipsis-h actions-ellipsis drop">
                                  <ul className='drop-menu'>
                                    <li>
                                      {/* <button onClick={() => handleDelete(item._id)}>Delete</button> */}
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
                    <h1>No subscribers yet!</h1>
                    <p>Seems we don't have email subscribers at the moment.</p>
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

export default EmailV2SubscribersList