import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Paper from ".";

test("Paper renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Paper>Hello, World</Paper>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});
