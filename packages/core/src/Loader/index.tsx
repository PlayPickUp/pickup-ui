import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import { DefaultTheme } from "../types";
import Typography from "../Typography";

export interface LoaderProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  text?: string;
}

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  "@keyframes pulse": {
    from: { width: 55, height: 55, opacity: 0 },
    "10%": { opacity: 1 },
    "50%": { opacity: 1 },
    to: { width: 75, height: 75, opacity: 0 },
  },
  root: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  animContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconBg: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    height: 65,
    borderRadius: "50%",
    backgroundColor: theme.colors.purple.light,
    animationName: "$pulse",
    animationFillMode: "forwards",
    animationIterationCount: "infinite",
    animationDuration: "1000ms",
    animationTimingFunction: "ease-out",
  },
  iconContainer: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: "50%",
    padding: 10,
    backgroundColor: theme.colors.purple.base,
    "& svg": {
      width: "100%",
      height: "auto",
    },
  },
}));

const Loader: React.FC<LoaderProps> = ({
  className,
  delay = 500,
  style,
  text = "Loading",
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) {
    return null;
  }

  return (
    <div className={classNames(classes.root, className)} style={style}>
      <div className={classes.animContainer}>
        <div className={classes.iconBg} />
        <div className={classes.iconContainer}>
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75469 0L8.28319 6.96H14.4L5.64531 18L6.11681 11.04H0L8.75469 0Z"
              fill="#FFF"
            />
          </svg>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <Typography variant="heading2" element="p">
          {text}
        </Typography>
      </div>
    </div>
  );
};

export default Loader;
