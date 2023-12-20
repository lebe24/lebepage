/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                <h6 className="portfolio-logo">EMMANUEL</h6>
                  {/* <img src={`${appData.lightLogo}`} alt="" /> */}
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <a href="mailto:princeagezinweke@gmail.com">
                      <span>Email : </span> Emmanuel.philipel@yahoo.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+2349024847299">
                      <span>Phone : </span> (+44) 744 835 4050
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Me</h6>
                <div className="social">
                  <a target="_blank" rel="noreferrer" href="https://github.com/lebe24" className="icon">
                    <i className="fab fa-github"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/emmanuelphilipel" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/emmanuellebe24" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="copyrights text-center">
          <p>
            © 2022 - {new Date().getFullYear()} <a href="#0" className="portfolio-logo-footer"> LEBE PAGE</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
