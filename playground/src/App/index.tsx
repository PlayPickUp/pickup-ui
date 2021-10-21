import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import {
  DataTable,
  Dropdown,
  Fab,
  FeedCard,
  FormError,
  Icon,
  Label,
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
  Paper,
  PickerButton,
  ProgressButton,
  StatusIcon,
  Hero,
  Card,
  HorizontalRule,
  createUseStyles,
  DefaultTheme,
} from "@playpickup/core";
import { Create, Countdown, Pick } from "@playpickup/icons";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
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

const App: React.FC = () => {
  const [twoStep, setTwoStep] = useState<boolean>(false);
  const classes = useStyles();

  // To test with global resets, set withReset to true
  // To test with highly-specific CSS selectors, add 'aggressive' prop to ThemeProvider
  return (
    <ThemeProvider withReset={false}>
      <div style={{ padding: 40 }}>
        <Typography variant="title">Hello, PickUp!</Typography>
        <Typography
          variant="heading3"
          style={{ fontStyle: "normal", margin: "20px 0" }}
        >
          👋 Howdy human!!!
        </Typography>
        <Typography>
          Feel free to throw some components in here for testing. It's your lil
          component playground!
        </Typography>
      </div>

      {/* <div style={{ margin: 40, color: defaultTheme.colors.grey.light }}> */}
      <HorizontalRule color="red" showBolt className={classes.horizontal} />
      {/* </div> */}
      <div style={{ margin: 40, color: "purple" }}>
        <HorizontalRule color="red" />
      </div>

      <div style={{ padding: 40 }}>
        <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Time Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
      </div>
      <div style={{ padding: 40 }}>
        <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Time Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={true}
        />
      </div>

      <div style={{ margin: 40 }}>
        <Dropdown value={1} onChange={handleChange}>
          <option value={1}>A - Z</option>
          <option value={-1}>Z - A</option>
        </Dropdown>
      </div>
      <div
        style={{
          maxWidth: 840,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: 40,
        }}
      >
        <Router>
          <Card
            image="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
            eyebrow={{ name: "CROSSNET", description: "$20 Value" }}
            heading="CROSSNET Four-Way Volleyball"
            description="The world's first four-way volleyball game! Set up within minutes in sand, grass, or indoors."
            buttonProps={{
              status: "Ready to Redeem",
              cost: 250,
              fanPoints: 151.0,
              to: {
                pathname: `/marketplace`,
                state: {
                  prize: "prize",
                },
              },
            }}
          />
        </Router>
        <Card
          image="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          eyebrow={{ name: "CROSSNET", description: "$20 Value" }}
          heading="CROSSNET Four-Way Volleyball"
          description="The world's first four-way volleyball game! Set up within minutes in sand, grass, or indoors."
          buttonProps={{
            status: "Not Enough Points",
            cost: 250,
            fanPoints: 151.5,
            href: "https://www.playpickup.com",
          }}
        />
      </div>

      <div style={{ padding: 40 }}>
        <ProgressButton
          status="Not Enough Points" // comes from the Node API
          prizeEnv={true}
          cost={250}
          fanPoints={125}
          useSubmit
          onClick={() => {
            console.log("submit!");
          }}
        />
      </div>
      <div style={{ margin: 40 }}>
        <Hero
          title="The State of Sports Betting"
          description="Mobile and online sports betting is now legal and available in 15 states in the United States. It’s been three years since the Supreme Court struck down the federal ban on sports betting, allowing states to legalize it if they wish."
          image_src="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/bowlero_lanes.jpg"
          image_alt="bowlero"
          eyebrow={{ name: "Fanatics", description: "$30 value" }} // comment out to see non-eyebrow formatting
        />
      </div>
      <div style={{ padding: 40, width: 340, boxSizing: "border-box" }}>
        <PickerButton
          onClick={(e: any) => console.log(e)}
          displayText="Absolutely"
          style={{ marginBottom: 10 }}
          result={33.33}
          isPick={false}
        />
        <PickerButton
          onClick={(e: any) => console.log(e)}
          displayText="Absolutely"
          style={{ marginBottom: 10 }}
          showResult={true}
          result={33.33}
          isPick={false}
        />
        <PickerButton
          onClick={(e: any) => console.log(e)}
          displayText="Absolutely"
          style={{ marginBottom: 10 }}
          showResult={true}
          result={56}
          isPick={true}
        />
      </div>
      <div style={{ padding: 40, width: 340, boxSizing: "border-box" }}>
        <PickerButton
          onClick={(e: any) => console.log(e)}
          displayText="Definitely Not"
          style={{ marginBottom: 10 }}
          showResult={true}
          result={33.33}
          isIncorrect
        />
        <PickerButton
          onClick={(e: any) => console.log(e)}
          displayText="Absolutely"
          style={{ marginBottom: 10 }}
          result={56}
          showResult={true}
          isCorrect
        />
        <PickerButton
          onClick={(e: any) => console.log(e)}
          displayText="Maybe?"
          style={{ marginBottom: 10 }}
          result={33.33}
          showResult={true}
        />
      </div>
      <div style={{ padding: 40, width: 450 }}>
        <Paper withLogo style={{ minHeight: 200 }}>
          <Typography variant="body">Hello, PickUp!</Typography>
        </Paper>
      </div>
      <div style={{ padding: 40, width: 450 }}>
        <Paper style={{ minHeight: 200 }}>
          <Typography variant="body">Hello, PickUp!</Typography>
        </Paper>
      </div>
      <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
        {/* Throw Some Stuff Here Dawgie */}

        {/* NestedInput component w/ Formik as wrapper */}
        <Formik
          initialValues={{ email: "", publicationName: "", url: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("A valid email address is required!")
              .required("Email address is required!"),
            publicationName: Yup.string()
              .required("Publication name is required!")
              .nullable(),
            url: Yup.string().required("url is required!").nullable(),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            setFieldValue,
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              {!twoStep ? (
                <Field
                  id="email"
                  name="email"
                  buttonText="join"
                  placeholder="example@email.com"
                  useSubmit={false}
                  onClick={() => {
                    console.log("clickd");
                    if (values.email.trim() != "") {
                      setTwoStep(true);
                    }
                  }}
                  component={NestedInput}
                />
              ) : (
                <div>
                  <Field
                    id="publicationName"
                    name="publicationName"
                    placeholder="publication name"
                    label="Publication Name"
                    component={TextInput}
                  />
                  <br />
                  <Field
                    id="url"
                    name="url"
                    placeholder="url"
                    label="Url"
                    component={TextInput}
                  />
                  <br />
                  <div style={{ float: "left" }}>
                    <Button
                      color="light"
                      onClick={() => {
                        setTwoStep(false);
                      }}
                    >
                      back
                    </Button>
                  </div>
                  <div style={{ float: "right" }}>
                    <Button
                      color="light"
                      style={{ cursor: "pointer" }}
                      useSubmit
                      submitText="Submit"
                    />
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
        <Formik
          initialValues={{ phoneNumber: "" }}
          validationSchema={Yup.object().shape({
            phoneNumber: Yup.number().required(
              "A 10 digit phone number is required"
            ),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <div style={{ height: 40 }} />
              <Field
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(123) 555-2343"
                usePhoneNumber
                label="Mobile Phone Number"
                buttonText="Verify"
                useSubmit
                component={NestedInput}
              />
            </Form>
          )}
        </Formik>
        <Formik
          initialValues={{ otp: "", password: "" }}
          validationSchema={Yup.object().shape({
            otp: Yup.string()
              .max(6, "Verification Code requires 6 digits")
              .min(6, "Verification Code requires 6 digits")
              .required("Please enter your Verification Code")
              .typeError("A number is required"),
            password: Yup.string().required("Password is Required!"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <div style={{ height: 40 }} />
              <Field
                id="otp"
                name="otp"
                placeholder="123456"
                useVerificationCode
                label="Verification Code"
                buttonText="Verify"
                useSubmit
                component={NestedInput}
              />
              <Field
                id="password"
                name="password"
                type="password"
                component={TextInput}
                label="Password"
              />
            </Form>
          )}
        </Formik>
      </div>
      <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
        <Icon>
          <Create />
        </Icon>
      </div>
      <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
        <StatusIcon status={"pending"} />
      </div>
      <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
        <Fab
          icon={Create}
          title="Create post"
          onClick={handleEditClick}
          iconColor="#ff0"
        />
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 40,
          marginBottom: 40,
          padding: 40,
          width: "100%",
        }}
      >
        <DataTable
          headCells={headCells}
          rows={rows}
          defaultSortColumn="id"
          tableTitle="Homebase Posts"
          actionToolbar={ActionToolbar}
        />
      </div>
      <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
        <Loader />
      </div>
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          padding: 40,
          maxWidth: 550,
        }}
      >
        <Formik
          initialValues={{
            firstName: "Eric",
            excerpt: "Initial Excerpt!",
            leagues: "nfl",
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("First Name is required!"),
            excerpt: Yup.string(),
            leagues: Yup.string(),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                id="firstName"
                name="firstName"
                component={TextInput}
                placeholder="John"
                label="First Name"
              />
              <Field
                id="excerpt"
                name="excerpt"
                label="Excerpt"
                component={TextArea}
              />
              <Field
                id="leagues"
                name="leagues"
                items={leagues}
                label="League"
                component={Select}
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          padding: 40,
          maxWidth: 550,
        }}
      >
        <Formik
          initialValues={{ leagueTwo: "" }}
          validationSchema={Yup.object().shape({
            leagueTwo: Yup.string().required("Leagues are required"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                id="leagueTwo"
                name="leagueTwo"
                items={leagues}
                label="Leagues"
                component={MultiSelect}
              />

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          padding: 40,
          maxWidth: 550,
        }}
      >
        <Chip
          color="primary"
          label="All Sports"
          href="http://google.com"
          element="a"
          isActive
        />
      </div>
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          padding: 40,
          maxWidth: 550,
        }}
      >
        <Button variant="fit" color="secondary">
          Make Your Pick
        </Button>
        <Button variant="fit" color="light">
          Make Your Pick
        </Button>
      </div>
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          padding: 40,
          maxWidth: 550,
        }}
      >
        <Typography className="hello-world" useUnescape>
          Oakland A&#8217;s Eye a New Home
        </Typography>
      </div>
      <div
        style={{
          marginTop: 40,
          marginBottom: 40,
          padding: 40,
          maxWidth: 550,
        }}
      >
        <FormError
          errors={{
            formError: "This error should render",
            noError: null,
          }}
          touched={{ formError: true }}
          name={"formError"}
        />
      </div>
      <div>
        <Countdown color="red" />
        countdown <Pick color="red" /> Pick
      </div>
    </ThemeProvider>
  );
};

export default App;
