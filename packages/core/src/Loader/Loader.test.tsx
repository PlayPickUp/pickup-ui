import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Loader from ".";

test("Loader renders without crashing, matches snapshot", async () => {
  const { container } = render(
    <ThemeProvider>
      <Loader delay={0} />
    </ThemeProvider>
  );
  const loader = await screen.findByText("Loading");
  await waitFor(() => expect(loader).toBeTruthy());
  expect(container).toMatchSnapshot();
});

test("Text override works as expected", async () => {
  render(
    <ThemeProvider>
      <Loader delay={0} text="Wait for it!" />
    </ThemeProvider>
  );
  const loader = await screen.findByText("Wait for it!");
  await waitFor(() => expect(loader).toBeTruthy());
});
