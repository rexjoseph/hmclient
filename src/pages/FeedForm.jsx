import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import './FeedForm.css'

const FeedForm = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Announcement />
      <Navbar />
      <div class="container">
        <div className="feedback-div">
         <h1>Get in touch!</h1>
          <form className="checkout__form"
            action="https://formsubmit.co/help@hashingmart.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Feedback from Hashingmart"
            />
            <input
              type="hidden"
              name="_next"
              value="https://hashingmart.com/thankyou"
            />
            <div className="fieldSet">
              <div className="address_fields">
                <div className="datafield">
                  <div className="emaildata_wrapper">
                    <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required />
                  </div>
                </div>
                <div className="datafield">
                  <div className="emaildata_wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required />
                  </div>
                </div>
                <div className="datafield">
                  <div className="emaildata_wrapper">
                  <textarea
                    style={{
                      fontFamily: "inherit",
                      fontSize: "inherit",
                      width: "100%",
                      outline: "none",
                      color: "#7d7d7d",
                    }}
                    class="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              style={{ margin: "2.5rem 0 0" }}
              class="nav-btn"
            >
              Send feedback
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedForm;
