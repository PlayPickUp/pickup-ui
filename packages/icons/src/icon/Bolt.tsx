import React from "react";

import { IconProps } from "../types";

const Bolt: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<svg
			width="15"
			height="18"
			viewBox="0 0 15 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8.75469 0L8.28319 6.96H14.4L5.64531 18L6.11681 11.04H0L8.75469 0Z"
				fill={color}
			/>
		</svg>
	);
};

export default Bolt;
