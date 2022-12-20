import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { createReview } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";
import "./SubmitReview.css";

const SubmitReview = () => {
  const location = useLocation();
  const slug = location.pathname.split("/")[2];
  const user = useSelector((state) => state.user.currentUser);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [header, setHeader] = useState("");
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const id = product._id;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + slug);
        setProduct(res.data.product);
      } catch {}
    };
    getProduct();
  }, [slug]);

  const submitRatingHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(id, {
          productId: id,
          rating,
          comment,
          header,
          firstName: user.firstName,
          lastName: user.lastName,
        })
      );
      navigate(`/product/${slug}`)
    } else {
      alert("Please enter comment and rating");
    }
  };

  useEffect(() => {
    document.title = `Submit a review for ${product.title} — Hashingmart`;
  }, [product.title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <main className="main__block">
        <div className="submitReview__root">
          <div>
            <div className="submitReview__header">
              <span className="submitReview__subtitle">
                Leave a review for:
              </span>
              <h1 className="submitReview__title">
                <a href={`/product/${product.slug}`}>{product.title}</a>
              </h1>
              <div className="submitReview__productImages">
                {product.images?.slice(0, 4).map((image, key) => (
                  <div className="imageWrap" key={key}>
                    <LazyLoadImage
                      src={image}
                      width={"100%"}
                      height={"100%"}
                      effect="blur"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              {user ? (
                <form onSubmit={submitRatingHandler} className="submitReviewForm">
                  <fieldset className="submitReview__fieldset">
                    <legend className="submitReview__legend">
                      Your review
                    </legend>
                    <span className="submitReview__required">
                      *Required fields
                    </span>
                    <div className="submitReview__fieldgroups">
                      <div className="submitReview__fieldhalf">
                        <label htmlFor="rating">Rating*</label>
                        <select
                          id="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very good</option>
                          <option value="5">5 - Excellent</option>
                        </select>
                      </div>
                      <div className="submitReview__fieldhalf">
                        <label htmlFor="header">Title</label>
                        <input type="text" name="header" onChange={(e) => setHeader(e.target.value)} />
                      </div>
                    </div>
                    <div className="submitReview__fieldtext">
                      <label htmlFor="header">Comment*</label>
                      <textarea
                        name=""
                        id=""
                        maxLength={500}
                        rows={10}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="submitReview__tips">
                      <div className="submitReview__tips-labels">
                        <span>Review tips:</span>
                        <i className="italicize">
                          <span>500 characters max</span>
                        </i>
                      </div>
                      <ul>
                        <li>
                          Determine whether you would recommend this product
                        </li>
                        <li>
                          Describe what activities you use this product for
                        </li>
                        <li>Describe the impact this product helps you make</li>
                        <li>25 characters minimum</li>
                      </ul>
                    </div>
                  </fieldset>
                  <fieldset className="submitReview__fieldset">
                    <div className="centered">
                      <button>Submit Review</button>
                    </div>
                  </fieldset>
                </form>
              ) : (
                <a href="/login">Sign in to leave a review</a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmitReview;
