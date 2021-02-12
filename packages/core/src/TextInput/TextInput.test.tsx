import React from "react";
import { fireEvent, render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import TextInput from ".";

const handleChange = jest.fn();

test("TextInput renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <TextInput id="firstName" name="firstName" handleChange={handleChange} />
    </ThemeProvider>
  );

  expect(container).toMatchSnapshot();
});

test("Props are passed and rendered correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <TextInput id="firstName" name="firstName" handleChange={handleChange} />
    </ThemeProvider>
  );

  expect(getByTestId("text-input").getAttribute("id")).toEqual("firstName");
  expect(getByTestId("text-input").getAttribute("name")).toEqual("firstName");
});

test("Handle change is fired when value is entered", async () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <TextInput id="firstName" name="firstName" handleChange={handleChange} />
    </ThemeProvider>
  );
  fireEvent.change(getByTestId("text-input"), { target: { value: "Chris" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
