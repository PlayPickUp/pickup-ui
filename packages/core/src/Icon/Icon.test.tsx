import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Icon from ".";
import Create from "../../../icons/src/icon/Create";

test("Renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Icon>
        <Create />
      </Icon>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Child component is passed and rendered correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Icon>
        <Create />
      </Icon>
    </ThemeProvider>
  );
  expect(getByTestId("icon").hasChildNodes()).toBeTruthy();
});

test("Style object is passed and rendered correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Icon style={{ position: "absolute" }}>
        <Create />
      </Icon>
    </ThemeProvider>
  );
  expect(getByTestId("icon").hasAttribute("style")).toBeTruthy();
});
