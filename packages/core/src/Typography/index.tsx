import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import he from "he";

import { DefaultTheme, TypographyElementMap, TypographyProps } from "../types";

// TODO: Find solution to template literals in typescript to use theme.mediaQuery + theme.breakpoints
const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    position: "relative",
    color: (props) => props.color || "inherit",
  },
  title: {
    ...theme.typography.fontStyles.mobile.title,
    "@media screen and (min-width: 787px)": {
      ...theme.typography.fontStyles.desktop.title,
    },
  },
  heading2: {
    ...theme.typography.fontStyles.mobile.heading2,
    "@media screen and (min-width: 787px):": {
      ...theme.typography.fontStyles.desktop.heading2,
    },
  },
  heading3: {
    ...theme.typography.fontStyles.mobile.heading3,
    "@media screen and (min-width: 787px):": {
      ...theme.typography.fontStyles.desktop.heading3,
    },
  },
  body: {
    ...theme.typography.fontStyles.mobile.body,
    "@media screen and (min-width: 787px):": {
      ...theme.typography.fontStyles.desktop.body,
    },
  },
  body2: {
    ...theme.typography.fontStyles.mobile.body2,
    "@media screen and (min-width: 787px):": {
      ...theme.typography.fontStyles.desktop.body2,
    },
  },
}));

const elementMap: TypographyElementMap = {
  title: "h1",
  body: "p",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
  span: "span",
};

const Typography: React.FC<
  TypographyProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({
  children,
  className,
  style,
  element,
  variant = "p",
  color,
  useUnescape = false,
  ...rest
}) => {
  const classes = useStyles({ color });
  const Element: keyof JSX.IntrinsicElements = element
    ? element
    : elementMap[variant] || "span";
  return (
    <Element
      className={classNames({
        [classes.root]: true,
        [classes.title]: variant === "title",
        [classes.body]: variant === "body",
        [classes.body2]: variant === "body2",
        [classes.heading2]: variant === "heading2",
        [classes.heading3]: variant === "heading3",
        [className]: className,
      })}
      style={style}
      {...rest}
    >
      {useUnescape ? he.decode(children as string) : children}
    </Element>
  );
};

export default Typography;
