import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "../ThemeProvider";
import PickerButtonGraded from "./index";

const handleClick = jest.fn();

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <PickerButtonGraded
        onClick={handleClick}
        result={66.66}
        displayText="Absolutely"
        isCorrect
      />
      <PickerButtonGraded
        onClick={handleClick}
        result={33.33}
        displayText="Definitely Not"
        isIncorrect
      />
      <PickerButtonGraded
        onClick={handleClick}
        result={0}
        displayText="Undecided"
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});
