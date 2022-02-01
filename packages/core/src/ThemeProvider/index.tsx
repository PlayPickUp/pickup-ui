import React from "react";
import { jss, JssProvider, ThemeProvider as JSSThemeProvider } from "react-jss";
import { containUI } from "./containerPlugin";
import merge from "lodash/merge";

import { defaultTheme } from "./defaultTheme";

import { ThemeProviderProps } from "../types";
import GlobalsAndReset from "./GlobalsAndReset";

function generateRandom(digitCount) {
  return Math.floor(
      Math.pow(10, digitCount - 1) +
      Math.random() * 9 * Math.pow(10, digitCount - 1)
  );
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  withReset = true,
  theme,
  ...rest
}) => {
  jss.use(containUI(withReset));
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;

  const random = generateRandom(5)

  return (
    <div id="PickUpUI">
      <JssProvider jss={jss} classNamePrefix={`PU${random}--`}>
        <JSSThemeProvider theme={mergedTheme} {...rest}>
          <GlobalsAndReset>{children}</GlobalsAndReset>
        </JSSThemeProvider>
      </JssProvider>
    </div>
  );
};

export default ThemeProvider;
