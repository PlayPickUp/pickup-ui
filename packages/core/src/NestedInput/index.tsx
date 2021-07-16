import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import Button from "../Button";

import { DefaultTheme, NestedInputProps } from "../types";
import FormError from "../FormError";

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
    height: 56,
    padding: "0 6px",
  },
  inputContainer: {
    flex: "1 1 auto",
    paddingRight: 8,
  },
  input: {
    height: 48,
    width: "100%",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 16,
    lineHeight: "24px",
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
}));

const NestedInput: React.FC<NestedInputProps> = ({
  buttonText,
  placeholder,
  handleClick,
  ...props
}) => {
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const classes = useStyles({ inputFocus });

  const toggleFocus = () => setInputFocus(!inputFocus);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.inputContainer}>
          <input
            data-testid="nested-input"
            className={classes.input}
            placeholder={placeholder}
            onFocus={toggleFocus}
            onBlur={(e) => {
              toggleFocus();
              props.field.onBlur(e);
            }}
            {...props.field}
          />
        </div>
        <div>
          <Button submitText={buttonText} onClick={handleClick} />
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
