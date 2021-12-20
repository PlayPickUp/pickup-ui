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

test("Style props are passed and rendered correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Icon className="test-1-2-3" style={{ position: "absolute" }}> 
        <Create />
      </Icon>
    </ThemeProvider>
  );
  expect(getByTestId("icon").hasAttribute("style")).toBeTruthy();
  expect(getByTestId("icon").getAttribute("class")).toContain("test-1-2-3");
});

test("Color prop renders correctly", () => {
  const { container } = render(
    <ThemeProvider>
      <Icon color="#123456"> 
        <Create />
      </Icon>
    </ThemeProvider>
  );
  const pathElements = container.getElementsByTagName("path");
  let containsColor = false;
  for (const el of pathElements) {
    if (el.getAttribute("stroke") === "#123456") {
      containsColor = true;
      break;
    }
  }
  expect(containsColor).toBeTruthy();
});

test("Size prop renders correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Icon size={10}> 
        <Create />
      </Icon>
    </ThemeProvider>
  );
    const style = window.getComputedStyle(getByTestId("icon"));
    expect(style.width).toBe("10px");
})

