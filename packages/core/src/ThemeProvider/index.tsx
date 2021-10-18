import React from "react";
import { JssProvider, ThemeProvider as JSSThemeProvider } from "react-jss";
import { createGenerateId as generateIdDefault } from "jss";
import merge from "lodash/merge";

import { defaultTheme } from "./defaultTheme";

import { ThemeProviderProps } from "../types";
import { increaseSpecificity } from "./aggressiveSpecificity";
import GlobalsAndReset from "./GlobalsAndReset";

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  withReset = true,
  theme,
  aggressive = false,
  ...rest
}) => {
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;
  return (
    <JssProvider
      classNamePrefix="PU--"
      generateId={aggressive ? increaseSpecificity() : generateIdDefault()}
    >
      <JSSThemeProvider theme={mergedTheme} {...rest}>
        {withReset ? <GlobalsAndReset>{children}</GlobalsAndReset> : children}
      </JSSThemeProvider>
    </JssProvider>
  );
};

export default ThemeProvider;
