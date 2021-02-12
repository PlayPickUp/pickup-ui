import React from "react";
import { render } from "@testing-library/react";

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
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Props render correctly", () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText, getByTestId } = render(
    <ThemeProvider>
      <NestedInput
        id="email"
        name="email"
        placeholder="you@example.com"
        buttonText="Sign Up"
        handleChange={handleChange}
      />
    </ThemeProvider>
  );
  const input = getByTestId("nested-input");
  expect(getByPlaceholderText("you@example.com")).toBeTruthy();
  expect(input.getAttribute("id")).toEqual("email");
  expect(input.getAttribute("name")).toEqual("email");
  expect(getByTestId("pickup-button").getAttribute("value")).toEqual("Sign Up");

  // TODO: Wire this to work correctly
  // https://testing-library.com/docs/example-input-event/
  // fireEvent.change(input, { target: { value: "eric@playpickup.com" } });
  // expect(input.getAttribute("value")).toBe("eric@playpickup.com");
});
