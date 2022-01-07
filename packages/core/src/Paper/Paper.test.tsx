import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Paper from ".";

const mockStyleInjection = () => {
  const defaultInsertRule = window.CSSStyleSheet.prototype.insertRule;
  window.CSSStyleSheet.prototype.insertRule = function (rule, index) {
    const styleElement = document.createElement("style");
    const textNode = document.createTextNode(rule);
    styleElement.appendChild(textNode);
    document.head.appendChild(styleElement);
    return defaultInsertRule.bind(this)(rule, index);
  };
  // cleanup function, which reinserts the head and cleans up method overwrite
  return function applyJSSRules() {
    window.CSSStyleSheet.prototype.insertRule = defaultInsertRule;
    //eslint-disable-next-line
    document.head.innerHTML = document.head.innerHTML;
  };
}

test("Paper renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Paper>Hello, World</Paper>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Paper with logo heading renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Paper withLogo>Hello, World</Paper>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Paper padding prop is passed and rendered", () => {
  const applyJSSRules = mockStyleInjection();
  const { getByTestId } = render(
    <ThemeProvider>
      <Paper padding={8}>Hello, World</Paper>
    </ThemeProvider>
  );

  const paperDiv = getByTestId("paper");
  applyJSSRules();
  const style = window.getComputedStyle(paperDiv);
  expect(style.paddingTop).toBe("8px");
})