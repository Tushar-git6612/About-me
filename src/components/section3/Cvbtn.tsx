import React, { Fragment } from "react";
import { Link } from "react-router-dom";

interface myCvbtn{
   btnContent: string;
   px: number
}

function Cvbtn(props : myCvbtn) {
  return (
    <Fragment>
      <div className="d-flex mt-4 justify-content-center align-items-center">
        <div>
          <Link
            to=""
            type="button"
            style={{ fontWeight: "700" }}
            className={`px-${props.px} btn btn-lg cvBtn`}
          >
            {props.btnContent}
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Cvbtn;
