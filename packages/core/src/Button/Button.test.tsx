import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Button from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Button href="https://www.playpickup.com">Make your pick</Button>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Child text renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Button href="https://www.playpickup.com">Make your pick</Button>
    </ThemeProvider>
  );
  expect(getByText("Make your pick")).toBeTruthy();
});

test("Href is passed correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Button href="https://www.playpickup.com">Make your pick</Button>
    </ThemeProvider>
  );
  expect(getByTestId("pickup-button").getAttribute("href")).toEqual(
    "https://www.playpickup.com"
  );
});

test("Button is disabled when prop disabled is true", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Button disabled href="https://www.playpickup.com">
        Make your pick
      </Button>
    </ThemeProvider>
  );
  expect(getByTestId("pickup-button").hasAttribute("disabled"));
});
