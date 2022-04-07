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
        ? `1px solid ${theme.colors.primary.base}`
        : `1px solid ${theme.colors.grey.medium}`,
    borderRadius: theme.borderRadius * 2,
    backgroundColor: theme.colors.white,
    width: "100%",
    maxWidth: 360,
    height: (props) => (props.usePhoneNumber ? 60 : 56),
    padding: [0, theme.spacing.base * 1.5],
  },
  inputContainer: {
    flex: "1 1 auto",
    paddingRight: 8,
  },
  input: {
    height: (props) =>
      props.usePhoneNumber || props.useVerificationCode ? 22 : 48,
    width: "100%",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 16,
    lineHeight: (props) =>
      props.usePhoneNumber || props.useVerificationCode ? "22px" : "24px",
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
    alignItems: "center",
  },
  phonePrefix: {
    position: "relative",
    fontSize: 15,
    lineHeight: "22px",
    fontFamily: theme.typography.fontFamilies.body,
    color: theme.colors.grey.dark,
    padding: [0, theme.spacing.base * 2],
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
    padding: [0, theme.spacing.base * 2],
    margin: 0,
    fontWeight: "normal",
  },
  breakpointMini: {
    display: "inline",
    [theme.mediaQuery(320)]: {
      display: "none",
    },
  },
  breakpointLarge: {
    display: "none",
    [theme.mediaQuery(320)]: {
      display: "inline",
    },
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
          {usePhoneNumber ? (
            <div className={classes.phoneContainer}>
              <div className={classes.phonePrefix}>+1</div>
              <PhoneInput
                {...props.field}
                id={props.id}
                // @ts-ignore
                ref={inputRef}
                className={classes.input}
                country="US"
                placeholder="(345) 555-2343"
                smartCaret={false}
                disabled={disabled}
                onChange={(e) => props.form.setFieldValue(props.field.name, e)}
                onBlur={(e) => {
                  toggleFocus();
                  props.field.onBlur(e);
                }}
                onFocus={toggleFocus}
              />
            </div>
          ) : (
            <input
              {...props.field}
              id={props.id}
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
        <div
          className={classes.breakpointLarge}
          data-testid="breakpoint-large-div"
        >
          {useSubmit ? (
            <Button
              style={{ minWidth: 90 }}
              className={
                usePhoneNumber || useVerificationCode
                  ? classes.phoneButtonSmall
                  : null
              }
              useSubmit
              submitText={buttonText}
              disabled={disabled}
            />
          ) : (
            <Button
              style={{ minWidth: 90 }}
              data-testid="pickup-nested-button"
              className={
                usePhoneNumber || useVerificationCode
                  ? classes.phoneButtonSmall
                  : null
              }
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
      <div
        className={classes.breakpointMini}
        data-testid="breakpoint-small-div"
      >
        {useSubmit ? (
          <Button
            style={{ minWidth: 90, marginTop: 4 }}
            className={
              usePhoneNumber || useVerificationCode
                ? classes.phoneButtonSmall
                : null
            }
            useSubmit
            variant="full"
            submitText={buttonText}
            disabled={disabled}
          />
        ) : (
          <Button
            style={{ minWidth: 90, marginTop: 4 }}
            className={
              usePhoneNumber || useVerificationCode
                ? classes.phoneButtonSmall
                : null
            }
            variant="full"
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
      <FormError
        errors={props.form.errors}
        touched={props.form.touched}
        name={props.field.name}
      />
    </>
  );
};

export default NestedInput;
