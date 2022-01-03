import {
  Breakpoints,
  CreateShadow,
  DefaultGradients,
  DefaultShadows,
  DefaultSpacing,
  DefaultTheme,
  DefaultThemeColors,
  DefaultTypography,
  DefaultZIndex,
  FontFamilies,
  GreenMap,
  GreyMap,
  MediaQuery,
  PurpleMap,
  RedMap,
  ResponsiveFonts,
} from "../types";

// Color me PickUp ⚡
const purple: PurpleMap = {
  light: "#F5F0FF",
  lightBase: "#AFA0FF",
  base: "#7A60FF",
  dark: "#5E24FF",
  transparent: "#EAE5FF",
};

const green: GreenMap = {
  light: "#EAFDF7",
  base: "#25DA95",
};

const grey: GreyMap = {
  light: "#F3F2F5",
  lightBase: "#DDDDDD",
  base: "#9D9D9E",
  dark: "#615E66",
  medium: "#DFDAE6",
};

const red: RedMap = {
  light: "#FFF1F4",
  base: "#FF1244",
};

const colors: DefaultThemeColors = {
  primary: { ...purple },
  secondary: { ...grey },
  green,
  purple,
  grey,
  red,
  black: "#2C2933",
  white: "#FFF",
  success: green.base,
  error: red.base,
};

// Font and Typography
const fontFamilies: FontFamilies = {
  body: "'Inter', Helvetica, sans-serif",
  headline: "'Ringside-Condensed', Helvetica, sans-serif",
};

const fontStyles: ResponsiveFonts = {
  desktop: {
    title: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 48,
      lineHeight: "54px",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
      color: "inherit",
    },
    heading2: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 36,
      lineHeight: "40px",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
      color: "inherit",
    },
    heading3: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "34px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    heading4: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 22,
      lineHeight: "28px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    heading5: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "22px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    heading6: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "16px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    body: {
      fontFamily: fontFamilies.body,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: "30px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    body2: {
      fontFamily: fontFamilies.body,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 13,
      lineHeight: "20px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
  },
  mobile: {
    title: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 34,
      lineHeight: "38px",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
      color: "inherit",
    },
    heading2: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "34px",
      letterSpacing: "0.1px",
      textTransform: "uppercase",
      color: "inherit",
    },
    heading3: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 22,
      lineHeight: "26px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    heading4: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: "18px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    heading5: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 13,
      lineHeight: "15px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    heading6: {
      fontFamily: fontFamilies.headline,
      fontWeight: 600,
      fontSize: 11,
      lineHeight: "13px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    body: {
      fontFamily: fontFamilies.body,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 15,
      lineHeight: "24px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
    body2: {
      fontFamily: fontFamilies.body,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 12,
      lineHeight: "18px",
      letterSpacing: "0.1px",
      color: "inherit",
    },
  },
};

const typography: DefaultTypography = {
  fontFamilies,
  fontStyles,
};

// Fancy ass Material UI inspired shadows
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

const createShadow: CreateShadow = (...px) => {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0, 0, 0, ${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0, 0, 0, ${shadowAmbientShadowOpacity})`,
  ].join(",");
};

const shadows: DefaultShadows = [
  createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
  createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
  createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
  createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
  createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
  createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
];

// Base Unit Spacings
const spacing: DefaultSpacing = {
  base: 4, // 🚨 changing this value (4) could have VERY BAD CONCEQUENCES! BE VERY SURE, MAYBE YOU JUST NEED TO ADD A VALUE? 🤔
};

// Default zIndex values
const zIndex: DefaultZIndex = {
  overlay: 999,
};

// Default Border Radius
const borderRadius = 4;

// Media Queries
const mediaQuery: MediaQuery = (minWidth: number) => {
  return `@media (min-width: ${minWidth}px)`;
};

// Breakpoints
const breakpoints: Breakpoints = {
  small: 787,
  medium: 1029,
  large: 1280,
};

// Default Gradient Values
const gradients: DefaultGradients = {
  main: `linear-gradient(112.25deg, #914EFF -20.38%, #5D1BFF 122.56%)`,
  hover: `linear-gradient(112.25deg, #914EFF 35.38%, #5D1BFF 122.56%)`,
  disabled:
    "linear-gradient(112.25deg, rgba(145,78,255,0.2) -20.38%, rgba(93,27,255,0.2) 122.56%)",
};

export const defaultTheme: DefaultTheme = {
  borderRadius,
  breakpoints,
  colors,
  gradients,
  mediaQuery,
  shadows,
  spacing,
  typography,
  zIndex,
};
