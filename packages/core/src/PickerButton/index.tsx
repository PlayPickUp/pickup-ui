import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";
import color from "color";
import IconCorrect from "./icons/IconCorrect";
import IconIncorrect from "./icons/IconIncorrect";
import Bolt from "./icons/Bolt";

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
    border: `1px solid ${theme.colors.primary.dark}`,
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
    boxSizing: "border-box",
  },
  resultContainer: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  resultText: {
    color: theme.colors.primary.dark,
  },
  bolt: {
    display: "none",
  },
  hasIcon: {
    display: "block",
    position: "relative",
    width: 11,
    height: "auto",
    marginRight: theme.spacing.base * 3,
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
      backgroundColor: theme.colors.primary.transparent,
    },
  },
  nonPickedBar: {
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
      backgroundColor: theme.colors.grey.light,
    },
  },
  isCorrect: {
    border: `1px solid ${theme.colors.green.base}`,
  },
  isIncorrect: {
    border: `1px solid ${theme.colors.red.base}`,
  },
  barCorrect: {
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
      backgroundColor: theme.colors.green.light,
    },
  },
  barIncorrect: {
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
      backgroundColor: theme.colors.red.light,
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
  isCorrect,
  isIncorrect,
}) => {
  const classes = useStyles({ result });
  const theme: DefaultTheme = useTheme();

  const displayIcon = (): JSX.Element => {
    if (isCorrect) {
      return <IconCorrect color={theme.colors.green.base} />;
    } else if (isIncorrect) {
      return <IconIncorrect color={theme.colors.red.base} />;
    } else if (isPick) {
      return <Bolt color={theme.colors.primary.base} />;
    }
  };

  return (
    <button
      data-testid="picker-button"
      className={classNames({
        [classes.root]: true,
        [classes.result]: showResult,
        [classes.resultPicked]: isPick,
        [classes.isCorrect]: isCorrect,
        [classes.isIncorrect]: isIncorrect,
        [className]: className,
      })}
      onClick={onClick}
      style={style}
    >
      <div
        className={classNames({
          [classes.bar]: isPick ? true : false,
          [classes.nonPickedBar]: !isPick ? true : false,
          [classes.barActive]: showResult,
          [classes.barCorrect]: isCorrect,
          [classes.barIncorrect]: isIncorrect,
        })}
      >
        <div />
      </div>
      {!showResult ? (
        <div style={{ zIndex: 2, position: "relative" }}>{displayText}</div>
      ) : (
        <div className={classes.textContainer}>
          <div className={classNames({ [classes.resultText]: isPick })}>
            {displayText}
          </div>
          <div className={classes.resultContainer}>
            <div
              className={classNames({
                [classes.bolt]: true,
                [classes.hasIcon]: isPick || isCorrect || isIncorrect,
              })}
            >
              {displayIcon()}
            </div>
            <div className={classNames({ [classes.resultText]: isPick })}>
              {result}%
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default PickerButton;
