import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import Bolt from "./bolt";

import { DefaultTheme, HorizontalRuleProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    alignItems: "center",
    padding: theme.spacing.base * 2,
    "& * + *": {
      display: "inline-block",
    },
  },
  rule: {
    border: "none",
    backgroundColor: "currentColor",
    height: 1,
    width: "100%",
  },
  bolt: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: 120,
    textAlign: "center",
    "& img": {
      width: 14,
      height: "auto",
    },
  },
}));

const HorizontalRule: React.FC<HorizontalRuleProps> = ({
  showBolt,
  className,
  style,
}) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, className)} style={style}>
      {showBolt ? (
        <>
          <hr className={classes.rule} />
          <div className={classes.bolt}>
            <Bolt fill="currentColor" />
          </div>
          <hr className={classes.rule} />{" "}
        </>
      ) : (
        <hr className={classes.rule} />
      )}
    </div>
  );
};

export default HorizontalRule;
