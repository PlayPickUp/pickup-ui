import React, { useState } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import Color from "color";

import { defaultTheme } from "../ThemeProvider/defaultTheme";
import Icon from "../Icon";
import { DefaultTheme, FabProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  "@keyframes fadeIn": {
    from: { opacity: 0, bottom: `calc(100% + 0px)` },
    to: { opacity: 1, bottom: `calc(100% + ${theme.spacing.base * 2}px)` },
  },
  root: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: (props) => (props.size === "small" ? 42 : 54),
    height: (props) => (props.size === "small" ? 42 : 54),
    overflow: "visible",
  },
  button: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    width: (props) => (props.size === "small" ? 42 : 54),
    height: (props) => (props.size === "small" ? 42 : 54),
    backgroundColor: (props) =>
      props.color ? props.color : theme.colors.white,
    border: "none",
    borderRadius: "50%",
    "&:hover, &:focus, &:active": {
      backgroundColor: (props) =>
        props.color
          ? Color(props.color).lighten(0.5).toString()
          : theme.colors.purple.light,
    },
  },
  title: {
    position: "absolute",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 12,
    textAlign: "center",
    bottom: `calc(100% + ${theme.spacing.base}px)`,
    left: "auto",
    right: "auto",
    width: "auto",
    minWidth: 100,
    backgroundColor: Color(theme.colors.black).fade(0.05).toString(),
    border: `1px solid ${theme.colors.black}`,
    borderRadius: theme.borderRadius,
    padding: theme.spacing.base,
    color: theme.colors.white,
    opacity: 0,
    animationName: "$fadeIn",
    animationDelay: "100ms",
    animationDuration: "300ms",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-out",
  },
  disabled: {
    cursor: "not-allowed",
    backgroundColor: theme.colors.grey.light,
  },
}));

const Fab: React.FC<FabProps> = ({
  className,
  color,
  disablePopOver = false,
  disabled = false,
  icon: IconName,
  iconColor = defaultTheme.colors.grey.base,
  innerClassName,
  innerStyle,
  onClick,
  size = "small",
  style,
  title,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const classes = useStyles({ size, color });

  const toggleHovered = () => setIsHovered(!isHovered);

  return (
    <div
      data-testid="fab-root"
      className={classNames(classes.root, className)}
      style={style}
    >
      {isHovered && !disablePopOver ? (
        <div className={classes.title} role="label">
          {title}
        </div>
      ) : null}

      <button
        data-testid="fab-target"
        className={classNames({
          [classes.button]: true,
          [innerClassName]: innerClassName,
          [classes.disabled]: disabled,
        })}
        style={innerStyle}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={toggleHovered}
        onMouseLeave={toggleHovered}
      >
        <Icon style={{ borderRadius: "50%" }} color={iconColor}>
          {React.createElement(IconName)}
        </Icon>
      </button>
    </div>
  );
};

export default Fab;
