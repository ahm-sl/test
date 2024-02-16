import React, { Component } from "react";

import myimg4 from "../../images/avataaars.svg"

export default class Start extends Component {
  render() {
    return (
      <>
        <div className="home d-flex justify-content-center align-items-center text-black">
          <div  className="text-center">
            <img  src={myimg4} alt="" className="mb-3"/>

            <div
              
              className="text-center pt-4"
            >
              <h2
            
                className="text-uppercase mb-3 fs-1 fw-bolder"
              >
                start Framework
              </h2>
              <div
            
                className="d-flex align-items-center justify-content-center mb-3"
              >
                <div
                
                  className="line me-3"
                
                ></div>
    
               
              </div>
            </div>

            <div >
              Graphic Artist - Web Designer - Illustrator
            </div>
          </div>
        </div>
      </>
    );
  }
}
