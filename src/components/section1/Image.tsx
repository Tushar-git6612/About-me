import { Fragment, memo } from "react";
// import reactCode from "../../Images/reactCode.jpg";
import reactCode from "../../Images/reactCode.jpg";

module.exports = {
  // other webpack configurations...

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images", // specify the output directory for images
            },
          },
        ],
      },
    ],
  },
};

const Image = () => {
  return (
    <Fragment>
      <img
        src={reactCode}
        alt=""
        className="w-100 h-100"
        style={{ objectFit: "fill" }}
      />
    </Fragment>
  );
};

export default memo(Image);
