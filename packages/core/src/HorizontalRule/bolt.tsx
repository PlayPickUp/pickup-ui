import React from "react";

const Bolt = (props) => {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75469 0L8.28319 6.96H14.4L5.64531 18L6.11681 11.04H0L8.75469 0Z"
        fill={props.fill}
      />
    </svg>
  );
};
export default Bolt;
