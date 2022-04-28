import React from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme, HeroProps } from "../types";
import Typography from "../Typography";
import Breadcrumbs from "../Breadcrumbs";
import Chip from "../Chip";
import PartnerLogos from "./PartnerLogos";
import Button from "../Button";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    width: "100%",
    backgroundColor: "#F6F4FF",
    color: theme.colors.black,
    textAlign: "center",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      textAlign: "left",
    },
  },
  container: {
    margin: "0 auto",
    padding: [theme.spacing.base * 5, theme.spacing.base * 5, 0],
    boxSizing: "border-box",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      padding: [theme.spacing.base * 5, theme.spacing.base * 7, 0],
    },
    [theme.mediaQuery(theme.breakpoints.large)]: {
      padding: "4%",
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
      paddingRight: theme.spacing.base * 2.5,
      alignItems: "start",
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
  imageContainer: {
    height: "100%",
    overflow: "hidden",
    borderRadius: 4,
  },
  image: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    objectFit: "cover",
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
  chip: {
    border: ["solid", theme.colors.primary.base, 1],
    color: theme.colors.primary.base,
    backgroundColor: "white",
    marginTop: theme.spacing.base * 2,
  },
  breadcrumbs: {
    textAlign: "left",
    marginBottom: theme.spacing.base * 4,
    [theme.mediaQuery(theme.breakpoints.small)]: {
      marginBottom: 0,
    },
  },
  ctaButton: {
    width: theme.spacing.base * 60,
    marginTop: theme.spacing.base * 3,
    fontFamily: theme.typography.fontFamilies.headline,
    fontSize: 16,
    fontWeight: "normal",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: 1,
    [theme.mediaQuery(theme.breakpoints.small)]: {
      width: theme.spacing.base * 75,
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
  logos,
  ctaButton,
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
            <div className={classes.imageContainer}>
              <img className={classes.image} src={image_src} alt={image_alt} />
            </div>
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
            {ctaButton ? (
              <Button
                element="a"
                href={ctaButton.url}
                className={classes.ctaButton}
              >
                {ctaButton.label}
              </Button>
            ) : null}
            {chip ? (
              <Chip className={classes.chip} label={chip} element="div" />
            ) : null}
          </div>
        </div>
        <PartnerLogos logos={logos} />
      </div>
    </div>
  );
};

export default Hero;
