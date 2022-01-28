import React, { useState } from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Formik, Form, Field } from "formik";
import ThemeProvider from "../ThemeProvider";
import NestedInput from "./index";
import { NestedInputProps } from "../types";

const NestedInputFormik = (
  optionalProps?: Partial<NestedInputProps>
): JSX.Element => {
  return (
    <ThemeProvider>
      <div>
        <Formik
          initialValues={{
            email: "initial value",
          }}
          onSubmit={jest.fn()}
        >
          <Form>
            <Field
              id="nestedInput"
              name="nestedInput"
              placeholder={
                optionalProps.usePhoneNumber
                  ? "123-456-7890"
                  : "Placeholder text"
              }
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
  const onClick = jest.fn();
  const { getByPlaceholderText, getByTestId } = render(
    <NestedInputFormik onClick={onClick} />
  );

  const input = getByPlaceholderText("Placeholder text");
  expect(input).toBeTruthy();
  expect(input.getAttribute("id")).toEqual("nestedInput");
  expect(input.getAttribute("name")).toEqual("nestedInput");
  expect(input.getAttribute("value")).toBe("initial value");
  expect(getByTestId("pickup-button").getAttribute("value")).toEqual("Sign Up");

  // TODO: Wire this to work correctly
  // https://testing-library.com/docs/example-input-event/
  fireEvent.change(input, { target: { value: "eric@playpickup.com" } });
  expect(input.getAttribute("value")).toBe("eric@playpickup.com");
});

test("useSubmit is false", () => {
  const handleChange = jest.fn();
  const { getByTestId } = render(
    <ThemeProvider>
      <NestedInput
        buttonText="test submit"
        placeholder="test placeholder"
        id="test"
        name="test"
        handleChange={handleChange}
        useSubmit={false}
        field={{
          value: "",
          name: "phone",
          onBlur: jest.fn(),
          onChange: jest.fn(),
        }}
        form={{}}
      />
    </ThemeProvider>
  );
  expect(getByTestId("pickup-nested-button")).toBeTruthy;
});

test("onClick function is passed", () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();
  const { getByText } = render(
    <ThemeProvider>
      <NestedInput
        buttonText="test submit"
        placeholder="test placeholder"
        id="test"
        name="test"
        handleChange={handleChange}
        useSubmit={false}
        onClick={handleClick}
        field={{
          value: "",
          name: "phone",
          onBlur: jest.fn(),
          onChange: jest.fn(),
        }}
        form={{}}
      />
    </ThemeProvider>
  );
  const button = getByText("test submit");
  fireEvent.click(button);
  expect(handleClick).toBeCalled;
});

test("Props render correctly", async () => {
  const InputTest = (): JSX.Element => {
    const [value, setValue] = useState("initial value");
    const setFieldValue = (
      name: string,
      event: React.BaseSyntheticEvent
    ): void => {
      event.preventDefault();
      console.log("SETFIELDVALUE");
      setValue(event.currentTarget.value);
    };
    return (
      <ThemeProvider>
        <NestedInput
          id="email"
          name="email"
          placeholder="you@example.com"
          buttonText="Sign Up"
          handleChange={(evt: React.BaseSyntheticEvent) => {
            console.log("HANDLE CHANGE");
            setValue(evt.currentTarget.value);
          }}
          field={{
            value: value,
            name: "email",
            onBlur: jest.fn(),
            onChange: jest.fn(),
          }}
          form={{
            setFieldValue: setFieldValue,
          }}
        />
      </ThemeProvider>
    );
  };

  const { getByPlaceholderText, getByTestId } = render(<InputTest />);
  const input = getByPlaceholderText("you@example.com");
  expect(input).toBeTruthy();
  expect(input.getAttribute("id")).toEqual("email");
  expect(input.getAttribute("name")).toEqual("email");
  expect(input.getAttribute("value")).toBe("initial value");
  expect(getByTestId("pickup-button").getAttribute("value")).toEqual("Sign Up");

  // TODO: Wire this to work correctly
  // https://testing-library.com/docs/example-input-event/
  fireEvent.change(input, { target: { value: "eric@playpickup.com" } });
  await waitFor(() => {
    expect(input.getAttribute("value")).toBe("eric@playpickup.com");
  });
});
