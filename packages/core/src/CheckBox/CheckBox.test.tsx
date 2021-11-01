import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import CheckBox from ".";

test("Renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <CheckBox />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("CheckBox can be Checked, and prop can be passed", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <CheckBox checked={true} />
    </ThemeProvider>
  );
  const input = getByTestId("checkbox");
  expect(input.checked).toEqual(true);
  fireEvent.click(input);
  expect(input.checked).toEqual(false);
});
