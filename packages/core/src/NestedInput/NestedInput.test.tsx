import React, { useState } from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import NestedInput from "./index";

test("Renders without crashing, matches snapshot", () => {
  const handleChange = jest.fn();
  const { container } = render(
    <ThemeProvider>
      <NestedInput
        id="email"
        name="email"
        placeholder="you@example.com"
        buttonText="Sign Up"
        handleChange={handleChange}
        field={{
          value: "eric@playpickup.com",
          name: "email",
          onBlur: jest.fn(),
          onChange: jest.fn(),
        }}
        form={{}}
      />
      <NestedInput
        id="phone"
        name="phone"
        placeholder="(123) 293-5555"
        buttonText="Verify"
        handleChange={handleChange}
        field={{
          value: "",
          name: "phone",
          onBlur: jest.fn(),
          onChange: jest.fn(),
        }}
        form={{}}
      />
      <NestedInput
        id="otp"
        name="otp"
        placeholder="123456"
        buttonText="Verify Pick"
        handleChange={handleChange}
        field={{
          value: "",
          name: "otp",
          onBlur: jest.fn(),
          onChange: jest.fn(),
        }}
        form={{}}
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
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
            name: "otp",
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
  expect(input.getAttribute("name")).toEqual("otp");
  expect(input.getAttribute("value")).toBe("initial value");
  expect(getByTestId("pickup-button").getAttribute("value")).toEqual("Sign Up");

  // TODO: Wire this to work correctly
  // https://testing-library.com/docs/example-input-event/
  fireEvent.change(input, { target: { value: "eric@playpickup.com" } });
  await waitFor(() => {
    expect(input.getAttribute("value")).toBe("eric@playpickup.com");
  });
});
