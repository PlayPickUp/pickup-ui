import React from "react";
import { jss, JssProvider, ThemeProvider as JSSThemeProvider } from "react-jss";
import { increaseSpecificity } from "./specificityPlugin";
import { containUI } from "./containerPlugin";
import merge from "lodash/merge";

import { defaultTheme } from "./defaultTheme";

import { ThemeProviderProps } from "../types";
import GlobalsAndReset from "./GlobalsAndReset";

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  withReset = true,
  theme,
  aggressive = false,
  ...rest
}) => {
  jss.use(containUI());
  if (aggressive) jss.use(increaseSpecificity());
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;
  return (
        <div id="PickUpUI">
    <JssProvider jss={jss} classNamePrefix="PU--">
      <JSSThemeProvider theme={mergedTheme} {...rest}>
          {withReset ? <GlobalsAndReset>{children}</GlobalsAndReset> : children}
      </JSSThemeProvider>
    </JssProvider>
        </div>
  );
};

export default ThemeProvider;
