import React from "react";
import { render } from "@testing-library/react";
import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
import ThemeProvider from "../ThemeProvider";
import Label from ".";

test("Label renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Label htmlFor="firstName">First Name</Label>
    </ThemeProvider>
  );

  expect(container).toMatchSnapshot();
});

test("Label props are passed and rendered correctly", async () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Label
        style={{ color: "blue" }}
        className="another-custom-class"
        htmlFor="firstName"
        innerClassName="custom-class"
        innerStyle={{ color: "red" }}
      >
        First Name
      </Label>
    </ThemeProvider>
  );
  const label = getByTestId("label");
  const labelWrapper = getByTestId("label-wrapper");

  expect(getByTestId("label").getAttribute("for")).toEqual("firstName");
  expect(label.getAttribute("style")).toEqual("color: red;");
  expect(label.getAttribute("class")).toContain("custom-class");
  expect(labelWrapper.getAttribute("style")).toEqual("color: blue;");
  expect(labelWrapper.getAttribute("class")).toContain("another-custom-class");
});
