import React from "react";
import { fireEvent, render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Chip from "./index";

const handleClick = jest.fn();

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Chip label="All Sports" isActive />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Label renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Chip label="Absolutely" />
    </ThemeProvider>
  );
  expect(getByText("Absolutely")).toBeTruthy();
});

test("OnClick fires correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Chip label="Absolutely" onClick={handleClick} />
    </ThemeProvider>
  );
  fireEvent.click(getByText("Absolutely"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Element <a> and href render link correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Chip label="Click Me" element="a" href="https://www.playpickup.com" />
    </ThemeProvider>
  );
  expect(getByText("Click Me").closest("a").getAttribute("href")).toBe(
    "https://www.playpickup.com"
  );
});
