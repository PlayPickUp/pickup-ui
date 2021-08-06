import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme, HeroProps } from "../types";
import Typography from "../Typography";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    backgroundColor: theme.colors.grey.light,
    paddingTop: theme.spacing.base * 8,
    paddingBottom: theme.spacing.base * 8,
    textAlign: "center",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      textAlign: "left",
    },
  },
  container: {
    paddingLeft: theme.spacing.base * 7,
    paddingRight: theme.spacing.base * 7,
    maxWidth: theme.spacing.base * 214,
  },
  row: {
    display: "flex",
    flexDirection: "column",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      flexDirection: "row-reverse",
      height: "100%",
    },
  },
  column: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "& > *": {
      paddingTop: theme.spacing.base * 2,
      paddingBottom: theme.spacing.base * 2,
    },
    [theme.mediaQuery(theme.breakpoints.small)]: {
      padding: 0,
    },
  },
  eyebrow: {
    display: "flex",
    flexDirection: "row",
    "& > :first-child": {
      paddingRight: theme.spacing.base * 2,
      color: theme.colors.purple.base,
    },
    [theme.mediaQuery(theme.breakpoints.small)]: {
      width: "100%",
    },
  },
  title: {
    fontWeight: "normal",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      fontSize: 34,
      lineHeight: `${theme.spacing.base * 10}px`,
    },
  },
  description: {
    fontSize: 13,
    lineHeight: `${theme.spacing.base * 5}px`,
    [theme.mediaQuery(theme.breakpoints.small)]: {
      fontSize: 18,
      lineHeight: `${theme.spacing.base * 7}px`,
    },
  },
}));

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  eyebrow,
  children,
}) => {
  const classes = useStyles();
  const [heroStyle, setHeroStyle] = useState({
    titleVariant: "heading3",
    descriptionVariant: "body",
  });

  useEffect(() => {
    if (eyebrow) {
      setHeroStyle({
        ...heroStyle,
        titleVariant: "heading2",
      });
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.column}>{children}</div>
          <div className={classes.column}>
            {eyebrow ? (
              <div className={classes.eyebrow}>
                <Typography variant="body2">{eyebrow.name}</Typography>
                <Typography variant="body2">{eyebrow.description}</Typography>
              </div>
            ) : null}
            <Typography
              className={classes.title}
              variant={heroStyle.titleVariant}
            >
              {title}
            </Typography>
            <Typography
              className={classes.description}
              variant={heroStyle.descriptionVariant}
            >
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
