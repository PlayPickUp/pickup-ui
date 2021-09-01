import React from "react";

import { IconProps } from "../types";

const CorrectDiamond: React.FC<IconProps> = ({ className, color, style }) => {
	console.log({ color });
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<path
				d="M21 1.732a6 6 0 016 0l14.7846 8.5359a6 6 0 013 5.1962v17.0718a6 6 0 01-3 5.1962L27 46.2679a6 6 0 01-6 0L6.2154 37.7321a6 6 0 01-3-5.1962V15.4641a6 6 0 013-5.1962L21 1.7321z"
				fill={color}
				stroke="#fff"
			/>
			<circle cx="24" cy="24" r="13" fill="#fff" />
			<path
				d="M18 24.2857l3.9866 3.4286L30 20"
				stroke={color}
				strokeWidth="3"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default CorrectDiamond;
