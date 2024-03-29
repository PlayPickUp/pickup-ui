import React, { useEffect, useState } from "react";
import moment from "moment";
import { createUseStyles, useTheme } from "react-jss";
import Pick from "../icons/Pick";
import Timer from "../icons/Timer";
import { DefaultTheme, CountdownProps } from "../../types";
import Typography from "../../Typography";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  timer: {
    minWidth: 120,
    fontSize: "11px",
    fontColor: theme.colors.grey.dark,
    lineHeight: "18px",
    verticalAlign: "middle",
    float: "left",
  },
  pick: {
    fontSize: "11px",
    fontColor: theme.colors.primary.base,
    lineHeight: "18px",
    verticalAlign: "middle",
    float: "left",
  },
  container: {
    float: "left",
    width: 210,
    [theme.mediaQuery(theme.breakpoints.medium)]: {
      width: 300,
    },
  },
  timerIcon: {
    verticalAlign: "middle",
    color: theme.colors.grey.dark,
    paddingRight: "3px",
    height: theme.spacing.base * 5,
    width: theme.spacing.base * 5,
    [theme.mediaQuery(theme.breakpoints.medium)]: {
      height: theme.spacing.base * 6,
      width: theme.spacing.base * 6,
    },
  },
  pickedIcon: {
    verticalAlign: "middle",
    color: (picks: CountdownProps) =>
      picks.has_fan_pick ? theme.colors.primary.dark : theme.colors.grey.dark,
    height: theme.spacing.base * 5,
    width: theme.spacing.base * 5,
    [theme.mediaQuery(theme.breakpoints.medium)]: {
      height: theme.spacing.base * 6,
      width: theme.spacing.base * 6,
    },
  },
  closed: {
    color: "red",
    fontSize: "11px",
  },
  picked: {
    color: (picks: CountdownProps) =>
      picks.has_fan_pick ? theme.colors.primary.dark : theme.colors.grey.dark,
    fontSize: "11px",
  },
}));

const Countdown: React.FC<CountdownProps> = (props) => {
  let timerID: NodeJS.Timeout | undefined;
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const theme = useTheme<DefaultTheme>();
  const picks: CountdownProps = {
    has_fan_pick: props.has_fan_pick,
    close_at: props.close_at,
  };
  const classes = useStyles({ ...picks, theme });

  useEffect(() => {
    let duration = undefined;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    timerID = setInterval(() => {
      const end = moment(props.close_at).format("YYYY-MM-DD HH:mm");
      const then: moment.Moment = moment(end, "YYYY-MM-DD HH:mm");
      const now: moment.Moment = moment();
      if (then > now) {
        duration = moment.duration(then.diff(now));
        days = Math.floor(duration.asDays());
        hours = duration.hours();
        minutes = duration.minutes();
      }

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
    }, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const generateTimer = () => {
    return (
      `${days > 0 ? days + "D " : ""}` +
      `${hours > 0 ? hours + "h " : ""}` +
      `${minutes > 0 ? minutes + "m " : ""}`
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.timer}>
        <Timer color="currentColor" className={classes.timerIcon} />
        {hours || minutes > 0 ? (
          generateTimer()
        ) : (
          <Typography variant="span" className={classes.closed}>
            CLOSED
          </Typography>
        )}
      </div>
      <div className={classes.pick}>
        <Pick color="currentColor" className={classes.pickedIcon} />
        <Typography variant="span" className={classes.picked}>
          {props.has_fan_pick ? "Picked" : "Not Picked"}
        </Typography>
      </div>
    </div>
  );
};

export default Countdown;
