import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { DefaultTheme, ProgressButtonProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  "@keyframes growRight": {
    from: { width: 0 },
    to: { width: (props) => `${(props.fanPoints / props.cost) * 100}%` },
  },
  root: {
    display: "flex",
    position: "relative",
    width: "100%",
    height: "auto",
    minHeight: 47,
    backgroundColor: theme.colors.purple.lightBase,
    color: theme.colors.white,
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    overflow: "hidden",
    textDecoration: "none",
  },
  progressBar: {
    display: "block",
    position: "absolute",
    height: "100%",
    backgroundColor: theme.colors.purple.base,
    animation: "$growRight 1s cubic-bezier(0.280, 0.520, 0.630, 0.990) 1",
    width: (props) => `${(props.fanPoints / props.cost) * 100}%`,
    zIndex: 1,
  },
  disabledBar: {
    backgroundColor: theme.colors.grey.lightBase,
  },
  active: {
    background: theme.gradients.main,
    "&:hover": {
      background: theme.gradients.hover,
    },
  },
  disabled: {
    backgroundColor: theme.colors.grey.light,
    color: theme.colors.grey.base,
  },
  textContainer: {
    position: "relative",
    margin: "auto",
    fontFamily: theme.typography.fontFamilies.headline,
    fontSize: 18,
    lineHeight: "24px",
    letterSpacing: "0.3px",
    textTransform: "uppercase",
    zIndex: 2,
  },
}));

const ProgressButton: React.FC<ProgressButtonProps> = ({
  status,
  prizeEnv,
  cost,
  fanPoints,
  href,
  onClick,
  to,
  useSubmit,
  className,
}) => {
  const classes = useStyles({ cost, fanPoints });
  const [active, setActive] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [redeemed, setRedeemed] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Login to Redeem");
  const [Element, setElement] = useState<keyof JSX.IntrinsicElements>("a");

  useEffect(() => {
    if (status === "Ready to Redeem") {
      setButtonText(`Redeem for ${cost} points`);
    }
    if (status === "Not Enough Points") {
      setActive(false);
      setButtonText(`${fanPoints} / ${cost} points`);
      if (prizeEnv) {
        setDisabled(true);
        setElement("button");
      }
    }
    if (status === "Already Redeemed") {
      setActive(true);
      setRedeemed(true);
      setButtonText(`Redeem for ${cost} points`);
      if (prizeEnv) {
        setActive(false);
        setDisabled(true);
        setElement("button");
      }
    }
  }, [disabled]);

  if (useSubmit) {
    return (
      <button
        data-testid="progess-button"
        className={classNames({
          [classes.root]: true,
          [classes.active]: active,
          [classes.disabled]: disabled,
          [className]: className,
        })}
        disabled={disabled}
        type="submit"
        onClick={onClick}
      >
        {!active && !redeemed ? (
          <div
            className={classNames({
              [classes.progressBar]: true,
              [classes.disabledBar]: disabled,
            })}
          />
        ) : null}
        <div className={classes.textContainer}>{buttonText}</div>
      </button>
    );
  }

  if (to) {
    return (
      <Link
        data-testid="progess-button"
        className={classNames({
          [classes.root]: true,
          [classes.active]: active,
          [className]: className,
        })}
        to={to}
        onClick={onClick}
      >
        {!active && !redeemed ? (
          <div
            className={classNames({
              [classes.progressBar]: true,
              [classes.disabledBar]: disabled,
            })}
          />
        ) : null}
        <div className={classes.textContainer}>{buttonText}</div>
      </Link>
    );
  }

  return (
    <Element
      data-testid="progess-button"
      className={classNames({
        [classes.root]: true,
        [classes.active]: active,
        [classes.disabled]: disabled,
        [className]: className,
      })}
      disabled={disabled}
      href={href}
      onClick={onClick}
    >
      {!active && !redeemed ? (
        <div
          className={classNames({
            [classes.progressBar]: true,
            [classes.disabledBar]: disabled,
          })}
        />
      ) : null}
      <div className={classes.textContainer}>{buttonText}</div>
    </Element>
  );
};

export default ProgressButton;
