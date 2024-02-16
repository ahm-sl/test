import React, { Component } from "react";

import myimg from "../../images/poert1.4417330275f78faa31c3.png";
import myimg1 from "../../images/port2.6554473016d32b343f02.png";
import myimg2 from "../../images/port3.494a4a914b5471b41f3e.png";

export default class About extends Component {
  render() {
  
    return (
      <>
    

        <section id="services" className="services-mf py-5   bg-info ">
          <div className="container p-4">
            <div className="row ">
              <div className="text-center pt-4 ">
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white">
                  portfolio component
                </h2>
                <div className="">
                  <div className=""></div>
                  <i className="fa-solid fa-star text-white"></i>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className="row pt-5 g-4 text-center">
              <div className="col-lg-4">
                <div className="">
                  <img src={myimg} width="350" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <img src={myimg1} width="350" alt="" />
              </div>
              <div className="col-lg-4">
                <img src={myimg2} width="350" alt="" />
              </div>
              <div className="col-lg-4">
                <div className="">
                  <img src={myimg} width="350" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <img src={myimg1} width="350" alt="" />
              </div>
              <div className="col-lg-4">
                <img src={myimg2} width="350" alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
