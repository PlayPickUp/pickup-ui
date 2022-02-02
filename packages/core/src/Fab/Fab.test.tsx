import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ThemeProvider from "../ThemeProvider";
import Fab from ".";
import Create from "../../../icons/src/icon/Create";

const handleChange = jest.fn();

test("Renders without crashing, matches snapshot", () => {
    Math.random = jest.fn(() => 1);  // <--- This is the key, overriding the system's Math.random function
    const { container } = render(
    <ThemeProvider>
      <Fab icon={Create} title="New Post" onClick={handleChange} />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("onClick fires once when clicked", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Fab icon={Create} title="New Post" onClick={handleChange} />
    </ThemeProvider>
  );
  fireEvent.click(getByTestId("fab-target"));
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("Style objects are passed correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Fab
        icon={Create}
        title="New Post"
        onClick={handleChange}
        innerStyle={{ color: "#000" }}
        style={{ color: "#FF0000" }}
      />
    </ThemeProvider>
  );
  expect(getByTestId("fab-target").getAttribute("style")).toBeTruthy();
  expect(getByTestId("fab-root").getAttribute("style")).toBeTruthy();
});

test("Title is passed correctly and visible on hover", () => {
  const { getByRole, getByTestId, getByText } = render(
    <ThemeProvider>
      <Fab
        icon={Create}
        title="New Post"
        onClick={handleChange}
        innerStyle={{ color: "#000" }}
        style={{ color: "#FF0000" }}
      />
    </ThemeProvider>
  );
  fireEvent.mouseEnter(getByTestId("fab-target"));
  expect(getByRole("label")).toBeTruthy();
  expect(getByText("New Post")).toBeTruthy();
});
