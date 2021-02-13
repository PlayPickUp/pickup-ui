import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Typography from "../Typography";

test("Renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography variant="title">PlayPickUp</Typography>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Color prop is passed successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography color="#FF0000">I am red text!</Typography>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});
