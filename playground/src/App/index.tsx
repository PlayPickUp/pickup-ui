/* To test how our UI may operate on other sites with very specific selectors,
put some strong selectors in 'makeMeUgly.css' and uncomment its import below */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./index.css";
// import "./makeMeUgly.css";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Ad,
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
  },
};

const App: React.FC = () => {
  const [twoStep, setTwoStep] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const classes = useStyles();

  useEffect(() => {});
  // Outer div with className "Playground" is targeted by MakeMeUgly
  return (
    <div className="Playground">
      <ThemeProvider theme={publisherTheme}>
        <Hero
          title="Capture your audience. Build a community."
          description="Unleash your fans' opinions with interactive content."
          image_src="https://images.ctfassets.net/vr34jcb0tstv/2XgjxzpUehZpgDwyeBTyVw/5e7f1fd3a77b87f1bd2a5c1488c1d98c/HERO-C-2b.png"
          image_alt="Fan hero"
          ctaButton={{ label: "Get Started", url: "https://www.google.com" }}
        />
        <Router>
          <div id="parent" style={{ width: 295 }}>
            <Formik
              initialValues={{ phoneNumber: "" }}
              validationSchema={Yup.object().shape({
                phoneNumber: Yup.string()
                  .min(12, "Must be at least 10 digits")
                  .max(12, "Cannot be longer than 10 digits") // note: these numbers are offset to account for +1 in the input
                  .required("Valid phone number required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                console.log(values);
              }}
            >
              {({ isSubmitting, values }) => (
                <Form noValidate>
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    usePhoneNumber={true}
                    label="Mobile Phone Number"
                    buttonText="Submit"
                    useSubmit={true}
                    disabled={isSubmitting}
                    component={NestedInput}
                    onClick={() => console.log(values)}
                  />
                  <br />
                  <Field
                    id="notNumber"
                    name="notNumber"
                    useVerificationCode={true}
                    label="not Number"
                    buttonText="Submit"
                    useSubmit={true}
                    disabled={isSubmitting}
                    component={NestedInput}
                    onClick={() => console.log(values)}
                  />
                  <br />
                  <Field
                    id="normal"
                    name="normal"
                    label="just nested"
                    buttonText="Submit"
                    useSubmit={true}
                    disabled={isSubmitting}
                    component={NestedInput}
                    onClick={() => console.log(values)}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
