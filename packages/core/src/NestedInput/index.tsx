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
    "&:disabled": {
      backgroundColor: "transparent",
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
  phoneButtonSmall: {
    fontSize: 14,
    padding: "0 14px",
  },
}));

const NestedInput: React.FC<NestedInputProps> = ({
  buttonText,
  placeholder,
  label,
  usePhoneNumber,
  useVerificationCode,
  disabled,
  useSubmit = true,
  onClick,
  ...props
}) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const classes = useStyles({
    inputFocus,
    usePhoneNumber,
    useVerificationCode,
  });
  const inputRef = useRef();

  const toggleFocus = () => setInputFocus(!inputFocus);
  const handleFocus = (el: HTMLInputElement): void => {
    if (!el) {
      return;
    }
    el.focus();
    toggleFocus();
  };

  const determineInput = () => {
    let inputType;
    if (useVerificationCode) {
      inputType = (
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
      );
    } else if (usePhoneNumber) {
      inputType = (
        <div className={classes.phoneContainer}>
          <PhoneInput
            {...props.field}
            // @ts-ignore
            ref={inputRef}
            className={classes.input}
            country="US"
            placeholder="(345) 555-2343"
            smartCaret={false}
            disabled={disabled}
            onChange={(e) => props.form.setFieldValue(props.field.name, e)}
          />
        </div>
      );
    } else {
      inputType = (
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
      );
    }
    return inputType;
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.inputContainer}>
          {(usePhoneNumber || useVerificationCode) && label ? (
            <label
              className={classes.phoneLabel}
              htmlFor={props.field.name}
              onClick={() => handleFocus(inputRef.current)}
            >
              {label}
            </label>
          ) : null}
          {determineInput()}
        </div>
        <div>
          {useSubmit ? (
            <Button
              className={usePhoneNumber ? classes.phoneButtonSmall : null}
              useSubmit
              submitText={buttonText}
              disabled={disabled}
            />
          ) : (
            <Button
              data-testid="pickup-nested-button"
              className={usePhoneNumber ? classes.phoneButtonSmall : null}
              disabled={disabled}
              submitText={buttonText}
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
            >
              {buttonText}
            </Button>
          )}
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
