import React from "react";
import { render, fireEvent } from "@testing-library/react";
import jssSerializer from "jss-snapshot-serializer";
expect.addSnapshotSerializer(jssSerializer);
import ThemeProvider from "../ThemeProvider";
import { TextAreaProps } from "../types";
import TextArea from ".";
import { Formik, Form, Field } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
interface OptionalProps extends TextAreaProps {
  onSubmit?: jest.Mock;
}

const TextAreaFormik = (
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
          initialValues={{ textArea: "initial value" }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              id="textArea"
              name="textArea"
              data-testid
              component={TextArea}
              value="initial value"
              {...optionalProps}
            />
          </Form>
        </Formik>
      </div>
    </ThemeProvider>
  );
};

test("TextArea renders without crashing, matches snapshot", () => {
  const { container } = render(<TextAreaFormik />);
  expect(container).toMatchSnapshot();
});

test("TextArea with label renders without crashing, matches snapshot", () => {
  const { container } = render(<TextAreaFormik label="box" />);
  expect(container).toMatchSnapshot();
});

test("Standard TextArea props pass amd remder correctly", () => {
  const { getByText } = render(<TextAreaFormik />);

  const textArea = getByText("initial value");
  expect(textArea).toBeTruthy();
  expect(textArea.getAttribute("name")).toEqual("textArea");
  fireEvent.change(textArea, { target: { value: "this is a test" } });
  const textAreaNew = getByText("this is a test");
  expect(textAreaNew).toBeTruthy();
});

test("className and style props are passed and rendered correctly", () => {
  const { getByTestId } = render(
    <TextAreaFormik
      className="test-12345"
      style={{ margin: "10px" }}
      innerStyle={{ margin: "5px" }}
      innerClassName="test-12345"
    />
  );

  const div = getByTestId("textarea-wrapper");
  expect(div.getAttribute("class")).toContain("test-12345");
  const divStyle = window.getComputedStyle(div);
  expect(divStyle.margin).toBe("10px");

  const input = getByTestId("textarea");
  expect(input.getAttribute("class")).toContain("test-12345");
  const inputStyle = window.getComputedStyle(input);
  expect(inputStyle.margin).toBe("5px");
});
