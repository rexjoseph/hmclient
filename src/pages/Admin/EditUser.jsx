import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Announcement from '../../components/Announcement'
import Loading from '../../components/Loading';
import Navbar from '../../components/Navbar'
import { userRequest } from '../../requestMethods';
import './EditOrder.css';

const EditUser = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[4];
  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("/users/find/"+userId)
        setUser(res.data);
        setLoading(true);
      } catch {}
    }
    getUser()
  }, [userId])

  useEffect(() => {
    document.title = `Admin Edit User — Hashingmart`;
  })

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      ...inputs
    };
    // updateUser(userId, user, dispatch)
  }
  return (
    <div>
      <Announcement />
      <Navbar />
      <section>
        <div className="container pad15">
          {
            loading ? (
              <>
                <div style={{fontSize: "1.4rem"}} className="o__pages">
                  <section className="orders100" style={{marginTop: "8rem"}}>
                    <div className="container pad15">
                      <div style={{padding: "0"}} className="orders__div">
                        <div style={{margin: "0"}} className="orders__header">
                          <div className="orders__info">
                            <div className="tp-flex">
                              <h1>Edit User</h1>
                            </div>
                            <div class="dash-disclaimer">
                              <p>
                                Edit user information and address. Modifications are saved after submitting.
                              </p>
                            </div>
                          </div>
                        </div>

                        <form>
                          <div className="odt__body">
                            <div className="odt__body-1">
                              <div className="eu-info">
                                <p><b>Name:</b></p>
                                <input type="text" value={user.firstName + ' ' + user.lastName} />
                              </div>
                              <br />
                              <p>Subscribed to mailing list:</p>
                              {
                                user.isSubscribed === true && <p>Yes</p>
                              }
                              {
                                user.isSubscribed === false && <p>No</p>
                              }
                              <br />
                              <button type='submit' className='nav-btn' onClick={handleClick}>Save User</button>
                            </div>
                            <div className="odt__body-2">
                              <div className="eu-info">
                                <p><b>Address:</b></p>
                                <input type="text" name="street" id="street" defaultValue={user.address.street} placeholder="Street" />
                                <input type="text" name="apartment" id="apartment" defaultValue={user.address.apartment} placeholder="Apartment" />
                                <input type="text" name="city" id="city" defaultValue={user.address.city} placeholder="City" />
                                <input type="text" name="state" id="state" defaultValue={user.address.state} placeholder="State" />
                                <input type="text" name="country" id="country" defaultValue={user.address.country} placeholder="Country" />
                                <input type="text" name="zip" id="zip" defaultValue={user.address.zip} placeholder="ZIP" />
                              </div>
                              <div class="eu-info">
                                <p><b>Phone:</b></p>
                                <input type="text" name='phone' defaultValue={user.address.phone} />
                              </div>
                            <div class="eu-info">
                              <p><b>Email:</b></p>
                              <input type="text" name='email' onChange={handleChange} defaultValue={user.email} />
                            </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </>
            ) : (
              <Loading />
            )
          }
        </div>
      </section>
    </div>
  )
}

export default EditUser