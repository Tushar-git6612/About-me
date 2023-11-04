import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Cv from "../../Images/react.jpg";
// import { saveAs } from "file-saver";

interface myCvbtn {
  btnContent: string;
  px: number;
}

function Cvbtn(props: myCvbtn) {
  return (
    <Fragment>
      <div className="d-flex mt-4 justify-content-center align-items-center">
        <div>
          <a
            href={Cv}
            type="button"
            style={{ fontWeight: "700" }}
            className={`px-${props.px} btn btn-lg cvBtn`}
            download={Cv}
          >
            {props.btnContent}
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Cvbtn;
