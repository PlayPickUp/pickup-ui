import React from "react";

import { IconProps } from "../types";

const AddCircle: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 140 140"
			width="140"
			height="140"
			className={className}
			style={style}
		>
			<g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
				<path
					d="M12 7.5L12 16.5"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
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

export default AddCircle;
