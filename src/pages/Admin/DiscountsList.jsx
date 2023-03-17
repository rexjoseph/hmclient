import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import { deleteDiscount, getDiscounts } from "../../redux/apiCalls";
import Sidebar from "./Sidebar";
import { format } from "date-fns";

const DiscountsList = () => {
  const dispatch = useDispatch();
  const discounts = useSelector((state) => state.discount.discounts);
  const totalDiscounts = discounts.length;

  useEffect(() => {
    getDiscounts(dispatch);
  }, [dispatch]);

  useEffect(() => {
    document.title = `Admin Discounts List - Hashingmart`;
  });

  const handleDelete = (id) => {
    deleteDiscount(id, dispatch);
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <section className="adm-productList-container">
        <div className="flex">
          <Sidebar />
          <div className="mainbody">
            <div className="mainbody-header">
              <h1 className="mainbody-title">
                Manage active discounts {totalDiscounts}
              </h1>
              <div className="span">
                <span>
                  In this section, you can review and manage all discounts. You
                  can view, edit, as well as cancel or delete discounts. Access
                  to this area is limited. Only administrators and team leaders
                  can reach this section. The changes you make will be approved
                  after they’re submitted.
                </span>
                <br />
                <br />
                <p>
                  {totalDiscounts === 1 && <>{totalDiscounts}&nbsp;discount</>}
                  {totalDiscounts > 1 && <>{totalDiscounts}&nbsp;discounts</>}
                </p>
              </div>
            </div>
            <div className="productList">
              {discounts.length > 0 ? (
                <div className="listable" style={{ margin: "4rem 0" }}>
                  <div className="listable-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>
                            <input type="checkbox" className="listable-check" />
                          </td>
                          <td>Actions</td>
                          <td>Status</td>
                          <td>Name</td>
                          <td>Code</td>
                          <td>% off</td>
                          <td>Date created</td>
                        </tr>
                      </thead>
                      <tbody
                        style={{ borderTop: "1px solid var(--line-divider)" }}
                      >
                        {discounts
                          ?.map((item) => (
                            <tr key={item._id}>
                              <td>
                                <input
                                  type="checkbox"
                                  className="listable-check"
                                />
                              </td>
                              <td>
                                <div>
                                  <a
                                    href={`/admin/discount/edit/${item._id}`}
                                  >
                                    Edit
                                  </a>
                                </div>
                                <div>
                                  <button
                                    className="delist-btn"
                                    type="button"
                                    onClick={() => handleDelete(item._id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                              <td>
                                {
                                  item.isActive === true ? (
                                    <>Active</>
                                  ) : (<>Inactive</>) 
                                }
                              </td>
                              <td>
                                {item.name}
                              </td>
                              <td>
                                {item.code}
                              </td>
                              <td>
                                {item.amount}
                              </td>
                              <td style={{ textTransform: "capitalize" }}>
                                {format(new Date(item.createdAt), 'yyyy/MM/dd')}
                              </td>
                            </tr>
                          ))
                          .reverse()}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div>
                  <h1>No discounts yet!</h1>
                  <p>Seems we don't have discounts at the moment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscountsList;
