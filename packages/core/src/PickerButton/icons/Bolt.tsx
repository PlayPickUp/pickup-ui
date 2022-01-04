import React from "react";

import { IconProps } from "../../types";

const Bolt: React.FC<IconProps> = ({ className, color = "#7A60FF", style }) => {
  return (
    <svg
      width="11"
      height="14"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.36237 0.299823L6.05619 5.22343H10.2945C10.4651 5.22343 10.5613 5.44374 10.4563 5.58743L4.42035 13.9212C4.30663 14.0792 4.07044 13.9834 4.08357 13.7775L4.40286 8.62876H0.247654C0.042081 8.62876 -0.0760121 8.36534 0.0552049 8.18813L5.90748 0.103456C6.06494 -0.107282 6.37549 0.0268221 6.36237 0.299823Z"
        fill={color}
      />
    </svg>
  );
};

export default Bolt;
