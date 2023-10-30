import React, { Fragment } from "react";
import Cvbtn from "./Cvbtn";
import Form from "./Form";


function Section() {
  return (
    <Fragment>
      <section
      id="contact"
        className="sec p-md-5 "
        style={{
          height: "100%",
          background: "radial-gradient(circle, #216478, #2E6D80)",
        }}
      >
        <div className="row px-4 mx-3">
          <div className="col-md-5 col-12">
            <div className="d-flex flex-column ps-2">
              <div className="text-capitalize text-white">
                <h1 style={{ fontSize: "50px" }}>
                  <span>Contact me</span>
                </h1>
              </div>
              <div className="text-white mt-5">
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "20px" }}
                >
                  <span>
                  <i className="fas mx-2 fa-regular fa-paper-plane" style={{color:"#f1f1f3"}}></i>
                  </span>
                  <span className="ms-1">example@gmail.com</span>
                </p>
              </div>
              <div className="text-white mt-2">
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "20px" }}
                >
                  <span>
                  <i className="fas mx-2 fa-regular fa-phone" style={{color:"#f1f1f3"}}></i>
                  </span>
                  <span className="ms-1">1234567890</span>
                </p>
              </div>
              <div className="mt-2 d-flex justify-content-start align-items-center">
                <div>
                    <span> 
                    <i className="fas mx-2 fa-brands fa-instagram fa-lg" style={{color:"#f1f1f3"}}></i>
                    </span>
                    <span> 
                    <i className="fas mx-2 fa-brands fa-github fa-lg" style={{color:"#f1f1f3"}}></i>
                    </span>
                    <span>
                    <i className="fas mx-2 fa-brands fa-whatsapp fa-lg"  style={{color:"#f1f1f3"}}></i>
                    </span>
                    <span>
                    <i className="fas mx-2 fa-light fa-envelope fa-lg" style={{color:"#f1f1f3"}}></i>
                    </span>
                </div>
              </div>
              <Cvbtn btnContent = "Download CV" px = {5}/>
            </div>
          </div>
          <div className="col-md-7 pt-3 pt-md-0 col-12">
              <div className="ps-2">
                  <Form/>
              </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Section;
