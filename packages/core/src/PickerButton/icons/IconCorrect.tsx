import React from "react";

import { IconProps } from "../../types";

const IconCorrect: React.FC<IconProps> = ({
  className,
  color = "#25DA95",
  style,
}) => {
  return (
    <svg
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M2 10.3506L5.6958 13.7412L11.81 6.57227"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCorrect;
