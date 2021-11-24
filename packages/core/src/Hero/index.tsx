import React from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme, HeroProps } from "../types";
import Typography from "../Typography";
import { Breadcrumbs, Chip } from "..";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    backgroundColor: "#F6F4FF",
    textAlign: "center",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      textAlign: "left",
    },
  },
  container: {
    padding: [theme.spacing.base * 5, theme.spacing.base * 5],
    maxWidth: theme.spacing.base * 214,
    boxSizing: "border-box",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      padding: theme.spacing.base * 7,
    },
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    "& > div, & > h2, & > h3, & > p, & > img": {
      paddingTop: theme.spacing.base * 2,
      paddingBottom: theme.spacing.base * 2,
    },
    [theme.mediaQuery(theme.breakpoints.small)]: {
      padding: 0,
      justifyContent: "left",
    },
  },
  imageColumn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: theme.spacing.base * 2,
    [theme.mediaQuery(theme.breakpoints.small)]: {
      paddingBottom: 0,
    },
  },
  eyebrow: {
    display: "flex",
    flexDirection: "row",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      width: "100%",
    },
  },
  title: {
    fontWeight: "normal",
    fontSize: 30,
    width: "100%",
    lineHeight: `${theme.spacing.base * 9}px`,
  },
  description: {
    fontSize: 13,
    width: "100%",
    lineHeight: `${theme.spacing.base * 5}px`,
    [theme.mediaQuery(theme.breakpoints.small)]: {
      fontSize: 15,
      lineHeight: `${theme.spacing.base * 6}px`,
    },
  },
  image: {
    maxWidth: 300,
    width: "auto",
    height: "100%",
    borderRadius: 4,
  },
  chip: {
    border: ["solid", theme.colors.primary.base, 1],
    color: theme.colors.primary.base,
    backgroundColor: "white",
    marginTop: theme.spacing.base * 2,
  },
  breadcrumbs: {
    marginBottom: theme.spacing.base * 2,
    [theme.mediaQuery(theme.breakpoints.small)]: {
      marginBottom: 0,
    },
  },
}));

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  image_src,
  image_alt,
  eyebrow,
  chip,
  crumbs,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {crumbs ? (
          <Breadcrumbs className={classes.breadcrumbs} crumbs={crumbs} />
        ) : null}
        <div className={classes.row}>
          <div className={classes.imageColumn}>
            <img className={classes.image} src={image_src} alt={image_alt} />
          </div>
          <div className={classes.column}>
            <Typography
              data-testid="hero-title"
              className={classes.title}
              variant="heading2"
            >
              {title}
            </Typography>
            {eyebrow ? (
              <div className={classes.eyebrow}>
                <Typography variant="body2">{`${eyebrow.name} | ${eyebrow.description}`}</Typography>
              </div>
            ) : null}
            <Typography
              data-testid="hero-description"
              className={classes.description}
              variant="body"
            >
              {description}
            </Typography>
          </div>
        </div>
        {chip ? (
          <Chip className={classes.chip} label={chip} element="div" />
        ) : null}
      </div>
    </div>
  );
};

export default Hero;
