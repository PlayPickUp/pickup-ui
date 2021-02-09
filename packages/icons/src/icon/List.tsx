import React from "react";
import { IconProps } from "../types";

const List: React.FC<IconProps> = ({ className, color, style }) => {
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
					d="M8.25 3.748L23.25 3.748"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M8.25 12.748L23.25 12.748"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M8.25 21.748L23.25 21.748"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M0.750 0.748 L5.250 0.748 L5.250 5.248 L0.750 5.248 Z"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M0.750 9.748 L5.250 9.748 L5.250 14.248 L0.750 14.248 Z"
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				></path>
				<path
					d="M0.750 18.748 L5.250 18.748 L5.250 23.248 L0.750 23.248 Z"
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

export default List;
