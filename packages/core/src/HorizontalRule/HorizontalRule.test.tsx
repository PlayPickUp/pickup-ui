import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import HorizontalRule from ".";

test("Horizontal Rule renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <HorizontalRule />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Horizontal Rule with Bolt renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <HorizontalRule showBolt />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Color prop changes the color of the Horizontal Rule and bolt", () => {
  const { container } = render(
    <ThemeProvider>
      <HorizontalRule color="red" showBolt />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Props are passed and rendered", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <HorizontalRule className="test-1-2-3" style={{ opacity: 0.5 }} />
    </ThemeProvider>
  );
  // className
  expect(getByTestId("horizontalRule").getAttribute("class")).toContain(
    "test-1-2-3"
  );
  // style
  expect(getByTestId("horizontalRule").getAttribute("style")).toContain(
    "opacity: 0.5"
  );
});
