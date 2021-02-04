import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  ThemeProvider,
  Typography,
  NestedInput,
  Fab,
  Table,
} from "@playpickup/core";
import { Create } from "@playpickup/icons";

import "./index.css";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

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
    <div style={{ marginTop: 40, marginBottom: 40, padding: 40 }}>
      <Fab icon={Create} title="Create Post" />
      <Fab size="large" icon={Create} disablePopOver title="Create Post" />
    </div>
    <div
      style={{
        display: "flex",
        marginTop: 40,
        marginBottom: 40,
        padding: 40,
        width: "100%",
        minHeight: 400,
      }}
    >
      <Table rows={rows} columns={columns} />
    </div>
  </ThemeProvider>
);

export default App;
