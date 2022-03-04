import React from "react";
import { createUseStyles } from "react-jss";
import { AdZoneProps, DefaultTheme } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  backgroundImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  adContainer: {
    overflow: "hidden",
    backgroundColor: theme.colors.white,
  },
}));

const Ad: React.FC<AdZoneProps> = ({ width, height, adProps }) => {
  const classes = useStyles();

  return (
    <div data-testid="ad">
      <div
        style={{ width: `${width}px`, height: `${height}px` }}
        className={classes.adContainer}
      >
        <img
          className={classes.backgroundImage}
          src={adProps.backgroundImage}
          alt={adProps.name}
        />
      </div>
    </div>
  );
};

export default Ad;
