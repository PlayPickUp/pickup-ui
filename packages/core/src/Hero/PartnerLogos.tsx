import { DefaultTheme, PartnerLogoProps } from "../types";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  logoList: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: theme.spacing.base * 2,
  },
  logo: {
    flex: "3 0 26%",
    margin: [0, theme.spacing.base * 4, theme.spacing.base * 2],
    display: "flex",
    justifyContent: "center",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      margin: [theme.spacing.base, theme.spacing.base * 8],
      flex: "8 0 12%",
    },
  },
  logoImage: {
    width: "100%",
    maxWidth: theme.spacing.base * 37,
  },
}));

const PartnerLogos: React.FC<PartnerLogoProps> = ({ logos }) => {
  const classes = useStyles();
  if (!logos?.length) return null;
  return (
    <div className={classes.logoList}>
      {logos.map((logo, index) => (
        <div key={index} className={classes.logo}>
          <img src={logo.url} alt={logo.alt} className={classes.logoImage} />
        </div>
      ))}
    </div>
  );
};

export default PartnerLogos;
