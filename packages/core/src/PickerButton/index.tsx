import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import color from "color";

import { DefaultTheme, PickerButtonProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
    minHeight: 38,
    padding: theme.spacing.base,
    backgroundColor: theme.colors.grey.light,
    fontSize: 16,
    color: theme.colors.black,
    border: `1px solid ${theme.colors.grey.base}`,
    borderRadius: 5,
    textAlign: "center",
    transition: `background-color 75ms ease`,
    "&:hover": {
      backgroundColor: color(theme.colors.grey.light).darken(0.05).toString(),
    },
  },
}));

const PickerButton: React.FC<PickerButtonProps> = ({
  className,
  displayText,
  onClick,
  style,
}) => {
  const classes = useStyles();

  return (
    <button
      data-testid="picker-button"
      className={classNames(classes.root, className)}
      onClick={onClick}
      style={style}
    >
      {displayText}
    </button>
  );
};

export default PickerButton;
