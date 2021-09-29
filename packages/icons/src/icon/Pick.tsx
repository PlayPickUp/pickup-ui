import React from "react";

import { IconProps } from "../types";

const Pick: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.5118 3.75024L13.0534 10.5167H19.0001L10.4888 21.2498L10.9472 14.4833H5.00049L13.5118 3.75024Z"
				fill={color}
			/>
		</svg>
	);
};

export default Pick;
