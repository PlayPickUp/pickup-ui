import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";

import { ChipProps, DefaultTheme } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  defaultActive: {
    backgroundColor: theme.colors.white,
    outline: "none",
  },
  root: {
    display: "flex",
    position: "relative",
    height: 36,
    width: "auto",
    padding: `${theme.spacing.base * 2}px ${theme.spacing.base * 5}px`,
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 12,
    lineHeight: "20px",
    letterSpacing: "0.1px",
    backgroundColor: theme.colors.grey.light,
    border: `1px solid ${theme.colors.grey.light}`,
    borderRadius: theme.borderRadius * 2,
    appearance: "none",
    transition: "all 150ms ease-out",
    "&:hover, &:focus, &:active": {
      extend: "defaultActive",
    },
  },
  primaryActive: {
    border: `1px solid ${theme.colors.primary.base}`,
    backgroundColor: theme.colors.white,
    color: theme.colors.primary.base,
    outline: "none",
  },
  primary: {
    backgroundColor: theme.colors.primary.light,
    border: `1px solid ${theme.colors.primary.light}`,
    color: theme.colors.grey.dark,
    "&:hover": {
      border: `1px solid ${theme.colors.primary.base}`,
      backgroundColor: theme.colors.primary.light,
    },
    "&:focus, &:active": {
      extend: "primaryActive",
    },
  },
  secondaryActive: {
    border: `1px solid ${theme.colors.secondary.base}`,
    backgroundColor: theme.colors.white,
    color: theme.colors.secondary.base,
    outline: "none",
  },
  secondary: {
    backgroundColor: theme.colors.secondary.light,
    border: `1px solid ${theme.colors.secondary.light}`,
    color: theme.colors.grey.dark,
    "&:hover": {
      border: `1px solid ${theme.colors.secondary.base}`,
      backgroundColor: theme.colors.secondary.light,
    },
    "&:focus, &:active": {
      extend: "secondaryActive",
    },
  },
  disabled: {
    cursor: "not-allowed",
    border: `1px solid ${theme.colors.grey.light}`,
    backgroundColor: theme.colors.grey.light,
    color: theme.colors.grey.base,
    "&:hover, &:focus, &:active": {
      cursor: "not-allowed",
      border: `1px solid ${theme.colors.grey.light}`,
      backgroundColor: theme.colors.grey.light,
      color: theme.colors.grey.base,
    },
  },
  isActive: (props) => {
    if (props.color === "primary") {
      return {
        extend: "primaryActive",
      };
    } else if (props.color === "secondary") {
      return {
        extend: "secondaryActive",
      };
    } else {
      return {
        extend: "defaultActive",
      };
    }
  },
}));

const Chip: React.FC<ChipProps> = ({
  isActive,
  style,
  className,
  color,
  disabled,
  label,
  onClick,
}) => {
  const classes = useStyles({ color, disabled });

  return (
    <button
      disabled={disabled}
      className={classNames({
        [classes.root]: true,
        [classes.primary]: color && color === "primary",
        [classes.secondary]: color && color === "secondary",
        [classes.disabled]: disabled,
        [classes.isActive]: isActive,
        className,
      })}
      onClick={onClick}
      style={style}
    >
      <span>{label}</span>
    </button>
  );
};

export default Chip;
