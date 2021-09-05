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
