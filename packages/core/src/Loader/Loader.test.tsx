import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
import ThemeProvider from "../ThemeProvider";
import Loader from ".";

test("Loader renders without crashing, matches snapshot", async () => {
  Math.random = jest.fn(() => 1);// <--- This is the key, overriding the system's Math.random function
  const { container } = render(
    <ThemeProvider>
      <Loader delay={0} />
    </ThemeProvider>
  );
  const loader = await screen.findByText("Loading");
  await waitFor(() => expect(container).toMatchSnapshot());
  await waitFor(() => expect(loader).toBeTruthy());

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
