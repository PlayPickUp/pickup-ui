import React from "react";
import { createUseStyles } from "react-jss";
import DOMPurify from "dompurify";

import { AdZoneProps, DefaultTheme } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  foregroundImage: {
    maxWidth: "100%",
    height: "100%",
    width: "auto",
    display: "block",
    objectFit: "contain",
  },
  foregroundImageContainer: {
    maxWidth: "25%",
    height: "90%",
    zIndex: "1",
    flex: "1",
    paddingRight: theme.spacing.base * 2.5,
  },
  copy: {
    display: "flex",
    maxWidth: "75%",
    align: "center",
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
    overflow: "hidden",
    padding: theme.spacing.base * 2.5,
  },
}));

const Ad: React.FC<AdZoneProps> = ({
  width,
  height,
  name,
  url,
  backgroundImage,
  foregroundImage,
  copy,
}) => {
  const classes = useStyles();
  return (
    <div data-testid="ad">
      {url ? (
        <a href={url}>
          <div
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundImage: `url(${backgroundImage}`,
            }}
            className={classes.container}
            data-testid="background"
          >
            {foregroundImage ? (
              <div className={classes.foregroundImageContainer}>
                <img
                  className={classes.foregroundImage}
                  src={foregroundImage}
                  alt={name}
                />
              </div>
            ) : null}
            {copy ? (
              <div
                className={classes.copy}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(copy),
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
            backgroundImage: `url(${backgroundImage}`,
          }}
          className={classes.container}
          data-testid="background"
        >
          {foregroundImage ? (
            <div className={classes.foregroundImageContainer}>
              <img
                className={classes.foregroundImage}
                src={foregroundImage}
                alt={name}
              />
            </div>
          ) : null}
          {copy ? (
            <div
              className={classes.copy}
              dangerouslySetInnerHTML={{
                __html: copy,
              }}
            ></div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Ad;
