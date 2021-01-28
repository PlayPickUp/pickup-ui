import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ThemeProvider, Typography, NestedInput } from "@playpickup/core";

import "./index.css";

const App: React.FC = () => (
  <ThemeProvider>
    <div style={{ padding: 40 }}>
      <Typography variant="title">Hello, PickUp!</Typography>
      <Typography
        variant="heading3"
        style={{ fontStyle: "normal", margin: "20px 0" }}
      >
        👋 Howdy human!1!
      </Typography>
      <Typography>
        Feel free to throw some components in here for testing. It''s your lil
        component playground!
      </Typography>
    </div>
    <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
      {/* Throw Some Stuff Here Dawgie */}

      {/* NestedInput component w/ Formik as wrapper */}
      <Formik
        initialValues={{ email: null }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("A valid email address is required!")
            .required("Email address is required!")
            .nullable(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, handleChange }) => (
          <Form>
            <NestedInput
              id="email"
              name="email"
              buttonText="Sign up"
              placeholder="email@example.com"
              errors={errors}
              touched={touched}
              handleChange={handleChange}
            />
          </Form>
        )}
      </Formik>
    </div>
  </ThemeProvider>
);

export default App;
