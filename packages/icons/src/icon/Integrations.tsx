import React from "react";

import { IconProps } from "../types";

const Integrations: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<path
				d="M0.4375 7.875H6.125V11.8125H0.4375V7.875Z"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.75 13.5625H4.8125"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.28125 11.8125V13.5625"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.875 7.875H13.5625V11.8125H7.875V7.875Z"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.1875 13.5625H12.25"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.7188 11.8125V13.5625"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.15625 0.4375H9.84375V4.375H4.15625V0.4375Z"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.46875 6.125H8.53125"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7 4.375V6.125"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Integrations;
