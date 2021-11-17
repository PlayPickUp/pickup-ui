import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@playpickup/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Router>
        <Story />
      </Router>
    </ThemeProvider>
  ),
];
