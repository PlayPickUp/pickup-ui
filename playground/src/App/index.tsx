/* To test how our UI may operate on other sites with very specific selectors,
put some strong selectors in 'makeMeUgly.css' and uncomment its import below */

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./index.css";
import "./makeMeUgly.css";
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

const logos = [
  {
    url:
      "//images.ctfassets.net/vr34jcb0tstv/4dLm8VMrfP95hfh9tF4E4G/08fe8004b7fcb7c9b4bf616763401017/Partner_DraftKings.png",
    alt: "DraftKings",
  },
  {
    url:
      "//images.ctfassets.net/vr34jcb0tstv/5hh6O5v5uW7QdNCDJGaXyO/aa0812b3150a04ee81677c84ef3484c9/Partner_USA_Today.png",
    alt: "USA Today",
  },
  {
    url:
      "//images.ctfassets.net/vr34jcb0tstv/6xoss0oYKJcz8gW8PIKnH6/bbf802c8998ffb59a09dc5c417676f14/Partner_NASCAR.png",
    alt: "Nascar",
  },
  {
    url:
      "//images.ctfassets.net/vr34jcb0tstv/4KOHlhrpJiE9lAHVBaibNQ/56f670444f641fb70f4f3ddd5aba1046/Partner_FloSports.png",
    alt: "FloSports",
  },
  {
    url:
      "//images.ctfassets.net/vr34jcb0tstv/1W69IGJzWNiye8JtkjmKYT/bf6977704222bfa816c11f37c6362130/Partner_Comcast.png",
    alt: "Comcast",
  },
  {
    url:
      "//images.ctfassets.net/vr34jcb0tstv/4eW6g2MiMUdb48QzBV5cK6/246d6eaef504a304e59565b531697e08/Partner_FanDuel.png",
    alt: "FanDuel",
  },
];
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
        <Router>
          <div id="parent" style={{ width: "100%" }}>
            <Hero
              title="Capture your audience. Build a community."
              description="Unleash your fans' opinions with interactive content."
              image_src="https://images.ctfassets.net/vr34jcb0tstv/2XgjxzpUehZpgDwyeBTyVw/5e7f1fd3a77b87f1bd2a5c1488c1d98c/HERO-C-2b.png"
              image_alt="Fan hero"
              // ctaButton={{ label: "Get Started", url: "https://www.google.com" }}
              logos={logos}
            />
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
