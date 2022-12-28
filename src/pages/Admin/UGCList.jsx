import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";
import { deleteUGCContent, getUGCContents } from "../../redux/apiCalls";
import Sidebar from "./Sidebar";
import { format } from "date-fns";

const UGCList = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.uGCContent.contents);
  const totalContents = contents.length;

  useEffect(() => {
    getUGCContents(dispatch);
  }, [dispatch]);

  useEffect(() => {
    document.title = `Admin UGC Contents List - Hashingmart`;
  });

  const handleDelete = (id) => {
    deleteUGCContent(id, dispatch);
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
                Manage active UGC ({totalContents})
              </h1>
              <div className="span">
                <span>
                  In this section, you can review and manage all user generated
                  content. You can view, edit as well as cancel or delete
                  contents. Access to this area is limited. Only administrators
                  and team leaders can reach this section. The changes you make
                  will be approved after they’re submitted.
                </span>
                <br />
                <br />
                <p>
                  {totalContents === 1 && <>{totalContents}&nbsp;content</>}
                  {totalContents > 1 && <>{totalContents}&nbsp;contents</>}
                </p>
              </div>
            </div>
            <div className="productList">
              {contents.length > 0 ? (
                <div className="listable" style={{ margin: "4rem 0" }}>
                  <div className="listable-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>
                            <input type="checkbox" className="listable-check" />
                          </td>
                          <td>Actions</td>
                          <td>Photo</td>
                          <td>Handle</td>
                          <td>Date created</td>
                        </tr>
                      </thead>
                      <tbody
                        style={{ borderTop: "1px solid var(--line-divider)" }}
                      >
                        {contents
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
                                    href={`/admin/usercontent/edit/${item._id}`}
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
                                <a href="#">
                                  <img
                                    style={{ maxWidth: "100px" }}
                                    src={item.photourl}
                                    alt={item.handle}
                                  />
                                </a>
                              </td>
                              <td>
                                <div style={{ maxWidth: "300px" }}>
                                  <a
                                    href={`https://instagram.com/${item.handle}`}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    @{item.handle}
                                  </a>
                                </div>
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
                  <h1>No user generated content yet!</h1>
                  <p>Seems we don't have contents at the moment</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UGCList;
