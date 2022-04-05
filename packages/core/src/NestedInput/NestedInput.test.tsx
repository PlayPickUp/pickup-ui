import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import jssSerializer from "jss-snapshot-serializer";
expect.addSnapshotSerializer(jssSerializer);
import { Formik, Form, Field } from "formik";
import ThemeProvider from "../ThemeProvider";
import NestedInput from "./index";
import { NestedInputProps } from "../types";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
interface OptionalProps extends NestedInputProps {
  onSubmit?: jest.Mock;
}
const NestedInputFormik = (
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
            nestedInput: "initial value",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              id="nestedInput"
              name="nestedInput"
              placeholder="Placeholder text"
              buttonText="Click Button"
              component={NestedInput}
              value="initial value"
              {...optionalProps}
            />
          </Form>
        </Formik>
      </div>
    </ThemeProvider>
  );
};

test("Standard NestedInput renders without crashing, matches snapshot", () => {
  const { container } = render(<NestedInputFormik />);
  expect(container).toMatchSnapshot();
});

test("NestedInput with usePhoneNumber renders without crashing, matches snapshot", () => {
  const { container } = render(<NestedInputFormik usePhoneNumber />);
  expect(container).toMatchSnapshot();
});

test("NestedInput with useVerificationCode renders without crashing, matches snapshot", () => {
  const { container } = render(<NestedInputFormik useVerificationCode />);
  expect(container).toMatchSnapshot();
});

test("Standard NestedInput props pass and render correctly", () => {
  const { getByPlaceholderText } = render(
    <NestedInputFormik useSubmit={false} />
  );

  const input = getByPlaceholderText("Placeholder text");
  expect(input).toBeTruthy();
  expect(input.getAttribute("id")).toEqual("nestedInput");
  expect(input.getAttribute("name")).toEqual("nestedInput");
  expect(input.getAttribute("value")).toBe("initial value");
  fireEvent.change(input, { target: { value: "eric@playpickup.com" } });
  expect(input.getAttribute("value")).toBe("eric@playpickup.com");
});

test("Phone NestedInput props pass and render correctly", () => {
  const { getByPlaceholderText, getByLabelText } = render(
    <NestedInputFormik usePhoneNumber label="Phone input" useSubmit={false} />
  );

  expect(getByLabelText("Phone input")).toBeTruthy();
  const input = getByPlaceholderText("(345) 555-2343");
  expect(input).toBeTruthy();
  expect(input.getAttribute("id")).toEqual("nestedInput");
  expect(input.getAttribute("name")).toEqual("nestedInput");
  expect(input.getAttribute("value")).toBe("");
  fireEvent.change(input, { target: { value: "6151234567" } });
  expect(input.getAttribute("value")).toBe("(615) 123-4567");
});

test("Verification code NestedInput props pass and render correctly", () => {
  const { getByPlaceholderText, getByLabelText } = render(
    <NestedInputFormik
      useVerificationCode
      label="Verification code"
      useSubmit={false}
    />
  );

  expect(getByLabelText("Verification code")).toBeTruthy();
  const input = getByPlaceholderText("Placeholder text");
  expect(input).toBeTruthy();
  expect(input.getAttribute("id")).toEqual("nestedInput");
  expect(input.getAttribute("name")).toEqual("nestedInput");
  expect(input.getAttribute("value")).toBe("initial value");
  fireEvent.change(input, { target: { value: "123456" } });
  expect(input.getAttribute("value")).toBe("123456");
});

test("Submit is passed when useSubmit is true", async () => {
  const handleSubmit = jest.fn();
  const { getByText } = render(<NestedInputFormik onSubmit={handleSubmit} />);
  const button = getByText("Click Button");
  expect(button).toBeTruthy();
  fireEvent.click(button);
  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      nestedInput: "initial value",
    })
  );
});

test("onClick is passed when useSubmit is false", () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <NestedInputFormik useSubmit={false} onClick={onClick} />
  );
  const button = getByText("Click Button");
  expect(button).toBeTruthy();
  fireEvent.click(button);
  expect(onClick).toBeCalled();
});

test("Disabled prop passes and is rendered correctly", () => {
  const standardComponent = render(<NestedInputFormik disabled={true} />);
  const input = standardComponent.getByPlaceholderText("Placeholder text");
  const submitButton = standardComponent.getByText("Click Button");
  const phoneComponent = render(
    <NestedInputFormik usePhoneNumber disabled={true} useSubmit={false} />
  );
  const phoneInput = phoneComponent.getByPlaceholderText("(345) 555-2343");
  const standardButton = phoneComponent.getByTestId("pickup-nested-button");
  expect(input.hasAttribute("disabled"));
  expect(phoneInput.hasAttribute("disabled"));
  expect(submitButton.hasAttribute("disabled"));
  expect(standardButton.hasAttribute("disabled"));
});

test("breakpoint nested input is rendred correctly", () => {
  const { getByTestId } = render(<NestedInputFormik usePhoneNumber />);
  const hidden = getByTestId("breakpoint-large-div");
  const shown = getByTestId("breakpoint-small-div");

  const breakpointShownStyle = window.getComputedStyle(shown);
  expect(breakpointShownStyle.display).toBe("inline");
  const breakpointHiddenStyle = window.getComputedStyle(hidden);
  expect(breakpointHiddenStyle.display).toBe("none");
});
