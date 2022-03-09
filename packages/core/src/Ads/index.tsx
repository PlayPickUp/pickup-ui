import React from "react";
import { createUseStyles } from "react-jss";
import { AdZoneProps, DefaultTheme } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
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
    zIndex: "1",
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
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    backgroundColor: theme.colors.grey.light,
  },
}));

const Ad: React.FC<AdZoneProps> = ({ width, height, adProps }) => {
  const classes = useStyles();
  return (
    <div data-testid="ad">
      {adProps.url ? (
        <a href={adProps.url}>
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundImage: `url(${adProps.backgroundImage}`,
            }}
            className={classes.container}
          >
            {adProps.foregroundImage ? (
              <div className={classes.foregroundImageContainer}>
                <img
                  className={classes.foregroundImage}
                  src={adProps.foregroundImage}
                  alt={adProps.name}
                />
              </div>
            ) : null}
            {adProps.copy ? (
              <div
                className={classes.copy}
                dangerouslySetInnerHTML={{
                  __html: adProps.copy,
                }}
              ></div>
            ) : null}
          </div>
        </a>
      ) : (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${adProps.backgroundImage}`,
            backgroundSize: `contain`,
            backgroundRepeat: `no-repeat`,
            backgroundColor: `${defaultTheme.colors.grey.light}`,
          }}
          className={classes.container}
        >
          {adProps.foregroundImage ? (
            <div className={classes.foregroundImageContainer}>
              <img
                className={classes.foregroundImage}
                src={adProps.foregroundImage}
                alt={adProps.name}
              />
            </div>
          ) : null}
          {adProps.copy ? (
            <div
              className={classes.copy}
              dangerouslySetInnerHTML={{
                __html: adProps.copy,
              }}
            ></div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Ad;
