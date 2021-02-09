import React from "react";

import { IconProps } from "../types";

const Create: React.FC<IconProps> = ({ className, color, style }) => {
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
					d="M22.627,14.87,15,22.5l-3.75.75L12,19.5l7.631-7.63a2.113,2.113,0,0,1,2.991,0l.009.008A2.116,2.116,0,0,1,22.627,14.87Z"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M8.246,20.25h-6a1.5,1.5,0,0,1-1.5-1.5V2.25a1.5,1.5,0,0,1,1.5-1.5h15a1.5,1.5,0,0,1,1.5,1.5V9"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M8.246 5.25L14.246 5.25"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M5.246 9.75L14.246 9.75"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M5.246 14.25L12.746 14.25"
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

export default Create;
