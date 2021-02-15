import React from "react";

import { IconProps } from "../types";

const Delete: React.FC<IconProps> = ({ className, color, style }) => {
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
					d="M17.25,21H6.75a1.5,1.5,0,0,1-1.5-1.5V6h13.5V19.5A1.5,1.5,0,0,1,17.25,21Z"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M9.75 16.5L9.75 10.5"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M14.25 16.5L14.25 10.5"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M2.25 6L21.75 6"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M14.25,3H9.75a1.5,1.5,0,0,0-1.5,1.5V6h7.5V4.5A1.5,1.5,0,0,0,14.25,3Z"
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

export default Delete;
