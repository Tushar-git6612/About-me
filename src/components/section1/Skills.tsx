import React, { Fragment, memo } from "react";
// import { NavLink } from "react-router-dom";

interface mySkills {
  skillsProps: {
    ReactJS: string;
    Js: string;
    HTML: string;
    CSS: string;
    Ts: string;
    Bootstrap: string;
    Git: string;
  };
}

function Skills(props: mySkills) {
  return (
    <Fragment>
      <div className="d-flex flex-column my-2 p-2">
        <h5 className="my-2">
          <span>{props.skillsProps.ReactJS}</span>
        </h5>
        <h5 className="my-2">
          <span>{props.skillsProps.Js}</span>
        </h5>
        <h5 className="my-2">
          <span>{props.skillsProps.Ts}</span>
        </h5>
        <h5 className="my-2">
          <span>{props.skillsProps.HTML}</span>
        </h5>
        <h5 className="my-2">
          <span>{props.skillsProps.CSS}</span>
        </h5>
        <h5 className="my-2">
          <span>{props.skillsProps.Bootstrap}</span>
        </h5>
        <h5 className="my-2">
          <span>{props.skillsProps.Git}</span>
        </h5>
      </div>
    </Fragment>
  );
}

export default memo(Skills);
