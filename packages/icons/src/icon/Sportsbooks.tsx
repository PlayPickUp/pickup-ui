import React from "react";

import { IconProps } from "../types";

const Sportsbooks: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 24 24"
			width="24px"
			height="24px"
			className={className}
			style={style}
		>
			<path
				d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.89 11.1C11.11 10.51 10.25 10.14 10.25 9.2C10.25 8.18 11.36 7.81 12.06 7.81C13.37 7.81 13.85 8.8 13.96 9.15L15.54 8.48C15.39 8.04 14.72 6.57 12.88 6.25V5H11.13V6.26C8.53 6.82 8.51 9.11 8.51 9.22C8.51 11.49 10.76 12.13 11.86 12.53C13.44 13.09 14.14 13.6 14.14 14.56C14.14 15.69 13.09 16.17 12.16 16.17C10.34 16.17 9.82 14.3 9.76 14.08L8.1 14.75C8.73 16.94 10.38 17.53 11.12 17.71V19H12.87V17.76C13.39 17.67 15.89 17.17 15.89 14.54C15.9 13.15 15.29 11.93 12.89 11.1Z"
				fill={color}
			/>
		</svg>
	);
};

export default Sportsbooks;
