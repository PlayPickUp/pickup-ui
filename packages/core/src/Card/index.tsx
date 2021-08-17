import React from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme } from "../types";
import ProgressButton from "../ProgressButton";
import Typography from "../Typography";
import { defaultTheme } from "../ThemeProvider/defaultTheme";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: theme.colors.white,
    color: theme.colors.black,
    width: "100%",
    maxWidth: 400,
    border: {
      color: theme.colors.grey.light,
      width: 1,
      style: "solid",
    },
    borderRadius: 5,
    boxShadow: {
      x: 0,
      y: 0,
      blur: 5,
      spread: 5,
      color: theme.colors.grey.light,
    },
    padding: 10,
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    maxHeight: 200,
    overflow: "hidden",
    borderRadius: "5px 5px 0 0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    height: 225,
    margin: {
      top: 20,
      bottom: 20,
      left: 0,
      right: 0,
    },
  },
  eyebrow: {
    display: "flex",
    flexDirection: "row",
    "& > :first-child": {
      marginRight: 5,
    },
  },
  heading: {
    fontWeight: "normal",
  },
  description: {
    color: theme.colors.grey.dark,
  },
  button: {},
}));

const Card: React.FC<any> = ({
  image,
  eyebrow,
  heading,
  description,
  buttonProps,
}) => {
  const classes = useStyles();

  return (
    <div data-testid="card" className={classes.root}>
      <div className={classes.image}>
        <img
          src={image}
          alt={eyebrow.title}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={classes.container}>
        <div className={classes.eyebrow}>
          <Typography
            variant="body2"
            style={{ color: defaultTheme.colors.primary.base }}
          >
            {eyebrow.name}
          </Typography>
          <Typography
            variant="body2"
            style={{ color: defaultTheme.colors.grey.dark }}
          >
            {eyebrow.description}
          </Typography>
        </div>
        <Typography className={classes.heading} variant="heading4">
          {heading}
        </Typography>
        <Typography className={classes.description} variant="body">
          {description}
        </Typography>
        <ProgressButton className={classes.button} {...buttonProps} />
      </div>
    </div>
  );
};

export default Card;
