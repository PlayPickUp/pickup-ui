import React from "react";
import { defaultTheme as PickUpTheme } from "../ThemeProvider/defaultTheme";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import { IconBaseProps } from "../types";

const useStyles = createUseStyles({
  root: {
    position: "relative",
    width: (props) => props.size,
    maxWidth: (props) => props.size,
    height: "auto",
    "& > svg": {
      display: "block",
      position: "relative",
      width: "100%",
      height: "auto",
    },
  },
});

const Icon: React.FC<IconBaseProps> = ({
  children,
  className,
  color = PickUpTheme.colors.black,
  size = 20,
  style,
}) => {
  const classes = useStyles({ size });
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { color, size });
    }
    return child;
  });
  return (
    <div
      data-testid="icon"
      className={classNames(classes.root, className)}
      style={style}
    >
      {childrenWithProps}
    </div>
  );
};

export default Icon;
