import React from "react";

import { IconProps } from "../types";

const DisqualifiedDiamond: React.FC<IconProps> = ({
	className,
	color,
	style,
}) => {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={style}
		>
			<path
				d="M21 1.73205C22.8564 0.660254 25.1436 0.660254 27 1.73205L41.7846 10.2679C43.641 11.3397 44.7846 13.3205 44.7846 15.4641V32.5359C44.7846 34.6795 43.641 36.6603 41.7846 37.7321L27 46.2679C25.1436 47.3397 22.8564 47.3397 21 46.2679L6.21539 37.7321C4.35899 36.6603 3.21539 34.6795 3.21539 32.5359V15.4641C3.21539 13.3205 4.35898 11.3397 6.21539 10.2679L21 1.73205Z"
				fill={color}
				stroke="white"
			/>
			<circle cx="24" cy="24" r="13" fill="white" />
			<path
				d="M31.0711 24L16.9289 24"
				stroke={color}
				stroke-width="3"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default DisqualifiedDiamond;
