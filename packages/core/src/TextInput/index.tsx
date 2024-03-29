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
  placeholder,
  type = "text",
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      {label && (
        <Label data-testid="label" htmlFor={props.name}>
          {label}
        </Label>
      )}
      <div
        data-testid="div"
        className={classNames(classes.root, className)}
        style={style}
      >
        <input
          data-testid="text-input"
          id={props.id}
          className={classNames(classes.input, innerClassName)}
          style={innerStyle}
          {...props.field}
          type={type}
          placeholder={placeholder}
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
