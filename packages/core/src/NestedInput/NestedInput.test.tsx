import React from "react";
import { fireEvent, render } from "@testing-library/react";

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
  const { getByTestId } = render(
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
  fireEvent.click(getByTestId("pickup-nested-button"));
  expect(getByTestId("pickup-nested-button")).toBeCalled;
});

// test("Props render correctly", () => {
//   const handleChange = jest.fn();
//   const { getByPlaceholderText, getByTestId } = render(
//     <ThemeProvider>
//       <NestedInput
//         id="email"
//         name="email"
//         placeholder="you@example.com"
//         buttonText="Sign Up"
//         handleChange={handleChange}
//       />
//     </ThemeProvider>
//   );
//   const input = getByTestId("nested-input");
//   expect(getByPlaceholderText("you@example.com")).toBeTruthy();
//   expect(input.getAttribute("id")).toEqual("email");
//   expect(input.getAttribute("name")).toEqual("email");
//   expect(getByTestId("pickup-button").getAttribute("value")).toEqual("Sign Up");

// TODO: Wire this to work correctly
// https://testing-library.com/docs/example-input-event/
// fireEvent.change(input, { target: { value: "eric@playpickup.com" } });
// expect(input.getAttribute("value")).toBe("eric@playpickup.com");
// });
//
