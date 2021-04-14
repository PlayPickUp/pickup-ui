import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import { DefaultTheme, PaperProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
    padding: (props: PaperProps) =>
      props.padding ? props.padding : theme.spacing.base * 4,
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: theme.spacing.base * 2,
    border: "1px solid #f1f1f1",
  },
}));

const Paper: React.FC<PaperProps> = ({
  padding,
  children,
  style,
  className,
}) => {
  const classes = useStyles({ padding });
  return (
    <div className={classNames(classes.root, className)} style={style}>
      {children}
    </div>
  );
};

export default Paper;
