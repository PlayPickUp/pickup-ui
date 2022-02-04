import React from "react";
import { fireEvent, render } from "@testing-library/react";
import jssSerializer from "jss-snapshot-serializer";
expect.addSnapshotSerializer(jssSerializer);
import ThemeProvider from "../ThemeProvider";
import TextInput from ".";
import { TextInputProps } from "../types";
import { Formik, Form, Field } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
interface OptionalProps extends TextInputProps {
  onSubmit?: jest.Mock;
}
const TextInputFormik = (
  optionalProps?: Partial<OptionalProps>
): JSX.Element => {
  const handleSubmit = async (values) => {
    await sleep(500);
    optionalProps.onSubmit(values);
  };
  return (
    <ThemeProvider>
      <div>
        <Formik
          initialValues={{
            textInput: "initial value",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              id="textInput"
              name="textInput"
              placeholder="Placeholder text"
              component={TextInput}
              value="initial value"
              {...optionalProps}
            />
          </Form>
        </Formik>
      </div>
    </ThemeProvider>
  );
};

test("Standard TextInput renders with label without crashing, matches snapshot", () => {
  const { container } = render(<TextInputFormik label="test" />);
  expect(container).toMatchSnapshot();
});

test("Standard TextInput renders without crashing, matches snapshot", () => {
  const { container } = render(<TextInputFormik />);
  expect(container).toMatchSnapshot();
});

test("Standard TextInput props pass and render correctly", () => {
  const { getByPlaceholderText } = render(<TextInputFormik />);

  const input = getByPlaceholderText("Placeholder text");
  expect(input).toBeTruthy();
  expect(input.getAttribute("id")).toEqual("textInput");
  expect(input.getAttribute("name")).toEqual("textInput");
  expect(input.getAttribute("value")).toEqual("initial value");
  fireEvent.change(input, { target: { value: "this is a test" } });
  expect(input.getAttribute("value")).toBe("this is a test");
});

test("Standard TextInput as type password pass and render correctly", () => {
  const { getByPlaceholderText } = render(<TextInputFormik type="password" />);

  const input = getByPlaceholderText("Placeholder text");
  expect(input.getAttribute("type")).toEqual("password");
});
