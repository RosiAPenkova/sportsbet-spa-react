import React from "react";



const SVG = ({
  style = {},
  fill = "none",
  width = "auto",
  height= "1em",
  className = "",
  viewBox = "0 0 216 248"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M107.973 248L216 137.675L180.468 54.4311H200.514V0H15.4323V54.4311H35.5315L0 137.675L107.973 248Z"
    />
  </svg>
);

export default SVG;
