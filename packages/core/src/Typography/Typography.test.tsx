import React from "react";
import { render } from "@testing-library/react";
import jssSerializer from "jss-snapshot-serializer";
expect.addSnapshotSerializer(jssSerializer);
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

test("Typography element h1 and variant title props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="h1" variant="title">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const title = container.querySelector("h1");
  expect(title.getAttribute("class")).toContain("title");
});

test("Typography element h2 and variant heading2 props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="h2" variant="heading2">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const title = container.querySelector("h2");
  expect(title.getAttribute("class")).toContain("heading2");
});

test("Typography element h3 and variant heading3 props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="h3" variant="heading3">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const title = container.querySelector("h3");
  expect(title.getAttribute("class")).toContain("heading3");
});

test("Typography element h4 and variant heading4 props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="h4" variant="heading4">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const title = container.querySelector("h4");
  expect(title.getAttribute("class")).toContain("heading4");
});

test("Typography element h5 and variant heading5 props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="h5" variant="heading5">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const title = container.querySelector("h5");
  expect(title.getAttribute("class")).toContain("heading5");
});

test("Typography element h6 and variant heading6 props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="h6" variant="heading6">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const title = container.querySelector("h6");
  expect(title.getAttribute("class")).toContain("heading6");
});

test("Typography element p and variant body2 props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="p" variant="body2">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const p = container.querySelector("p");
  expect(p.getAttribute("class")).toContain("body2");
});

test("Typography element span and variant span props pass successfully", () => {
  const { container } = render(
    <ThemeProvider>
      <Typography element="span" variant="span">
        Testing!
      </Typography>
    </ThemeProvider>
  );

  const span = container.querySelector("span");
  expect(span.getAttribute("class")).toContain("body");
});

test("Typography color, useUnescape, className and style props pass", () => {
  const { getByText } = render(
    <ThemeProvider>
      <Typography
        className="test-12345"
        style={{ margin: "10px" }}
        color="red"
        useUnescape
      >
        foo &copy; bar &ne; baz &#x1D306; qux
      </Typography>
    </ThemeProvider>
  );

  const typography = getByText("foo © bar ≠ baz 𝌆 qux");
  expect(typography.getAttribute("class")).toContain("test-12345");
  const style = window.getComputedStyle(typography);
  console.log(style);
  expect(style.margin).toBe("10px");
  expect(style.color).toBe("red");
});
