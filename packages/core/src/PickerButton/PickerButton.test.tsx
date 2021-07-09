import React from "react";
import { fireEvent, render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import PickerButton from "./index";

const handleClick = jest.fn();

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <PickerButton displayText="Absolutely" onClick={handleClick} />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Display text renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <PickerButton displayText="Absolutely" onClick={handleClick} />
    </ThemeProvider>
  );
  expect(getByText("Absolutely")).toBeTruthy();
});

test("On click fires correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <PickerButton displayText="Absolutey" onClick={handleClick} />
    </ThemeProvider>
  );
  fireEvent.click(getByTestId("picker-button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
