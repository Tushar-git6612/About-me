import React, { Fragment, memo } from "react";
// import { Link } from "react-router-dom";

interface navbarProps {
  tushar: string;
  navItems: { home: string; work: string; about: string; contact: string };
}

// React.FC take types and interface and set the type to the type of props--
const Navbar: React.FC<navbarProps> = (props) => {
  return (
    <Fragment>
      {/* <nav className="navbar fixed-top d-none"> */}
      <nav className="navbar fixed-top d-md-block d-none">
        <div  style={{lineHeight:"30px"}} className="w-100 d-flex justify-content-between align-items-center mx-5 ">
          <div className="w-50">
            <h4 className="m-0 text-capitalize text-white" style={{fontSize:"30px", letterSpacing:"1px"}}>
              <span style={{color:"#56cdfc"}}>{props.tushar[0]}</span>
              <span>{props.tushar[1]}</span>
              <span>{props.tushar[2]}</span>
              <span>{props.tushar[3]}</span>
              <span>{props.tushar[4]}</span>
              <span>{props.tushar[5]}</span>
            </h4>
          </div>
          <div className="w-50">
            <ul className="d-flex me-5 justify-content-around align-items-center m-0">
              <li>
                <a href="#head" className="navlink">{props.navItems.home}</a>
              </li>
              <li>
                <a href="#work" className="navlink">{props.navItems.work}</a>
              </li>
              <li>
                <a href="#contact" className="navlink">{props.navItems.contact}</a>
              </li>
              <li>
                <a href="#about" className="navlink">{props.navItems.about}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default memo(Navbar);
