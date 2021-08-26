import classNames from "classnames";
import React from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme, DropdownProps } from "../types";

const backgroundImage = (color: string): string => {
  const hex = color.slice(1);
  return `url("data:image/svg+xml,%3Csvg width='8' height='9' viewBox='0 0 8 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.18457 -2.38419e-07H3.3252V6.42188L0.848633 3.94531L0.254883 4.54687L3.75488 8.04688L7.2627 4.54687L6.65332 3.94531L4.18457 6.42188V-2.38419e-07Z' fill='%23${hex}'/%3E%3C/svg%3E%0A")`;
};

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  defaultActive: {
    backgroundColor: theme.colors.white,
    outline: "none",
  },
  root: {
    position: "relative",
    height: 36,
    paddingTop: `${theme.spacing.base * 2}px`,
    paddingBottom: `${theme.spacing.base * 2}px`,
    paddingLeft: `${theme.spacing.base * 3}px`,
    paddingRight: `${theme.spacing.base * 6}px`,
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 12,
    lineHeight: "20px",
    letterSpacing: "0.1px",
    backgroundColor: theme.colors.grey.light,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right ${theme.spacing.base * 3}px center`,
    backgroundImage: backgroundImage(theme.colors.black),
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
    backgroundImage: backgroundImage(theme.colors.primary.base),
    color: theme.colors.primary.base,
    outline: "none",
  },
  primary: {
    backgroundColor: theme.colors.primary.light,
    border: `1px solid ${theme.colors.primary.light}`,
    color: theme.colors.grey.dark,
    backgroundImage: backgroundImage(theme.colors.grey.dark),
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
    backgroundImage: backgroundImage(theme.colors.secondary.base),
    outline: "none",
  },
  secondary: {
    backgroundColor: theme.colors.secondary.light,
    border: `1px solid ${theme.colors.secondary.light}`,
    color: theme.colors.grey.dark,
    backgroundImage: backgroundImage(theme.colors.grey.dark),
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
    backgroundImage: backgroundImage(theme.colors.grey.base),
    "&:hover, &:focus, &:active": {
      cursor: "not-allowed",
      border: `1px solid ${theme.colors.grey.light}`,
      backgroundColor: theme.colors.grey.light,
      color: theme.colors.grey.base,
    },
  },
}));

const Dropdown: React.FC<DropdownProps> = ({
  children,
  disabled = false,
  className = "",
  color = "default",
  ...props
}) => {
  const classes = useStyles();
  return (
    <select
      disabled={disabled}
      className={classNames({
        [classes.root]: true,
        [classes.primary]: color === "primary",
        [classes.secondary]: color === "secondary",
        [classes.disabled]: disabled,
        [className]: className,
      })}
      {...props}
    >
      {children}
    </select>
  );
};

export default Dropdown;
