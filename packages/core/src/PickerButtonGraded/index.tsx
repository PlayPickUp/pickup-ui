import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import iconCorrect from "./icon_correct.svg";
import iconIncorrect from "./icon_incorrect.svg";

import { DefaultTheme, PickerButtonGradedProps } from "../types";

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
    backgroundColor: theme.colors.white,
    fontSize: 14,
    color: theme.colors.black,
    border: `1px solid ${theme.colors.grey.base}`,
    borderRadius: 5,
    textAlign: "center",
    transition: `background-color 75ms ease`,
  },
  result: {
    display: "block",
    "& img": {
      position: "relative",
      width: 11,
      height: "auto",
      marginRight: theme.spacing.base * 3,
    },
    backgroundColor: theme.colors.white,
    "&:hover": {
      backgroundColor: theme.colors.white,
    },
  },
  isCorrect: {
    border: `1px solid ${theme.colors.green.base}`,
  },
  isIncorrect: {
    border: `1px solid ${theme.colors.red.base}`,
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

const PickerButtonGraded: React.FC<PickerButtonGradedProps> = ({
  className,
  displayText,
  style,
  result,
  isCorrect,
  isIncorrect,
}) => {
  const classes = useStyles({ result });

  return (
    <button
      data-testid="picker-button-graded"
      className={classNames({
        [classes.root]: true,
        [classes.result]: true,
        [classes.isCorrect]: isCorrect,
        [classes.isIncorrect]: isIncorrect,
        [className]: className,
      })}
      style={style}
    >
      <div
        className={classNames({
          [classes.barCorrect]: isCorrect,
          [classes.barIncorrect]: isIncorrect,
          [classes.barActive]: true,
        })}
      >
        <div />
      </div>
      <div className={classes.textContainer}>
        <div>{displayText}</div>
        <div className={classes.resultContainer}>
          {isCorrect || isIncorrect ? (
            <div>
              <img
                src={isCorrect ? iconCorrect : iconIncorrect}
                aria-hidden
                role="presentation"
              />
            </div>
          ) : null}
          <div>{result}%</div>
        </div>
      </div>
    </button>
  );
};

export default PickerButtonGraded;
