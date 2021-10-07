import React from "react";
import Typography from "../Typography";
import { defaultTheme } from "../ThemeProvider/defaultTheme";
import { createUseStyles } from "react-jss";
import { FeedCardProps, DefaultTheme } from "../types";
import Countdown from "./Countdown"
import Button from "../Button";
import { light } from "@material-ui/core/styles/createPalette";
//import NewsImage from "./news.png";


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
        [theme.mediaQuery(theme.breakpoints.medium)]: {
            flex: "0 1 405px",
            padding: "20px 0 0",
        },
    },
    featuredImage: {
        flex: "1 1 100%",
        order: -2,
        "& > div": {
            width: "120%",
            borderRadius: theme.borderRadius,
            backgroundColor: theme.colors.grey.light,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        },
        [theme.mediaQuery(theme.breakpoints.medium)]: {
            flex: "0 1 275px",
            "& > div": {
                width: '100%',
                height: "120px",
                objectFit: "contain",
                borderRadius: theme.borderRadius,
            },
        },
    },
    publisherRow: {
        display: "flex",
        position: "relative",
        flexFlow: "row wrap",
        alignItems: "center",
        width: "100%",
        padding: "10px",
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
        height:"290px"
    }
}));


const renderFeaturedImage = (featured_img: string) => {
    if (!featured_img || featured_img !== "false") {
        return { backgroundImage: `url(${featured_img})` };
        // } else {
        //     return { backgroundImage: `url(${NewsImage})` };
        // }
    };
}

const FeedCard: React.FC<FeedCardProps> = ({
    image,
    publisherIcon,
    publisherName,
    publishedAt,
    title,
    timeLeft,
    pickCount,
    picks
}) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <a
                className={classes.featuredImage}
                title={title}
            >
                <div style={renderFeaturedImage(image)} />
            </a>

            <div className={classes.publisherRow}>
                <img
                    src={publisherIcon}
                    alt={publisherName}
                    style={{
                        width: '16px',
                        height: '16px'
                    }}
                />
                <a
                    style={{
                        display: "inline-block",
                        paddingLeft: 10,
                    }}
                    title={publisherName}
                >
                    <Typography
                        variant="body"
                        style={{ fontSize: 12 }}
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
                    style={{
                        display: "inline-block",
                        marginLeft: 14,
                        fontSize: 12,
                    }}
                >
                    {publishedAt}
                </Typography>
            </div>

            <a title={title} style={{ color: "inherit" }}>
                <Typography
                    variant="heading3"
                    element="h3"
                    style={{
                        fontWeight: "normal",
                        fontSize: 18,
                        letterSpacing: "-0.1px",
                        padding: "0 10px"
                    }}
                    useUnescape
                >
                    {title}
                </Typography>
            </a>

            <div style={{
                padding: "8px"

            }}>
                {picks.map((pick, i) => {
                    return (
                        < Button
                            children={pick}
                            color="light"
                            style={{
                                fontSize: 11,
                                minHeight: 24,
                                padding: "0 10px",
                                display: "inline-block",
                                marginRight:"10px"
                            }}
                        />
                    );
                })}

            </div>

            <div style={{
                padding: "2px 10px"
            }}>
                <Countdown
                    close_at={timeLeft}
                    has_fan_pick={pickCount}
                />
            </div>

        </div>
    );
};
export default FeedCard;