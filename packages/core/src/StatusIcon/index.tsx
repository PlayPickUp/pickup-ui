import React from "react";
import { defaultTheme as PickUpTheme } from "../ThemeProvider/defaultTheme";
import { createUseStyles } from "react-jss";
import CorrectDiamond from "./icons/CorrectDiamond";
import IncorrectDiamond from "./icons/IncorrectDiamond";
import DisqualifiedDiamond from "./icons/DisqualifiedDiamond";
import LiveDiamond from "./icons/LiveDiamond";
import classNames from "classnames";

import { IconProps, StatusIconProps } from "../types";

const useStyles = createUseStyles({
  root: {
    position: "relative",
    width: (props) => props.size,
    height: "auto",
    "& > svg": {
      display: "block",
      position: "relative",
      width: "100%",
      height: "auto",
    },
  },
});

const colorMapper: { [status: string]: string } = {
  graded_true: PickUpTheme.colors.green.base,
  graded_false: PickUpTheme.colors.red.base,
  disqualified: PickUpTheme.colors.grey.base,
  closed: PickUpTheme.colors.grey.base,
  pending: PickUpTheme.colors.primary.base,
};

const IconMapper: { [status: string]: React.FC<IconProps> } = {
  graded_true: CorrectDiamond,
  graded_false: IncorrectDiamond,
  disqualified: DisqualifiedDiamond,
  closed: DisqualifiedDiamond,
  pending: LiveDiamond,
};

const StatusIcon: React.FC<StatusIconProps> = ({
  status,
  className,
  size = 48,
  style,
}) => {
  const classes = useStyles({ size });
  const MappedIcon = IconMapper[status] || LiveDiamond;
  return (
    <div
      data-testid="statusIcon"
      className={classNames(classes.root, className)}
      style={style}
    >
      <MappedIcon
        color={colorMapper[status] || PickUpTheme.colors.primary.base}
      />
    </div>
  );
};

export default StatusIcon;
