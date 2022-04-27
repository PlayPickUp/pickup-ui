import { DefaultTheme, PartnerLogoProps } from "../types";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  logoList: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignContent: "center",
  },
  logo: {
    flex: "3 0 26%",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      flex: "8 0 12%",
    },
  },
  logoImage: {
    width: "100%",
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
          {/* <h1>Hello World</h1> */}
        </div>
      ))}
    </div>
  );
};

export default PartnerLogos;
