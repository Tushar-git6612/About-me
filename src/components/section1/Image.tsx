import{Fragment, memo} from 'react';
import reactCode from "../../Images/reactCode.jpg";

const Image = () => {
  return (
    <Fragment>
      <img src={reactCode} alt="" className="w-100 h-100" style={{objectFit:"fill"}} />
    </Fragment>
  )
}

export default memo(Image);