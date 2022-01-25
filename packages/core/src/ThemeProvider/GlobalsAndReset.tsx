import { ReactNode } from "react";
import injectSheet from "react-jss";
import { DefaultTheme } from "../types";

const GlobalsAndReset = injectSheet((theme: DefaultTheme) => ({
  "@global": {
    /* Eric Meyer Reset v2.0 */
    /* https://meyerweb.com/eric/tools/css/reset/ */
    "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
      margin: "0",
      padding: "0",
      border: "0",
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
    },
    "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section": {
      display: "block",
    },
    body: {
      lineHeight: "1",
    },
    "ol, ul": {
      listStyle: "none",
    },
    "blockquote, q": {
      quotes: "none",
    },
    "blockquote:before, blockquote:after, q:before, q:after": {
      content: "''",
    },
    table: {
      borderCollapse: "collapse",
      borderSpacing: "0",
    },
    /* Globals */
    "html, body": {
      width: "100%",
      minHeight: "100%",
      fontFamily: theme.typography.fontFamilies.body || "sans-serif",
      fontSize: theme.typography.fontStyles.desktop.body.fontSize || "1rem",
      fontWeight: 400,
      color: theme.colors.black || "#000",
      backgroundColor: theme.colors.white,
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
      margin: "0",
      padding: "0",
    },
    /* Box-sizing border-box */
    /* https://www.paulirish.com/2012/box-sizing-border-box-ftw/ */
    html: {
      boxSizing: "border-box",
      background: "transparent",
    },
    "*, *:before, *:after": {
      boxSizing: "inherit",
    },
    /* Reset `button` to nothing */
    /* https://gist.github.com/chrisheninger/a860f87ef4e529b2df606768b97665a8 */
    button: {
      display: "inline-block",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      userSelect: "none",
      textDecoration: "none",
      fontFamily: "inherit",
      fontSize: "inherit",
      color: "inherit",
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      background: "inherit",
      backgroundImage: "inherit",
      borderColor: "transparent",
      padding: "0",
      margin: "0",
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
  },
}))(({ children }: { children: ReactNode | any }) => children);

export default GlobalsAndReset;
