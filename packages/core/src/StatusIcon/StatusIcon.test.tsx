import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import StatusIcon from ".";

test("Renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <StatusIcon status="pending" />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Style object is passed and rendered correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <StatusIcon status="pending" style={{ position: "absolute" }} />
    </ThemeProvider>
  );
  expect(getByTestId("statusIcon").hasAttribute("style")).toBeTruthy();
});

test("ClassName is passed and rendered correctly", () => {
  const testClass = "test-1-2-3";
  const { getByTestId } = render(
    <ThemeProvider>
      <StatusIcon status="pending" className={testClass} />
    </ThemeProvider>
  );
  expect(getByTestId("statusIcon").getAttribute("class")).toContain(
    "test-1-2-3"
  );
});
