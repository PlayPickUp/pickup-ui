import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import classNames from "classnames";
import Downshift from "downshift";
import Label from "../Label";
import Icon from "../Icon";
import ChevronDown from "../Icon/icons/ChevronDown";

import { DefaultTheme, SelectItem, SelectProps } from "../types";
import FormError from "../FormError";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    position: "relative",
    width: "100%",
  },
  selectButton: {
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
    padding: `0 ${theme.spacing.base * 5}px 0 ${theme.spacing.base * 4}px`,
    textAlign: "left",
    "&:focus, &:active": {
      border: `1px solid ${theme.colors.grey.base}`,
      outline: "none",
    },
  },
  iconButton: {
    position: "absolute",
    right: `${theme.spacing.base * 3}px`,
    top: `${theme.spacing.base * 8.75}px`,
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
    height: "auto",
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
}));

const Select: React.FC<SelectProps> = ({
  className,
  items,
  label,
  placeholder = "Select an item...",
  style,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const theme = useTheme<DefaultTheme>();
  const classes = useStyles();

  const handleSelection = (name: string, selection: SelectItem): void => {
    if (!selection) {
      return setIsMenuOpen(false);
    }
    props.form.setFieldValue(name, selection.value);
    setIsMenuOpen(false);
  };

  return (
    <>
      <Downshift
        isOpen={isMenuOpen}
        onChange={(selection) => handleSelection(props.field.name, selection)}
        itemToString={(item: SelectItem) => (item ? item.label : "")}
        onOuterClick={() => setIsMenuOpen(false)}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          getToggleButtonProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => {
          return (
            <div className={classNames(classes.root, className)} style={style}>
              <Label {...getLabelProps()}>{label}</Label>
              <input
                className={classes.selectButton}
                {...getInputProps({
                  placeholder,
                  ...props.field,
                })}
              />
              <button
                {...getToggleButtonProps({
                  className: classes.iconButton,
                  onClick: () => setIsMenuOpen(!isMenuOpen),
                })}
                aria-label="toggle-menu"
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
              <ul
                className={classes.dropdown}
                {...getMenuProps()}
                style={{ display: isOpen ? "block" : "none" }}
              >
                {isOpen
                  ? items
                      .filter(
                        (item) =>
                          !inputValue ||
                          item.label
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                      )
                      .map((item, index) => (
                        <li
                          key={`${item.value}${index}`}
                          className={classes.dropdownItem}
                          {...getItemProps({
                            // key: item.value,
                            index,
                            item,
                            style: {
                              backgroundColor:
                                highlightedIndex === index
                                  ? theme.colors.purple.light
                                  : theme.colors.white,
                              fontWeight:
                                selectedItem === item ? "bold" : "normal",
                            },
                          })}
                        >
                          {item.label}
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          );
        }}
      </Downshift>
      <FormError
        errors={props.form.errors}
        touched={props.form.touched}
        name={props.field.name}
      />
    </>
  );
};

export default Select;
