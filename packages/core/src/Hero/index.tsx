import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme, HeroProps, HeroStyleState } from "../types";
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
    width: "100%",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      fontSize: 34,
      lineHeight: `${theme.spacing.base * 10}px`,
    },
  },
  description: {
    fontSize: 13,
    width: "100%",
    lineHeight: `${theme.spacing.base * 5}px`,
    [theme.mediaQuery(theme.breakpoints.small)]: {
      fontSize: 18,
      lineHeight: `${theme.spacing.base * 7}px`,
    },
  },
  image: {
    maxWidth: 300,
    width: "100%",
    height: "auto",
    borderRadius: 15,
  },
}));

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  image_src,
  image_alt,
  eyebrow,
}) => {
  const classes = useStyles();
  const [heroStyle, setHeroStyle] = useState<HeroStyleState>({
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
          <div className={classes.imageColumn}>
            <img className={classes.image} src={image_src} alt={image_alt} />
          </div>
          <div className={classes.column}>
            {eyebrow ? (
              <div className={classes.eyebrow}>
                <Typography variant="body2">{eyebrow.name}</Typography>
                <Typography variant="body2">{eyebrow.description}</Typography>
              </div>
            ) : null}
            <Typography
              data-testid="hero-title"
              className={classes.title}
              variant={heroStyle.titleVariant}
            >
              {title}
            </Typography>
            <Typography
              data-testid="hero-description"
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
