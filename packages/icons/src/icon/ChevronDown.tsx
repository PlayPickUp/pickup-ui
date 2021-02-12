import React from "react";

import { IconProps } from "../types";

const ChevronDown: React.FC<IconProps> = ({ className, color, style }) => {
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
					d="M23.25,7.311,12.53,18.03a.749.749,0,0,1-1.06,0L.75,7.311"
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

export default ChevronDown;
