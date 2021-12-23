import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Dropdown from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Dropdown>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
      </Dropdown>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Props are passed and rendered correctly", () => {
  const testClass = "test-1-2-3";
  const { getByTestId, getByText } = render(
    <ThemeProvider>
      <Dropdown className={testClass} color="primary">
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
      </Dropdown>
    </ThemeProvider>
  );

  // Test for className prop
  const selectElement = getByTestId("dropdown");
  expect(selectElement.getAttribute("class")).toContain("test-1-2-3");
  // Test for color prop
  expect(selectElement.getAttribute("class")).toContain("primary");
  // Test for children
  fireEvent.click(selectElement);
  expect(getByText("Option 2")).toBeTruthy();
});

test("Disabled prop disables dropdown", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Dropdown disabled={true}>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
      </Dropdown>
    </ThemeProvider>
  );

  expect(getByTestId("dropdown").hasAttribute("disabled"));
});
