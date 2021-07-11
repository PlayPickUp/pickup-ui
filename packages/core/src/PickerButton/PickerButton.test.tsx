import React from "react";
import { fireEvent, render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import PickerButton from "./index";

const handleClick = jest.fn();

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <PickerButton
        result={74}
        displayText="Absolutely"
        isPick={false}
        onClick={handleClick}
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Display text renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <PickerButton
        isPick={false}
        result={85}
        displayText="Absolutely"
        onClick={handleClick}
      />
    </ThemeProvider>
  );
  expect(getByText("Absolutely")).toBeTruthy();
});

test("On click fires correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <PickerButton
        result={34}
        displayText="Absolutey"
        onClick={handleClick}
        isPick={false}
      />
    </ThemeProvider>
  );
  fireEvent.click(getByTestId("picker-button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("Display of results text renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <PickerButton
        showResult={true}
        isPick={true}
        result={85}
        displayText="Absolutely"
        onClick={handleClick}
      />
    </ThemeProvider>
  );
  expect(getByText("Absolutely")).toBeTruthy();
  expect(getByText("85%")).toBeTruthy();
});
