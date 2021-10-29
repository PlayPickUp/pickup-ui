/**
 *
 * NOTE: These tests will fail in MultiDownshift without the plugin
 * '@babel/plugin-proposal-class-properties in the babel.config file
 *
 **/

import React from "react";
import { render } from "@testing-library/react";
import { Formik, Field, Form } from "formik";

import ThemeProvider from "../ThemeProvider";
import MultiSelect from ".";
import { SelectItem } from "../types";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Props
const items: SelectItem[] = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
];

const FormComponent: React.FC<{ onSubmit: jest.Mock }> = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await sleep(500);
    onSubmit(values);
  };
  return (
    <ThemeProvider>
      <div>
        <Formik
          initialValues={{
            selectMany: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              id="selectMany"
              name="selectMany"
              label="MultiSelect Test"
              items={items}
              component={MultiSelect}
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </ThemeProvider>
  );
};

const handleSubmit = jest.fn();

test("MultiSelect renders without crashing, matches snapshot", () => {
  const { container } = render(<FormComponent onSubmit={handleSubmit} />);
  expect(container).toMatchSnapshot();
});
