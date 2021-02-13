import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { ButtonProps, DefaultTheme } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 47,
    height: "auto",
    width: (props: ButtonProps) => (props.variant === "fit" ? "auto" : "100%"),
    padding: "0 30px",
    appearance: "none",
    borderRadius: theme.borderRadius,
    border: "none",
    background: theme.gradients.main,
    fontFamily: theme.typography.fontFamilies.headline,
    fontSize: 18,
    lineHeight: "24px",
    letterSpcing: "0.3px",
    color: theme.colors.white,
    textTransform: "uppercase",
    transition: "opacity 200ms ease-in-out",
    opacity: 1,
    fallbacks: {
      background: theme.colors.primary.base,
    },
    "&:hover": {
      opacity: 0.85,
    },
  },
}));

const Button: React.FC<
  ButtonProps & React.HTMLAttributes<HTMLOrSVGElement | HTMLInputElement>
> = ({
  className,
  children,
  disabled,
  element: Element = "button",
  href,
  onClick,
  style,
  to,
  variant = "fit",
  useSubmit,
  submitText,
  ...rest
}) => {
  const classes = useStyles({ variant });

  if (to) {
    return (
      <Link
        data-testid="pickup-button"
        to={to}
        className={classNames(classes.root, className)}
        style={style}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  if (useSubmit) {
    if (!submitText) {
      console.warn("Must use submitText when useSubmit is set to true!");
    }
    return (
      <input
        data-testid="pickup-button"
        className={classNames(classes.root, className)}
        type="submit"
        value={submitText || "Submit"}
        onClick={onClick}
        disabled={disabled}
        style={style}
        {...rest}
      />
    );
  }

  return (
    <Element
      data-testid="pickup-button"
      className={classNames(classes.root, className)}
      disabled={disabled}
      style={style}
      onClick={onClick}
      href={href}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Button;
