import { Fragment } from "react";
import Dynamic from "../../Images/Dynamic.png";
import Services from "../../Images/services.png";
import Static from "../../Images/static.png";
import Image1, { Image2, Image3 } from "./Image";

function Section() {
  return (
    <Fragment>
      <section
      id="work"
        className="p-md-5 sec"
        style={{
          background: "radial-gradient(circle, #216478, #2E6D80)",
          height: "100%",
        }}
      >
        <div className="d-flex flex-column justify-content-center h-100 px-2 mx-3 text-white">
          <div className="p-3 mx-1">
            <h1>
              <span>
                My Work
                </span>
            </h1>
          </div>
          <div className="p-3 row mx-1 h-100 d-flex justify-content-between">
            <div
              className="col-md-3 istCol p-0 my-3 my-md-0 col-12 h-100 text-dark"
              style={{ position: "relative" }}
            >
              <Image1 Dynamic={Dynamic} />
              <div className="text-center istImageBox">
                <p
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: "25px",
                  }}
                  className="d-flex align-items-center p-2"
                >
                  <span className="ms-5">Login Website</span>
                    <i
                      className="fas m-2 fa-sharp fa-regular fa-code"
                      style={{ color: "#f1f1f3" }}
                    ></i>
                </p>
                <button type="button" className="btn">
                  {" "}
                  Go On
                </button>
              </div>
            </div>
            <div
              className="col-md-3 p-0 istCol  my-3 my-md-0 col-12 h-100"
              style={{ position: "relative" }}
            >
              <Image2 Services={Services} />
              <div
                className="text-center istImageBox"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "5",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: "25px",
                  }}
                  className="d-flex align-items-center p-2 justify-content-center"
                >
                  <span className="ms-5">Services Website</span>
                  <i
                    className="fas m-2 fa-sharp fa-regular fa-code"
                    style={{ color: "#f1f1f3" }}
                  ></i>
                </p> 
                <button type="button" className="btn">
                  {" "}
                  Go On
                </button>
              </div>
            </div>
            <div
              className="col-md-3 p-0 istCol my-3 my-md-0 col-12 h-100"
              style={{ position: "relative" }}
            >
              <Image3 Static={Static} />
              <div
                className="text-center istImageBox"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "5",
                }}
              >
                <p
                  style={{
                    fontWeight: "700",
                    color: "white",
                    fontSize: "25px",
                  }}
                  className="d-flex align-items-center p-2"
                >
                  <span className=" ms-5">Static Website</span>
                  <i
                    className="fas m-2 fa-sharp fa-regular fa-code"
                    style={{ color: "#f1f1f3" }}
                  ></i>
                </p>
                <button type="button" className="btn">
                  {" "}
                  Go On
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Section;
