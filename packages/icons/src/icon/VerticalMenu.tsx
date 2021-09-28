import React from "react";

import { IconProps } from "../types";

const VerticalMenu: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<svg
			viewBox="0 0 14 14"
			height="14"
			width="14"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<g transform="matrix(0.5833333333333334,0,0,0.5833333333333334,0,0)">
				<path
					d="M9.362 20.628 A2.625 2.625 0 1 0 14.612 20.628 A2.625 2.625 0 1 0 9.362 20.628 Z"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M9.362 3.378 A2.625 2.625 0 1 0 14.612 3.378 A2.625 2.625 0 1 0 9.362 3.378 Z"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M9.362 12.003 A2.625 2.625 0 1 0 14.612 12.003 A2.625 2.625 0 1 0 9.362 12.003 Z"
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

export default VerticalMenu;
