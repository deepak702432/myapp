import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>APJ ABDUL KALAM GROUP OF INSTITUTIONS</h2>
                  <ul>
                    <li>
                      <a href="/About">About</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>

                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Contact us</h2>
                  <ul>
                    <li>
                      <a href="/Contact">Enquiry Now</a>
                    </li>
                    <li>
                      <a href="/Contact">Contact</a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2></h2>
                  <ul>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href=""
                        target="_thapa">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2023 APJ ABDUL KALAM GROUP OF INSTITUTIONS. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
