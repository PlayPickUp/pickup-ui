import React from "react";

import { IconProps } from "../types";

const Countdown: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={style}
			className={className}
		>
			<path
				d="M22 5.71999L17.4 1.85999L16.11 3.38999L20.71 7.24999L22 5.71999ZM7.88 3.38999L6.6 1.85999L2 5.70999L3.29 7.23998L7.88 3.38999ZM12.5 7.99999H11V14L15.75 16.85L16.5 15.62L12.5 13.25V7.99999ZM12 3.99999C7.03 3.99999 3 8.02999 3 13C3 17.97 7.02 22 12 22C16.97 22 21 17.97 21 13C21 8.02999 16.97 3.99999 12 3.99999ZM12 20C8.13 20 5 16.87 5 13C5 9.12999 8.13 5.99999 12 5.99999C15.87 5.99999 19 9.12999 19 13C19 16.87 15.87 20 12 20Z"
				fill={color}
			/>
		</svg>
	);
};

export default Countdown;
