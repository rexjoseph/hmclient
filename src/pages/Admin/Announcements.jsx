import { format } from 'date-fns';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { deleteAnnouncement, getAnnouncements } from '../../redux/apiCalls';
import Sidebar from './Sidebar';

const Announcements = () => {
  const dispatch = useDispatch()
  const announcements = useSelector((state) => state.announcement.announcements);

  useEffect(() => {
    getAnnouncements(dispatch);
  }, [dispatch])

  useEffect(() => {
    document.title = `Admin Announcement List — Hashingmart`;
  });

  const handleDelete = (id) => {
    deleteAnnouncement(id, dispatch)
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <section className='adm-productList-container'>
        <div className="flex">
          <Sidebar />
          <div className='productList'>
            {
              announcements.length > 0 ? (
                <div className='listable'>
                  <div className='listable-responsive'>
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>
                            <input type="checkbox" className='listable-check' />
                          </td>
                          <td>Actions</td>
                          <td>Status</td>
                          <td>Name</td>
                          <td>Text</td>
                          <td>Date created</td>
                        </tr>
                      </thead>
                      <tbody style={{borderTop: "1px solid var(--line-divider)"}}>
                        {
                          announcements?.map((item) => (
                            <tr key={item._id}>
                              <td>
                                <input type="checkbox" className='listable-check' />
                              </td>
                              <td>
                                <div>
                                  <a href={`/admin/notification/edit/${item._id}`}>Edit</a>
                                </div>
                                <div>
                                  <button className="delist-btn" type="button" onClick={() => handleDelete(item._id)}>Delete</button>
                                </div>
                              </td>
                              <td>
                                {
                                  item.status === true ? (
                                    <>Active</>
                                  ) : (
                                    <>Inactive</>
                                  )
                                }
                              </td>
                              <td>
                                <a href={`/announcement/${item.name}`}>
                                  {item.name}
                                </a>
                              </td>
                              <td>
                              <div style={{maxWidth: "300px"}}>
                                <a className="prL-href" href="#">
                                  { item.text }
                                </a>  
                              </div>
                              </td>
                              <td>
                                {format(new Date(item.createdAt), 'yyyy/MM/dd')}
                              </td>
                            </tr>
                          )).reverse()
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div>
                  <h1>No announcement yet!</h1>
                  <p>Seems we don't have announcements at the moment.</p>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Announcements