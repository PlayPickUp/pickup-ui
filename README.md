# **_PICKUP UI_** // [ui.playpickup.com](https://ui.playpickup.com)

![Test and Build](https://github.com/PlayPickUp/pickup-ui/workflows/Test%20and%20Build/badge.svg)
![GitHub issues](https://img.shields.io/github/issues/playpickup/pickup-ui)
![npm bundle size](https://img.shields.io/bundlephobia/min/@playpickup/core)
![npm](https://img.shields.io/npm/v/@playpickup/core?label=%40playpickup%2Fcore%20npm)
![npm](https://img.shields.io/npm/v/@playpickup/icons?label=%40playpickup%2Ficons%20npm)

A collection of packages that make up the PickUp component universe.

## 💾 Installation

```sh
yarn add @playpickup/core @playpickup/icons

## or if npm is your jam

npm install @playpickup/core @playpickup/icons --save
```

## 🚦 Quick Start

Below is a quick start guide on how to use the `Typography` component in a simple React app, with Typescript.

```tsx
import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider, Typography } from "@playpickup/core";

const App: React.FC = () => (
  <div>
    <ThemeProvider>
      <Typography variant="title">PlayPickUp!</Typography>
    </ThemeProvider>
  </div>
);

const el = document.getElementById("root");
ReactDOM.render(<App />, el);
```

> Be sure to include `ThemeProvider` in your application. ThemeProvider should be included as far up the component tree as possible.

## 👨🏾‍🎨 Using @playpickup/core to style your App

`@playpickup/core` uses [react-jss](https://cssinjs.org/react-jss/?v=v10.7.1) under the hood to style the components. We include these core methods in our package so you don't have to also include `react-jss` in your project. Below is an example of how you would use `core` to style a component. In this example, `<ThemeProvider>` is used at the top level of the application.

```tsx
import React from "react";
import { ThemeProvider, createUseStyles, DefaultTheme } from "@playpickup/core";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "flex",
    position: "relative",
    backgroundColor: "red",
    color: theme.colors.primary,  // you can access default theme styles like so
    fontSize: 46,
    borderRadius: theme.borderRadius,
    padding: theme.spacing.base * 2, // double the base spacing size FANCY EYYY?
  },
}));

const SuperStyledDiv: React.FC = ({ children }) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>{children}</div>;
  )
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <SuperStyledDiv>
        I'm super styled!
      </SuperStyledDiv>
    </ThemeProvider>
  );
};
```

View it in action on [Codesandbox](https://codesandbox.io/s/pickup-ui-styling-wwk0g?file=/src/App.tsx)

### ⚠ Project Status

This library is still under active development and we cannot garauntee breaking changes won't be introduced. It is reccomended not to use this library in production outside of the PickUp ecosystem.

### Testing

When updating snapshots use `yarn test -u` instead of directly using Jest to update
