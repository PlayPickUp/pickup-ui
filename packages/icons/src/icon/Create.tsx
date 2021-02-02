import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { IconProps } from "../types";

const Create: React.FC<IconProps> = ({ className, color, style }) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={faPlus}
      style={{ ...style, color: color || null }}
    />
  );
};

export default Create;
