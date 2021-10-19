import React, { KeyboardEvent, useRef } from "react";
import MultiDownshift from "./MultiDownshift";
import classNames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import ChevronDown from "../Icon/icons//ChevronDown";
import SubtractCircle from "../Icon/icons/SubtractCircle";

import Icon from "../Icon";
import { getItems } from "./helpers";
import { DefaultTheme, MultiSelectProps, SelectItem } from "../types";
import Label from "../Label";
import FormError from "../FormError";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    position: "relative",
  },
  tagWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexFlow: "row wrap",
    position: "relative",
    width: "100%",
    height: "auto",
  },
  tag: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "auto",
    backgroundColor: theme.colors.purple.light,
    border: `1px solid ${theme.colors.purple.dark}`,
    borderRadius: "55px",
    padding: `${theme.spacing.base}px ${theme.spacing.base * 3.5}px`,
    margin: `${theme.spacing.base * 2}px ${theme.spacing.base}px 0`,
    fontSize: 12,
    fontFamily: theme.typography.fontFamilies.body,
    color: theme.colors.purple.dark,
    textAlign: "center",
    cursor: "default",
    "& span": {
      display: "block",
      position: "relative",
      lineHeight: 1,
    },
  },
  inputWrapper: {
    position: "relative",
    height: "auto",
    width: "100%",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 15,
    lineHeight: "18px",
    letterSpacing: "0.1px",
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.grey.base}`,
    borderRadius: theme.borderRadius,
    padding: `0 ${theme.spacing.base * 5}px 0 ${theme.spacing.base * 4}px`,
    textAlign: "left",
    "&:focus, &:active": {
      border: `1px solid ${theme.colors.grey.base}`,
      outline: "none",
    },
    boxSizing: "border-box",
  },
  input: {
    position: "relative",
    width: "100%",
    height: 44,
    border: "none",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 15,
    lineHeight: "18px",
    letterSpacing: "0.1px",
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    "&:active, &:focus": {
      outline: "none",
    },
  },
  iconButton: {
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
    borderColor: "transparent",
    padding: "0",
    margin: "0",
    "&:disabled": {
      cursor: "not-allowed",
    },
    position: "absolute",
    right: `${theme.spacing.base * 3}px`,
    top: `${theme.spacing.base * 3.25}px`,
    "&:active, &:focus": {
      outline: "none",
    },
  },
  icon: {
    position: "relative",
    transition: "all 250ms ease-out",
    transform: "rotate(0deg)",
  },
  iconOpen: {
    transform: "rotate(180deg)",
  },
  dropdown: {
    position: "relative",
    top: -3,
    height: "200px",
    overflow: "scroll",
    width: "100%",
    fontFamily: theme.typography.fontFamilies.body,
    fontSize: 14,
    lineHeight: "18px",
    letterSpacing: "0.1px",
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.grey.base}`,
    borderTop: "transparent",
    borderRadius: theme.borderRadius,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    textAlign: "left",
    "&:focus, &:active": {
      border: `1px solid ${theme.colors.grey.base}`,
      borderTop: "transparent",
      outline: "none",
    },
  },
  dropdownItem: {
    padding: `${theme.spacing.base * 4}px`,
  },
  subtractIcon: {
    marginLeft: theme.spacing.base,
    right: -7,
  },
}));

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  label,
  ...props
}) => {
  const classes = useStyles();
  const theme: DefaultTheme = useTheme();
  const input = useRef(null);

  return (
    <>
      <MultiDownshift
        onChange={props.form.setFieldValue}
        itemToString={(item: SelectItem) => (item ? item.label : "")}
        field={props.field}
      >
        {({
          getInputProps,
          getToggleButtonProps,
          getMenuProps,
          // note that the getRemoveButtonProps prop getter and the removeItem
          // action are coming from MultiDownshift composibility for the win!
          getRemoveButtonProps,
          removeItem,
          isOpen,
          inputValue,
          selectedItems,
          getItemProps,
          highlightedIndex,
        }) => (
          <div className={classes.root}>
            <Label htmlFor={props.field.name}>{label}</Label>
            <div style={{ position: "relative" }}>
              <div
                className={classes.inputWrapper}
                style={{ position: "relative" }}
              >
                {selectedItems.length > 0 ? (
                  <div className={classes.tagWrapper}>
                    {selectedItems.map((item: SelectItem, i: number) => (
                      <div key={`${item.value}${i}`} className={classes.tag}>
                        <span>{item.label}</span>
                        <button
                          {...getRemoveButtonProps({
                            item,
                          })}
                        >
                          <Icon
                            className={classes.subtractIcon}
                            size={12}
                            color={theme.colors.purple.dark}
                          >
                            <SubtractCircle />
                          </Icon>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
                <input
                  {...getInputProps({
                    ref: input,
                    placeholder: "Select items...",
                    className: classes.input,
                    onKeyDown(event: KeyboardEvent) {
                      if (
                        event.key === "Backspace" &&
                        !inputValue &&
                        selectedItems.length > 0
                      ) {
                        removeItem(selectedItems[selectedItems.length - 1]);
                      }
                    },
                    ...props.field,
                  })}
                />
                <button
                  {...getToggleButtonProps({
                    className: classes.iconButton,
                  })}
                >
                  <Icon
                    className={classNames({
                      [classes.icon]: true,
                      [classes.iconOpen]: isOpen,
                    })}
                    color={theme.colors.grey.base}
                  >
                    <ChevronDown />
                  </Icon>
                </button>
              </div>
            </div>
            <ul
              {...getMenuProps({
                className: classes.dropdown,
                style: { display: isOpen ? "block" : "none" },
              })}
            >
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search items...",
                    id: "search",
                    className: classes.input,
                  })}
                />
                {isOpen
                  ? getItems(items, inputValue).map(
                      (item: SelectItem, index: number) => (
                        <li
                          key={`${item.value}${index}`}
                          {...getItemProps({
                            item,
                            index,
                            className: classes.dropdownItem,
                            style: {
                              backgroundColor:
                                highlightedIndex === index
                                  ? theme.colors.purple.light
                                  : theme.colors.white,
                              fontWeight: selectedItems.includes(item)
                                ? "bold"
                                : "normal",
                            },
                          })}
                        >
                          {item.label}
                        </li>
                      )
                    )
                  : null}
              </div>
            </ul>
          </div>
        )}
      </MultiDownshift>
      <FormError
        errors={props.form.errors}
        touched={props.form.touched}
        name={props.field.name}
      />
    </>
  );
};

export default MultiSelect;
