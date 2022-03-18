import React from "react";
import { createUseStyles } from "react-jss";
import { DefaultTheme, CheckBoxProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  contain: {
    display: "block",
    position: "relative",
    cursor: "pointer",
    fontSize: "22px",
    userSelect: "none",
    height: 16,
    "& input": {
      /*  Hide the browser's default checkbox  */
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      height: 0,
      width: 0,
      /* Show the checkmark when checked */
      "&:checked": {
        "& ~ $checkmark": {
          /* When the checkbox is checked*/
          backgroundColor: theme.colors.primary.base,
          "&:after": {
            boxSizing: "border-box",
            display: "block",
          },
        },
      },
    },
    "& $checkmark": {
      "&:after": {
        left: "5px",
        top: "2px",
        width: "5px",
        height: "10px",
        border: "solid white",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(45deg)",
      },
    },
    /* On mouse-over, add a background color */
    "&:hover": {
      "& input": {
        "& ~ $checkmark": {
          backgroundColor: theme.colors.primary.lightBase,
        },
      },
    },
  },
  checkBoxLabel: {
    verticalAlign: "middle",
    position: "relative",
    left: `${theme.spacing.base * 6}px`,
    bottom: `${theme.spacing.base}px`,
    fontSize: 15,
  },
  checkmark: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "16px",
    width: "16px",
    borderRadius: "3px",
    backgroundColor: theme.colors.primary.base,
    "&:after": {
      content: '""',
      position: "absolute",
      display: "none",
    },
  },
}));

const CheckBox: React.FC<CheckBoxProps> = ({
  checked = false,
  onChange,
  label,
  ...props
}) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = React.useState<boolean>(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <>
      <label className={classes.contain} htmlFor={props.name}>
        <input
          data-testid="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={classes.checkmark} />
        {label && <label className={classes.checkBoxLabel}>{label}</label>}
      </label>
    </>
  );
};

export default CheckBox;
