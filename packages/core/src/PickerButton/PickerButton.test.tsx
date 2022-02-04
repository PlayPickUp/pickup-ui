import React from "react";
import { fireEvent, render } from "@testing-library/react";
import jssSerializer from "jss-snapshot-serializer";
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

test("Result does not show if showResult is false", () => {
  const { queryByText } = render(
    <ThemeProvider>
      <PickerButton
        showResult={false}
        isPick={true}
        result={85}
        displayText="Absolutely"
        onClick={handleClick}
      />
    </ThemeProvider>
  );
  expect(queryByText("85%")).toBeFalsy();
});

test("className and style props are passed and rendered correctly", () => {
  const { getByRole } = render(
    <ThemeProvider>
      <PickerButton
        result={74}
        displayText="Absolutely"
        isPick={false}
        onClick={handleClick}
        className="test-12345"
        style={{ margin: "10px" }}
      />
    </ThemeProvider>
  );

  const button = getByRole("button");
  expect(button.getAttribute("class")).toContain("test-12345");
  const style = window.getComputedStyle(button);
  expect(style.margin).toBe("10px");
});

test("isPick renders its class", () => {
  const { getByRole } = render(
    <ThemeProvider>
      <PickerButton
        result={74}
        displayText="Absolutely"
        isPick={true}
        onClick={handleClick}
      />
    </ThemeProvider>
  );
  expect(getByRole("button").getAttribute("class")).toContain("resultPicked");
});

test("isCorrect renders its class", () => {
  const { getByRole } = render(
    <ThemeProvider>
      <PickerButton
        result={74}
        displayText="Absolutely"
        isCorrect={true}
        onClick={handleClick}
      />
    </ThemeProvider>
  );
  expect(getByRole("button").getAttribute("class")).toContain("isCorrect");
});

test("isIncorrect renders its class", () => {
  const { getByRole } = render(
    <ThemeProvider>
      <PickerButton
        result={74}
        displayText="Absolutely"
        isIncorrect={true}
        onClick={handleClick}
      />
    </ThemeProvider>
  );
  expect(getByRole("button").getAttribute("class")).toContain("isIncorrect");
});
