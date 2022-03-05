import React from "react";
import { createUseStyles } from "react-jss";
import { AdZoneProps, DefaultTheme } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  backgroundImage: {
    maxWidth: "100%",
    height: "auto",
    maxHeight: "100%",
    display: "block",
    objectFit: "contain",
  },
  foregroundImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
    objectFit: "contain",
    margin: "auto",
  },
  foregroundImageContainer: {
    width: "33%",
    height: "90%",
  },
  copy: {
    display: "flex",
    maxWidth: "60%",
    flexDirection: "row",
    "& > :first-child": {
      marginRight: 5,
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "4px",
    border: `1px solid ${theme.colors.grey.light}`,
    boxShadow: {
      x: 0,
      y: 0,
      blur: 10,
      spread: 3,
      color: theme.colors.grey.light,
    },
  },
  adContainer: {
    overflow: "hidden",
    backgroundColor: theme.colors.grey.light,
  },
}));

const Ad: React.FC<AdZoneProps> = ({ width, height, adProps }) => {
  const classes = useStyles();

  if (adProps.foregroundImage && adProps.copy && adProps.url) {
    return (
      <div data-testid="ad">
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={classes.container}
          onClick={() => window.open(adProps.url, "_blank")}
        >
          <div className={classes.foregroundImageContainer}>
            <img
              className={classes.foregroundImage}
              src={adProps.foregroundImage}
              alt={adProps.name}
            />
          </div>
          <div
            className={classes.copy}
            dangerouslySetInnerHTML={{
              __html: adProps.copy,
            }}
          ></div>
        </div>
      </div>
    );
  }
  if (adProps.foregroundImage && adProps.copy) {
    return (
      <div data-testid="ad">
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={classes.container}
        >
          <div className={classes.foregroundImageContainer}>
            <img
              className={classes.foregroundImage}
              src={adProps.foregroundImage}
              alt={adProps.name}
            />
          </div>
          <div
            className={classes.copy}
            dangerouslySetInnerHTML={{
              __html: adProps.copy,
            }}
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div data-testid="ad">
        {adProps.url ? (
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className={classes.adContainer}
            onClick={() => window.open(adProps.url, "_blank")}
          >
            <img
              className={classes.backgroundImage}
              src={adProps.backgroundImage}
              alt={adProps.name}
            />
          </div>
        ) : (
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
        )}
      </div>
    );
  }
};

export default Ad;
