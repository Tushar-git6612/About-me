import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <footer
        className="text-white"
        style={{ background: "radial-gradient(circle, #216478, #2E6D80)" }}
      >
        <div className="w-100 p-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="px-2">
              <h3>
                <span>Tushar</span>
              </h3>
            </div>
            <div className="p-1">
              <h5>
                <span style={{ color: "#56cdfc", fontSize:"30px" }}>ReactJS </span>
                <span>Frontend </span>
                <span>Developer</span>
              </h5>
            </div>
            <div
              className="mt-2 d-flex justify-content-start align-items-center pb-2"
              style={{ borderBottom: "2px solid #56cdfc" }}
            >
              <div>
                <span>
                  <i
                    className="fas mx-3 fa-brands fa-instagram fa-lg"
                    style={{ color: "#f1f1f3" }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fas mx-3 fa-brands fa-github fa-lg"
                    style={{ color: "#f1f1f3" }}
                  ></i>
                </span>
                <span>
                  <i
                    className="fas mx-2 fa-light fa-envelope fa-lg"
                    style={{ color: "#f1f1f3" }}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
