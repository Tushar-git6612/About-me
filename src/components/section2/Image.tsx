import React, { Fragment, memo } from "react";

interface myImage1 {
  Dynamic: string;
}

function Image1(props: myImage1) {
  return (
    <Fragment>
      <img src={props.Dynamic} className="w-100" style={{ cursor:"pointer", objectFit:"fill", objectPosition:"100% 100%", height:"270px",}} alt="" />
    </Fragment>
  );
}

export default memo(Image1);

interface myImage2 {
  Services: string;
}

export function Image2(props: myImage2) {
  return (
    <Fragment>
      <img src={props.Services} className="w-100" style={{ cursor:"pointer", objectFit:"fill", objectPosition:"100% 100%", height:"270px"}} alt="" />
    </Fragment>
  );
}

interface myImage3 {
  Static: string;
}

export function Image3(props: myImage3) {
  return (
    <Fragment>
      <img src={props.Static} className="w-100" style={{ cursor:"pointer", objectFit:"fill", objectPosition:"100% 100%", height:"270px"}} alt="" />
    </Fragment>
  );
}
