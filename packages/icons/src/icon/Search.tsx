import React from "react";

import { IconProps } from "../types";

const Search: React.FC<IconProps> = ({ className, color, style }) => {
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
			<g clipPath="url(#clip0)">
				<path
					d="M0.858715 7.79157C1.40713 9.082 2.44571 10.1017 3.74598 10.6264C5.04624 11.1511 6.50168 11.1377 7.79211 10.5893C9.08254 10.0409 10.1023 9.00233 10.6269 7.70206C11.1516 6.4018 11.1383 4.94636 10.5899 3.65593C10.0414 2.3655 9.00287 1.34578 7.7026 0.821098C6.40234 0.296417 4.9469 0.309754 3.65647 0.858174C2.36604 1.40659 1.34632 2.44517 0.821639 3.74544C0.296958 5.0457 0.310294 6.50114 0.858715 7.79157V7.79157Z"
					stroke={color}
					strokeWidth="0.875"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.46228 9.46167L13.5625 13.5625"
					stroke={color}
					strokeWidth="0.875"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0">
					<rect width="14" height="14" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Search;
