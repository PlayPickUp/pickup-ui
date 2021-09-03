import React from "react";

import { IconProps } from "../types";

const Profile: React.FC<IconProps> = ({ className, color, style }) => {
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
				d="M3.9375 3.5C3.9375 4.31223 4.26016 5.09118 4.83449 5.66551C5.40882 6.23984 6.18777 6.5625 7 6.5625C7.81223 6.5625 8.59118 6.23984 9.16551 5.66551C9.73984 5.09118 10.0625 4.31223 10.0625 3.5C10.0625 2.68777 9.73984 1.90882 9.16551 1.33449C8.59118 0.760155 7.81223 0.4375 7 0.4375C6.18777 0.4375 5.40882 0.760155 4.83449 1.33449C4.26016 1.90882 3.9375 2.68777 3.9375 3.5V3.5Z"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.3125 13.5625C1.3125 12.0541 1.91172 10.6074 2.97833 9.54083C4.04494 8.47422 5.49158 7.875 7 7.875C8.50842 7.875 9.95506 8.47422 11.0217 9.54083C12.0883 10.6074 12.6875 12.0541 12.6875 13.5625"
				stroke={color}
				strokeWidth="0.875"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Profile;
