/* To test how our UI may operate on other sites with very specific selectors,
put some strong selectors in 'makeMeUgly.css' and uncomment its import below */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./index.css";
// import "./makeMeUgly.css";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import {
  DataTable,
  Dropdown,
  Fab,
  FeedCard,
  FormError,
  Icon,
  Loader,
  NestedInput,
  Select,
  TextArea,
  TextInput,
  ThemeProvider,
  Typography,
  MultiSelect,
  Chip,
  Button,
  PickerButton,
  ProgressButton,
  StatusIcon,
  Hero,
  Card,
  HorizontalRule,
  createUseStyles,
  CheckBox,
  Breadcrumbs,
  DefaultTheme,
} from "@playpickup/core";
import { Create, Countdown, Pick } from "@playpickup/icons";

const useStyles = createUseStyles(() => ({
  horizontal: {
    color: "grey",
  },
  postForm: {
    display: "block",
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    "& ul": { listStyleType: "none" },
  },
  playground: {
    display: "flex",
    position: "relative",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 4,
    margin: "0 auto",
  },
  root: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 4,
    width: 300,
  },
  text: {
    fontSize: 11,
    textAlign: "left",
    lineHeight: "18px",
    color: "grey",
  },
}));

const handleEditClick = () => {
  console.log("handledEditClick");
};

const rows = [
  {
    id: 23,
    post_title: "Will the Cleveland Indians win the World Series?",
    league: "MLB",
    prop_id: 3923,
    article_url:
      "http://thetribe.net/2021/01/04/ranking-cleveland-indians-outfield-power",
    headline: "Ranking the Cleveland Baseball team's outfield power",
    excerpt:
      "It's no secret that Cleveland has come up short the past few years, but will a weak offseason help?",
    featured_img: "https://aws.bucket.fake.pickup/1299091083.jpg",
    published_at: "Febuary 4th, 2021 3:44PM CST",
    updated_at: "Febuary 4th, 2021 5:44PM CST",
  },
];

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "post_title",
    numeric: false,
    disablePadding: false,
    label: "Title",
    width: 120,
  },
  { id: "league", numeric: false, disablePadding: false, label: "League" },
  {
    id: "prop_id",
    numeric: true,
    disablePadding: true,
    label: "Prop ID",
    width: 100,
  },
  {
    id: "article_url",
    numeric: false,
    disablePadding: false,
    label: "Article URL",
  },
  {
    id: "headline",
    numeric: false,
    disablePadding: false,
    label: "Headline",
  },
  {
    id: "excerpt",
    numeric: false,
    disablePadding: false,
    label: "Excerpt",
  },
  {
    id: "featured_img",
    numeric: false,
    disablePadding: false,
    label: "Featured Image",
  },
  {
    id: "published_at",
    numeric: false,
    disablePadding: false,
    label: "Publish Date",
  },
  {
    id: "updated_at",
    numeric: false,
    disablePadding: false,
    label: "Updated Date",
  },
];

const leagues = [
  {
    value: "mlb",
    label: "MLB",
  },
  {
    value: "nfl",
    label: "NFL",
  },
  {
    value: "mma",
    label: "MMA",
  },
  {
    value: "golf",
    label: "Golf",
  },
  {
    value: "frisbee",
    label: "Frisbee",
  },
  {
    value: "bowling",
    label: "Bowling",
  },
  {
    value: "polevault",
    label: "polevault",
  },
  {
    value: "billiards",
    label: "billiards",
  },
  {
    value: "dodgeball",
    label: "Dodgeball",
  },
];

const ActionToolbar = () => {
  return <div>Edit</div>;
};

const handleChange = () => {
  console.log("change!");
};

const Picks = [
  { label: "Ravens", value: "Ravens" },
  { label: "Chiefs", value: "Chiefs" },
];

const crumbs = [
  {
    name: "marketplace",
    path: "/sports-betting",
  },
  {
    name: "$200 off $400 TRX Suspension Trainer Bundle & Training Club",
    path: "/$200 off $400 TRX Suspension Trainer Bundle & Training Club",
  },
];
const red = {
  light: "#FF1244",
  base: "#FF1244",
};
const grey = {
  light: "#FF1244",
  lightBase: "#FF1244",
  base: "#FF1244",
  dark: "#FF1244",
};

const publisherTheme: Partial<DefaultTheme> = {
  colors: {
    primary: {
      light: "#4EAB75",
      lightBase: "#4EAB75",
      base: "#4EAB75",
      dark: "#4EAB75",
      transparent: "#DFEDE4",
    },
    // secondary: { ...grey },
    // green: red,
    // purple: grey,
    // grey,
    // red,
    black: "#FF1244",
    // white: "#FFF",
    // success: red.base,
    // error: red.base,
  },
};

const App: React.FC = () => {
  const [twoStep, setTwoStep] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {
    console.log(checked), [checked];
  });
  // Outer div with className "Playground" is targeted by MakeMeUgly
  return (
    <ThemeProvider theme={publisherTheme}>
      <Router>
        <div className="Playground">
          <Hero
            title="The State of Sports Betting"
            description="Mobile and online sports betting is now legal and available in 15 states in the United States. It’s been three years since the Supreme Court struck down the federal ban on sports betting, allowing states to legalize it if they wish."
            image_src="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/trx-setup-logo.png"
            image_alt="pickup-logo"
            eyebrow={{ name: "Fanatics", description: "$30 value" }} // comment out to see non-eyebrow formatting
            crumbs={crumbs}
            chip="500 Points"
          />
          <Typography variant="body">
            we are here today to test partial theme override
          </Typography>
          <PickerButton
            displayText="testPickerButton"
            onClick={() => console.log("test")}
            result={12}
            isPick
            showResult
          ></PickerButton>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
