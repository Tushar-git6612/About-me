import React, { Fragment, memo } from "react";
import Navbar from "../nav/Navbar";
import Section from "../section1/Section";
import Section2 from "../section2/Section";
import Section3 from "../section3/Section";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";

interface myHeader {
  headerProps: { Name: string; distt: string; role: string; skills: string };
}

const Header: React.FC<myHeader> = (props) => {
  let navItems: {
    home: string;
    work: string;
    contact: string;
    about: string;
  } = {
    home: "Home",
    work: "Work",
    contact: "Contact",
    about: "About",
  };

  return (
    <Fragment>
      <header id="head">
        <Navbar tushar="tushar" navItems={navItems} />
        <Sidebar />
        <div
          className="px-3"
          style={{ height: "90vh", zIndex: "9", position: "relative" }}
        >
          <div className="d-flex p-3 h-100 justify-content-start align-items-center">
            <div className="ms-4 d-flex flex-column p-2">
              <div className="">
                <p className="text-capitalize m-0 p-0 text-white">
                  <span
                    style={{
                      color: "#56cdfc",
                      fontWeight: "600",
                      fontSize: "50px",
                    }}
                  >
                    {props.headerProps.skills}
                  </span>
                  <span style={{ fontSize: "30px", color: "#56cdfc" }}>
                    {" "}
                    {props.headerProps.role}
                  </span>
                </p>
              </div>
              <div>
                <h4 className="text-white text-capitalize">
                  <span>Hi, </span>
                  <span>I'm</span>
                  <span style={{ color: "#56cdfc", fontSize: "40px" }}>
                    {" "}
                    {props.headerProps.Name}
                  </span>
                </h4>
              </div>
              <div>
                <h6 className="text-white text-capitalize">
                  <span style={{ fontSize: "25px" }}>from </span>
                  <span style={{ fontSize: "25px" }}>ladwa </span>
                  <span style={{ fontSize: "30px", color: "#56cdfc" }}>
                    {props.headerProps.distt}
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Section />
      <Section2 />
      <Section3 />
      <Footer />
    </Fragment>
  );
};

export default memo(Header);
