import React from "react";
import { fireEvent, render } from "@testing-library/react";
import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
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
      <PickerButton
        onClick={handleClick}
        displayText="Definitely Not"
        style={{ marginBottom: 10 }}
        showResult={true}
        result={33.33}
        isIncorrect
      />
      <PickerButton
        onClick={handleClick}
        displayText="Absolutely"
        style={{ marginBottom: 10 }}
        result={56}
        showResult={true}
        isCorrect
      />
      <PickerButton
        onClick={handleClick}
        displayText="Maybe?"
        style={{ marginBottom: 10 }}
        result={33.33}
        showResult={true}
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
