import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import TextArea from ".";

const handleChange = jest.fn();

const initialValue =
  "This is an excerpt, it is a pretty cool excerpt. It contains text.";

test("TextArea renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <TextArea
        id="excerpt"
        name="excerpt"
        value={initialValue}
        handleChange={handleChange}
      />
    </ThemeProvider>
  );

  expect(container).toMatchSnapshot();
});

test("Props are passed and rendered correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <TextArea
        id="excerpt"
        name="excerpt"
        value={initialValue}
        handleChange={handleChange}
        innerClassName="custom-class"
        innerStyle={{ color: "red" }}
        style={{ color: "blue" }}
        className="another-custom-class"
      />
    </ThemeProvider>
  );

  const textarea = getByTestId("textarea");
  const textareaWrapper = getByTestId("textarea-wrapper");

  expect(textarea.getAttribute("id")).toEqual("excerpt");
  expect(textarea.getAttribute("name")).toEqual("excerpt");
  expect(screen.getAllByDisplayValue(initialValue)).toBeTruthy();

  expect(textareaWrapper.getAttribute("style")).toEqual("color: blue;");
  expect(textareaWrapper.getAttribute("class")).toContain(
    "another-custom-class"
  );
});

test("Handle change is fired when value is entered", async () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <TextArea
        id="excerpt"
        name="excerpt"
        value={initialValue}
        handleChange={handleChange}
      />
    </ThemeProvider>
  );
  const textarea = getByTestId("textarea");

  fireEvent.change(textarea, {
    target: { value: "This is a total change of the excerpt" },
  });
  expect(handleChange).toHaveBeenCalledTimes(1);
});
