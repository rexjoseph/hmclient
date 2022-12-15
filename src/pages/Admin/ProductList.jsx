import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import './ProductList.css';
import Sidebar from './Sidebar';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch])

  useEffect(() => {
    document.title = `Admin Products List — Hashingmart`;
  });

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
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
              products.length > 0 ? (
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
                          <td>Price</td>
                          <td>Reviews</td>
                        </tr>
                      </thead>
                      <tbody style={{borderTop: "1px solid var(--line-divider)"}}>
                        {
                          products?.map((item) => (
                            <tr key={item._id}>
                              <td>
                                <input type="checkbox" className='listable-check' />
                              </td>
                              <td>
                                <div>Edit</div>
                                <div>
                                  <button className="delist-btn" type="button" onClick={() => handleDelete(item._id)}>Delete</button>
                                </div>
                              </td>
                              <td>
                                <a href={`/product/${item.slug}`}>
                                  <img style={{maxWidth: "100px"}} src={item.images[0]} alt={item.title} />
                                </a>
                              </td>
                              <td>
                                <div style={{maxWidth: "300px"}}>
                                  <a href={`/product/${item.slug}`}>
                                    {item.title}
                                  </a>
                                </div>
                              </td>
                              <td style={{fontWeight: "600"}}>
                                USD ${item.price.toFixed(2)}
                              </td>
                              <td>
                                {item.numReviews === 0 && (
                                  <>No review yet</>
                                )}
                                {item.numReviews === 1 && (
                                  <>{item.numReviews}&nbsp; review</>
                                )}
                                {item.numReviews > 1 && (
                                  <>{item.numReviews}&nbsp; reviews</>
                                )}
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
                  <h1>No products yet!</h1>
                  <p>Seems we don't have products at the moment.</p>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductList