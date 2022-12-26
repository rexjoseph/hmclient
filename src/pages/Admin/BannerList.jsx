import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { deleteBanner, getBanners } from '../../redux/apiCalls';
import Sidebar from './Sidebar';

const BannerList = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banner.banners);

  useEffect(() => {
    getBanners(dispatch);
  }, [dispatch])

  useEffect(() => {
    document.title = `Admin Banner List — Hashingmart`;
  });

  const handleDelete = (id) => {
    deleteBanner(id, dispatch)
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
              banners.length > 0 ? (
                <div className='listable'>
                  <div className='listable-responsive'>
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>
                            <input type="checkbox" className='listable-check' />
                          </td>
                          <td>Actions</td>
                          <td>Photo</td>
                          <td>Title</td>
                          <td>Caption</td>
                          <td>Action text</td>
                        </tr>
                      </thead>
                      <tbody style={{borderTop: "1px solid var(--line-divider)"}}>
                        {
                          banners?.map((item) => (
                            <tr key={item._id}>
                              <td>
                                <input type="checkbox" className='listable-check' />
                              </td>
                              <td>
                                <div>
                                  <a href={`/admin/banners/edit/${item._id}`}>Edit</a>
                                </div>
                                <div>
                                  <button className="delist-btn" type="button" onClick={() => handleDelete(item._id)}>Delete</button>
                                </div>
                              </td>
                              <td>
                                <a href={`/banner/${item._id}`}>
                                  <img style={{maxWidth: "300px"}} src={item.image} alt={item.title} />
                                </a>
                              </td>
                              <td>
                                <div style={{maxWidth: "300px"}}>
                                  <a href={`/banner/${item.id}`}>
                                    {item.title}
                                  </a>
                                </div>
                              </td>
                              <td style={{fontWeight: "600"}}>
                                {item.caption}
                              </td>
                              <td>
                                {item.actionText}
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
                  <h1>No banners yet!</h1>
                  <p>Seems we don't have banners at the moment.</p>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerList