import React from "react";
import Typography from "../Typography";
import { defaultTheme } from "../ThemeProvider/defaultTheme";
import { createUseStyles } from "react-jss";
import { FeedCardProps, DefaultTheme } from "../types";
import Countdown from "./Countdown";
import Button from "../Button";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  container: {
    display: "block",
    position: "relative",
    width: "100%",
    backgroundColor: "transparent",
    [theme.mediaQuery(theme.breakpoints.medium)]: {
      backgroundColor: theme.colors.white,
      border: `0.5px solid ${theme.colors.grey.light}`,
      borderRadius: theme.borderRadius * 2,
      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.04)",
      padding: "30px 20px",
    },
  },
  postContent: {
    flex: "1 1 405px",
    padding: "0 20px 20px",
  },
  featuredImage: {
    order: -2,
    "& > div": {
      width: "100%",
      borderRadius: theme.borderRadius,
      backgroundColor: theme.colors.grey.light,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      height: "120px",
      objectFit: "contain",
    },
  },
  expandedFeaturedIgmage: {
    order: -2,
    "& > div": {
      height: "140px",
      borderRadius: theme.borderRadius,
      backgroundColor: theme.colors.grey.light,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      width: "140px",
      objectFit: "contain",
    },
  },
  publisherRow: {
    display: "flex",
    position: "relative",
    flexFlow: "row wrap",
    alignItems: "center",
    width: "100%",
    margin:theme.spacing.base
  },
  publisherHeadline: {
    flex: "0 1 calc(100% - 58px)",
  },
  cardContainer: {
    marginTop: theme.spacing.base * 5,
    padding: "0px 20px",
    [theme.mediaQuery(theme.breakpoints.small)]: {
      padding: 0,
    },
  },
  card: {
    backgroundColor: theme.colors.white,
    margin: "10px",
    border: "1px solid #E5E3E8",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
    width: "220px",
    height: "100%",
    minHeight: "290px",
    display: "flex",
    flexDirection: "column",
  },
  expandedCard: {
    backgroundColor: theme.colors.white,
    margin: "10px",
    border: "1px solid #E5E3E8",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.08)",
    borderRadius: "8px",
    maxWidth: "420px",
    minHeight: "140px",
    height: "100%",
    display: "flex",
    flexDirection: "row",
  },
  button: {
    fontSize: 11,
    minHeight: 24,
    padding: "0 10px",
    display: "inline-block",
    marginRight: theme.spacing.base * 5,
  },
  h3: {
    fontWeight: "normal",
    fontSize: 18,
    letterSpacing: "-0.1px",
    padding: "0 10px",
  },
  publisherImage: {
    width: "16px",
    height: "16px",
    marginLeft: theme.spacing.base * 2,

  },
  body: {
    display: "inline-block",
    margin: theme.spacing.base,
    fontSize: 12,
    marginRight: theme.spacing.base,
  },
}));

const renderFeaturedImage = (featured_img: string) => {
  if (!featured_img || featured_img !== "false") {
    return { backgroundImage: `url(${featured_img})` };
  }
};

const FeedCard: React.FC<FeedCardProps> = ({
  image,
  publisherIcon,
  publisherName,
  publishedAt,
  title,
  timeLeft,
  pickCount,
  picks,
  expanded,
}) => {
  const classes = useStyles();

  return (
    <div className={expanded ? classes.expandedCard : classes.card}>
      <div>
        <a
          className={
            expanded ? classes.expandedFeaturedIgmage : classes.featuredImage
          }
          title={title}
        >
          <div style={renderFeaturedImage(image)} />
        </a>
      </div>

      <div
        style={{
          maxWidth: `${expanded ? "280px" : "200px"}`,
          wordWrap: "break-word",
        }}
      >
        <div className={classes.publisherRow}>
          <img
            src={publisherIcon}
            alt={publisherName}
            className={classes.publisherImage}
          />
          <a
            style={{
              display: "inline-block",
            }}
            title={publisherName}
          >
            <Typography
              variant="body"
              className={classes.body}
              color={"#615E66"}
              useUnescape
            >
              {publisherName}
            </Typography>
          </a>
          <Typography
            variant="body"
            element="span"
            color={defaultTheme.colors.grey.base}
            className={classes.body}
          >
            {publishedAt}
          </Typography>
        </div>

        <a title={title} style={{ color: "inherit" }}>
          <Typography
            variant="heading3"
            element="h3"
            className={classes.h3}
            useUnescape
          >
            {title}
          </Typography>
        </a>

        <div
          style={{
            padding: "8px",
          }}
        >
          {picks.map((pick) => {
            return (
              <Button key={pick.value} color="light" className={classes.button}>
                {pick.label}
              </Button>
            );
          })}
        </div>

        <div
          style={{
            padding: "2px 10px 10px 10px",
          }}
        >
          <Countdown close_at={timeLeft} has_fan_pick={pickCount} />
        </div>
      </div>
    </div>
  );
};
export default FeedCard;
