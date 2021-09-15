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

test("Chip is disabled when prop disabled is true", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Chip disabled label="Definitely Not" />
    </ThemeProvider>
  );
  expect(getByText("Definitely Not").hasAttribute("disabled"));
});

test("IsActive prop renders isActive class", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Chip isActive label="Absolutely" />
    </ThemeProvider>
  );
  expect(getByTestId("chip").getAttribute("class")).toContain("isActive");
});

test("Style object is passed and rendered correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Chip style={{ position: "absolute" }} label="Absolutely" />
    </ThemeProvider>
  );
  expect(getByTestId("chip").hasAttribute("style")).toBeTruthy();
});

test("ClassName is passed and rendered correctly", () => {
  const testClass = "test-1-2-3";
  const { getByTestId } = render(
    <ThemeProvider>
      <Chip className={testClass} label="Absolutely" />
    </ThemeProvider>
  );
  expect(getByTestId("chip").getAttribute("class")).toContain("test-1-2-3");
});
