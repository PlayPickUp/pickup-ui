import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import { IconProps } from "../types";

const List: React.FC<IconProps> = ({ className, color, style }) => {
	return (
		<FontAwesomeIcon
			className={className}
			icon={faList}
			style={{ ...style, color: color || null }}
		/>
	);
};

export default List;
