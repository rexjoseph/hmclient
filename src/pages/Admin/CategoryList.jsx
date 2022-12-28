import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { deleteCategory, getCategories } from '../../redux/apiCalls';
import Sidebar from './Sidebar';
import {format} from "date-fns"

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch])

  useEffect(() => {
    document.title = `Admin Categories List — Hashingmart`;
  });

  const handleDelete = (id) => {
    deleteCategory(id, dispatch)
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
              categories.length > 0 ? (
                <div className='listable'>
                  <div className='listable-responsive'>
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>
                            <input type="checkbox" className='listable-check' />
                          </td>
                          <td>Actions</td>
                          <td>Banner</td>
                          <td>Icon</td>
                          <td>Name</td>
                          <td>Date created</td>
                        </tr>
                      </thead>
                      <tbody style={{borderTop: "1px solid var(--line-divider)"}}>
                        {
                          categories?.map((item) => (
                            <tr key={item._id}>
                              <td>
                                <input type="checkbox" className='listable-check' />
                              </td>
                              <td>
                                <div>
                                  <a href={`/admin/categories/edit/${item._id}`}>Edit</a>
                                </div>
                                <div>
                                  <button className="delist-btn" type="button" onClick={() => handleDelete(item._id)}>Delete</button>
                                </div>
                              </td>
                              <td>
                                <a href={`/category/${item.name}`}>
                                  <img style={{maxWidth: "100px"}} src={item.banner} alt={item.name} />
                                </a>
                              </td>
                              <td>
                                <a href={`/category/${item.name}`}>
                                  <img style={{maxWidth: "100px"}} src={item.icon} alt={item.name} />
                                </a>
                              </td>
                              <td style={{fontWeight: "600"}}>
                                {item.name}
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
                  <h1>No category yet!</h1>
                  <p>Seems we don't have categories at the moment.</p>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default CategoryList