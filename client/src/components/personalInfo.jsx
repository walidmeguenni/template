import React from "react";

import Vector from "../assets/images/Vector.png";
import Vector2 from "../assets/images/vector2.png";

const Info=({Title,Value,Icon })=>{
  return(
     <div className="info-flex">
        <div className="rectangle-info">
          <img src={Icon} alt="" />
        </div>
        <div className="part-info">
          <div className="part-title">{Title}</div>
          <div>${Value}</div>
        </div>
      </div>
  )
}

const personalInfo = () => {
  return (
    <>
     <div className="Manage-title">Earnings</div>
     <Info Title="Totale Earnings" Value='2400.00'Icon={Vector}/>
     <Info Title="Annual Earning" Value='1200.00'Icon={Vector2}/>
    </>
  );
};



export default personalInfo
