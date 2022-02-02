/**
 *
 * NOTE: These tests will fail in MultiDownshift without the plugin
 * '@babel/plugin-proposal-class-properties in the babel.config file
 *
 **/

import React from "react";
import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { Formik, Field, Form } from "formik";
import ThemeProvider from "../ThemeProvider";
import Select from ".";
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

const FormComponent: React.FC<{
  onSubmit: jest.Mock;
}> = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await sleep(500);
    onSubmit(values);
  };
  return (
    <ThemeProvider>
      <div>
        <Formik
          initialValues={{
            selection: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              id="selection"
              name="selection"
              label="Select Test"
              placeholder="Select one"
              className="Input-1-2-3"
              style={{ color: "blue" }}
              items={items}
              component={Select}
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </ThemeProvider>
  );
};

const handleSubmit = jest.fn();

test("Select renders without crashing, matches snapshot", () => {
  Math.random = jest.fn(() => 1);  // <--- This is the key, overriding the system's Math.random function
  const { container } = render(<FormComponent onSubmit={handleSubmit} />);
  expect(container).toMatchSnapshot();
});

test("Props are passed and rendered", () => {
  const { getByText, getByRole, getByPlaceholderText, getByTestId } = render(
    <FormComponent onSubmit={handleSubmit} />
  );

  expect(getByText("Select Test")).toBeTruthy();
  expect(getByPlaceholderText("Select one")).toBeTruthy();
  expect(getByTestId("select").getAttribute("class")).toContain("Input-1-2-3");
  expect(getByTestId("select").getAttribute("style")).toEqual("color: blue;");
  const menuButton = getByRole("button", { name: "toggle-menu" });
  fireEvent.click(menuButton);
  expect(getByText("Option 2")).toBeTruthy();
  cleanup;
});

test("Item is selectable", () => {
  const { getByText, getByRole } = render(
    <FormComponent onSubmit={handleSubmit} />
  );

  const menuButton = getByRole("button", { name: "toggle-menu" });
  fireEvent.click(menuButton);
  fireEvent.click(getByText("Option 1"));

  const input = getByRole("textbox", {
    name: "Select Test",
  }) as HTMLInputElement;
  expect(input.value).toEqual("option1");
  cleanup;
});

test("Values are passed to form submission", async () => {
  const { getByText, getByRole } = render(
    <FormComponent onSubmit={handleSubmit} />
  );

  const menuButton = getByRole("button", { name: "toggle-menu" });
  fireEvent.click(menuButton);
  fireEvent.click(getByText("Option 1"));

  fireEvent.click(getByRole("button", { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      selection: "option1",
    })
  );
});
