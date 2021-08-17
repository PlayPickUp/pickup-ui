import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import CommonHero from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <CommonHero eyebrow="Eyebrow" title="Title" text="Text" />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Renders eyebrow, title, and text", () => {
  const { getByText } = render(
    <ThemeProvider>
      <CommonHero eyebrow="Eyebrow" title="Title" text="Text" />
    </ThemeProvider>
  );
  expect(getByText("Eyebrow")).toBeTruthy();
  expect(getByText("Title")).toBeTruthy();
  expect(getByText("Text")).toBeTruthy();
});
