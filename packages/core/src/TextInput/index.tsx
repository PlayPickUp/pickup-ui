import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import { DefaultTheme, TextInputProps } from "../types";
import FormError from "../FormError";
import Label from "../Label";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "flex",
    position: "relative",
    padding: theme.spacing.base,
  },
  input: {
    position: "relative",
    height: 44,
    width: "100%",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 15,
    lineHeight: "18px",
    letterSpacing: "0.1px",
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.grey.base}`,
    borderRadius: theme.borderRadius,
    padding: `0 ${theme.spacing.base * 4}px`,
    "&:focus": {
      border: `1px solid ${theme.colors.black}`,
    },
  },
}));

const TextInput: React.FC<TextInputProps> = ({
  className,
  style,
  innerClassName,
  innerStyle,
  label,
  type = "text",
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <div className={classNames(classes.root, className)} style={style}>
        <input
          data-testid="text-input"
          className={classNames(classes.input, innerClassName)}
          style={innerStyle}
          {...props.field}
          type={type}
        />
      </div>
      <FormError
        errors={props.form.errors}
        touched={props.form.touched}
        name={props.field.name}
      />
    </>
  );
};

export default TextInput;
