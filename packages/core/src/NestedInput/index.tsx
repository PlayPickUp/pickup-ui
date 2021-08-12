import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";

import Button from "../Button";

import { DefaultTheme, NestedInputProps } from "../types";
import FormError from "../FormError";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/input";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    border: (props) =>
      props.inputFocus
        ? `1px solid ${theme.colors.grey.dark}`
        : `1px solid ${theme.colors.purple.base}`,
    borderRadius: theme.borderRadius * 2,
    backgroundColor: theme.colors.white,
    width: "100%",
    maxWidth: 360,
    height: (props) => (props.usePhoneNumber ? 60 : 56),
    padding: "0 6px",
  },
  inputContainer: {
    flex: "1 1 auto",
    paddingRight: 8,
  },
  input: {
    height: (props) => (props.usePhoneNumber ? 22 : 48),
    width: "100%",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: (props) => (props.usePhoneNumber ? 15 : 16),
    lineHeight: (props) => (props.usePhoneNumber ? "22px" : "24px"),
    letterSpacing: "0.1px",
    color: theme.colors.grey.dark,
    appearance: "none",
    border: "none",
    "&:focus": {
      border: "none",
      outline: "none",
      "& $root": {
        borderColor: theme.colors.grey.dark,
      },
    },
  },
  phoneContainer: {
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
  },
  phonePrefix: {
    position: "relative",
    fontSize: 15,
    lineHeight: "22px",
    fontFamily: theme.typography.fontFamilies.body,
    color: theme.colors.grey.dark,
    padding: "0 4px",
  },
  phoneLabel: {
    fontSize: 11,
    lineHeight: "18px",
    fontFamily: theme.typography.fontFamilies.body,
    color: theme.colors.grey.base,
    position: "relative",
    display: "block",
    top: -3,
    left: 5,
  },
}));

const NestedInput: React.FC<NestedInputProps> = ({
  buttonText,
  placeholder,
  label,
  usePhoneNumber,
  ...props
}) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const classes = useStyles({ inputFocus, usePhoneNumber });
  const inputRef = useRef();

  const toggleFocus = () => setInputFocus(!inputFocus);
  const handleFocus = (el: HTMLInputElement): void => {
    if (!el) {
      return;
    }
    el.focus();
    toggleFocus();
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.inputContainer}>
          {usePhoneNumber && label ? (
            <label
              className={classes.phoneLabel}
              htmlFor={props.field.name}
              onClick={() => handleFocus(inputRef.current)}
            >
              {label}
            </label>
          ) : null}
          {usePhoneNumber ? (
            <div className={classes.phoneContainer}>
              <div className={classes.phonePrefix}>+1</div>
              <PhoneInput
                {...props.field}
                // @ts-ignore
                ref={inputRef}
                className={classes.input}
                country="US"
                placeholder="(345) 555-2343"
                smartCaret={false}
                onChange={(e) => props.form.setFieldValue(props.field.name, e)}
              />
            </div>
          ) : (
            <input
              {...props.field}
              className={classes.input}
              placeholder={placeholder}
              onFocus={toggleFocus}
              onBlur={(e) => {
                toggleFocus();
                props.field.onBlur(e);
              }}
            />
          )}
        </div>
        <div>
          <Button useSubmit submitText={buttonText} />
        </div>
      </div>
      <FormError
        errors={props.form.errors}
        touched={props.form.touched}
        name={props.field.name}
      />
    </>
  );
};

export default NestedInput;
