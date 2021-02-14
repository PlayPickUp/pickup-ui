import React from "react";

import { IconProps } from "../../types";

const SubtractCircle: React.FC<IconProps> = ({ className, color, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      width="300"
      height="300"
      className={className}
      style={style}
    >
      <g transform="matrix(12.5,0,0,12.5,0,0)">
        <path
          d="M7.5 12L16.5 12"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M0.750 12.000 A11.250 11.250 0 1 0 23.250 12.000 A11.250 11.250 0 1 0 0.750 12.000 Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
      </g>
    </svg>
  );
};

export default SubtractCircle;
