import React,{Fragment, memo} from 'react'

interface myQualification{

}

function Qualification(props: myQualification) {
  return (
    <Fragment>
      <div className="d-flex flex-column my-2 p-2">
         <ul className="ps-2">
            <li className="my-3 text-capitalize">10th</li>
            <li className="my-3 text-capitalize">12th</li>
            <li className="my-3 text-capitalize">Pursuing Bachelor of Art</li>
         </ul>
      </div>
    </Fragment>
  )
}

export default memo(Qualification);