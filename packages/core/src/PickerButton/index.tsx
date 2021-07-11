import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import color from "color";

import bolt from "./bolt.svg";

import { DefaultTheme, PickerButtonProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  "@keyframes growRight": {
    from: { width: 0 },
    to: { width: (props) => `${props.result}%` },
  },
  root: {
    display: "block",
    position: "relative",
    width: "100%",
    height: "auto",
    minHeight: 38,
    padding: theme.spacing.base,
    backgroundColor: theme.colors.grey.light,
    fontSize: 14,
    color: theme.colors.black,
    border: `1px solid ${theme.colors.grey.base}`,
    borderRadius: 5,
    textAlign: "center",
    transition: `background-color 75ms ease`,
    "&:hover": {
      backgroundColor: color(theme.colors.grey.light).darken(0.05).toString(),
    },
  },
  result: {
    backgroundColor: theme.colors.white,
    "&:hover": {
      backgroundColor: theme.colors.white,
    },
  },
  resultPicked: {
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.purple.base}`,
    "&:hover": {
      backgroundColor: theme.colors.white,
    },
  },
  textContainer: {
    display: "flex",
    position: "relative",
    width: "100%",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `0 ${theme.spacing.base * 2}px`,
    zIndex: 2,
  },
  resultContainer: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bolt: {
    display: "none",
  },
  isPick: {
    display: "block",
    "& img": {
      position: "relative",
      width: 11,
      height: "auto",
      marginRight: theme.spacing.base * 3,
    },
  },
  bar: {
    display: "block",
    position: "absolute",
    top: 4,
    left: 4,
    width: "calc(100% - 8px)",
    height: "calc(100% - 8px)",
    borderRadius: 2,
    zIndex: 1,
    "& > div": {
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: "100%",
      backgroundColor: theme.colors.purple.light,
    },
  },
  barActive: {
    "& > div": {
      animation: "$growRight 1s cubic-bezier(0.280, 0.520, 0.630, 0.990) 1",
      width: (props) => `${props.result}%`,
    },
  },
}));

const PickerButton: React.FC<PickerButtonProps> = ({
  className,
  displayText,
  onClick,
  style,
  showResult = false,
  result,
  isPick,
}) => {
  const classes = useStyles({ result });

  return (
    <button
      data-testid="picker-button"
      className={classNames({
        [classes.root]: true,
        [classes.result]: showResult,
        [classes.resultPicked]: isPick,
        className: className,
      })}
      onClick={onClick}
      style={style}
    >
      <div
        className={classNames({
          [classes.bar]: true,
          [classes.barActive]: showResult,
        })}
      >
        <div />
      </div>
      {!showResult ? (
        <div style={{ zIndex: 2, position: "relative" }}>{displayText}</div>
      ) : (
        <div className={classes.textContainer}>
          <div>{displayText}</div>
          <div className={classes.resultContainer}>
            <div
              className={classNames({
                [classes.bolt]: true,
                [classes.isPick]: isPick,
              })}
            >
              <img src={bolt} aria-hidden role="presentation" />
            </div>
            <div>{result}%</div>
          </div>
        </div>
      )}
    </button>
  );
};

export default PickerButton;
