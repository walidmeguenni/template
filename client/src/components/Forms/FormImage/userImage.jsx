import React from "react";
const ImageCard = ({image}) => {
  return (
    <div>
          <img
            src={image}
            alt=""
            style={{ width: "350px", height: "400px" }}
          />
    </div>
  );
};

export default ImageCard;