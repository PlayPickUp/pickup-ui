import React from "react";
import { createUseStyles } from "react-jss";
import { CommonHeroProps, DefaultTheme } from "../types";
import Typography from "../Typography";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    background: theme.colors.primary.base,
    color: theme.colors.white,
    paddingTop: theme.spacing.base * 20,
    paddingBottom: theme.spacing.base * 20,
    paddingLeft: theme.spacing.base * 8,
    paddingRight: theme.spacing.base * 8,
    "& > *": {
      marginTop: theme.spacing.base * 3,
    },
    "& > :first-child": {
      marginTop: 0,
    },
    [theme.mediaQuery(theme.breakpoints.small)]: {
      paddingBottom: theme.spacing.base * 20,
    },
  },
  eyebrow: {
    textAlign: "center",
    width: "100%",
  },
  title: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "normal",
    width: "100%",
  },
  text: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
  },
}));

const CommonHero: React.FC<CommonHeroProps> = ({ eyebrow, title, text }) => {
  const classes = useStyles();

  return (
    <div data-testid="common-hero" className={classes.root}>
      <Typography className={classes.eyebrow} variant="body2">
        {eyebrow}
      </Typography>
      <Typography className={classes.title} variant="heading2">
        {title}
      </Typography>
      <Typography className={classes.text} variant="body">
        {text}
      </Typography>
    </div>
  );
};

export default CommonHero;
