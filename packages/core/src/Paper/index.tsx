import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import logo from "./logo.svg";

import { DefaultTheme, PaperProps } from "../types";

const logoHeadingHeight = 52;

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
    padding: (props: PaperProps) =>
      props.padding ? props.padding : theme.spacing.base * 4,
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.08)",
    borderRadius: theme.spacing.base * 3,
    border: "1px solid #EAEAEB",
    paddingTop: ({ withLogo, padding }) =>
      withLogo
        ? logoHeadingHeight + (padding ? padding : theme.spacing.base * 4)
        : padding
        ? padding
        : theme.spacing.base * 4,
  },
  logoHeading: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    width: "100%",
    height: logoHeadingHeight,
    backgroundColor: theme.colors.primary.base,
    textAlign: "center",
    borderTopLeftRadius: theme.spacing.base * 3,
    borderTopRightRadius: theme.spacing.base * 3,
    "& img": {
      display: "inline-block",
      position: "relative",
      width: 100,
      height: "auto",
    },
  },
}));

const Paper: React.FC<PaperProps> = ({
  padding,
  children,
  style,
  className,
  withLogo,
}) => {
  const classes = useStyles({ padding, withLogo });
  return (
    <div className={classNames(classes.root, className)} style={style} data-testid="paper">
      {withLogo ? (
        <div className={classes.logoHeading}>
          <div>
            <img src={logo} alt="PickUp" role="presentation" />
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Paper;
