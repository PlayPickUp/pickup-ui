import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import { DefaultTheme, TextAreaProps } from "../types";
import FormError from "../FormError";
import Label from "../Label";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  textarea: {
    position: "relative",
    width: "100%",
    height: 400,
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 15,
    lineHeight: "18px",
    letterSpacing: "0.1px",
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.grey.base}`,
    borderRadius: theme.borderRadius,
    resize: "none",
    padding: theme.spacing.base * 4,
  },
}));

const TextArea: React.FC<TextAreaProps> = ({
  className,
  style,
  innerClassName,
  innerStyle,
  label,
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      {label && <Label htmlFor={props.field.name}>{label}</Label>}
      <div
        data-testid="textarea-wrapper"
        className={classNames(classes.root, className)}
        style={style}
      >
        <textarea
          className={classNames(classes.textarea, innerClassName)}
          style={innerStyle}
          {...props.field}
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

export default TextArea;
