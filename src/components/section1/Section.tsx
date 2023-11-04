import React, { Fragment, memo, useState } from "react";
import Image from "./Image";
import { NavLink } from "react-router-dom";
import Skills from "./Skills";
import Experience from "./Experience";
import Qualification from "./Qualification";

interface mySection {}

const Section: React.FC<mySection> = (props) => {
  const [key, setKey] = useState("Experience");

  const getExperience = (): void => {
    setKey(key !== "Experience" ? "Experience" : key);
  };

  const getSkills = (): void => {
    setKey(key !== "Skills" ? "Skills" : key);
  };

  const getQualification = (): void => {
    setKey(key !== "Qualification" ? "Qualification" : key);
  };

  const skillsProps: {
    ReactJS: string;
    Js: string;
    HTML: string;
    CSS: string;
    Bootstrap: string;
    Ts: string;
    Git: string;
  } = {
    ReactJS: "ReactJS",
    Js: "JavaScript",
    HTML: "HTML5",
    CSS: "CSS3",
    Bootstrap: "BOOTSTRAP",
    Ts: "TypeScript",
    Git: "GIT",
  };

  const navLinkStyles = ({ isActive }: any) => {
    if (isActive) {
      return {
        // color: isActive ? "#56cdfc" : "white",
        borderBottom: isActive ? "3px solid #56cdfc" : "none",
      };
    }
  };

  return (
    <Fragment>
      <section
        id="about"
        className="p-md-5 pt-3 aboutSeciton"
        style={{ background: "radial-gradient(circle, #216478, #2E6D80)" }}
      >
        <div className="row px-2 mx-3">
          <div className="col-lg-4 col-12">
            <div className="w-100 h-100 p-2">
              <Image />
            </div>
          </div>
          <div className="col-lg-8 mt-3 mb-md-0 col-12 px-3">
            <div className="d-flex flex-column justify-content-start p-2 ms-3 text-white">
              <div className=" ">
                <h4>
                  <span>About Me</span>
                </h4>
              </div>
              <div className="my-3">
                <p>
                  Enthusiastic and dedicated Fresher Frontend Developer with a
                  passion for creating visually appealing and user-friendly
                  websites. Proficient in HTML5, CSS3, Bootstrap, JavaScript,
                  ReactJS, and Redux. Eager to contribute skills and learnings
                  to a dynamic development team.
                </p>
              </div>
              <div>
                <div className="d-flex my-2">
                  <NavLink
                    to="/"
                    className="me-2 aboutLink"
                    style={navLinkStyles}
                    onClick={getSkills}
                  >
                    Skills
                  </NavLink>
                  <NavLink
                    to="/"
                    className="mx-3 aboutLink"
                    style={navLinkStyles}
                    onClick={getExperience}
                  >
                    Experience
                  </NavLink>
                  <NavLink
                    to="/"
                    className="mx-3 aboutLink"
                    style={navLinkStyles}
                    onClick={getQualification}
                  >
                    Qualification
                  </NavLink>
                </div>
              </div>
              {key === "Skills" && <Skills skillsProps={skillsProps} />}
              {key === "Experience" && <Experience />}
              {key === "Qualification" && <Qualification />}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default memo(Section);
