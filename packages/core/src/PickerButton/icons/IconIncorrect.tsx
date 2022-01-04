import React from "react";

import { IconProps } from "../../types";

const CorrectDiamond: React.FC<IconProps> = ({
  className,
  color = "#FF1244",
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
      <path d="M3 6L11 14" stroke={color} strokeWidth="2.5" />
      <path d="M11 6L3 14" stroke={color} strokeWidth="2.5" />
    </svg>
  );
};

export default CorrectDiamond;
