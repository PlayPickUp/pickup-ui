import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "../ThemeProvider";
import ProgressButton from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <ProgressButton status="Not Enough Points" cost={250} fanPoints={125} />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Href is passed correctly", () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <ProgressButton
        status="Not Enough Points"
        prizeEnv={true}
        cost={250}
        fanPoints={125}
        href={"https://www.playpickup.com"}
      />
    </ThemeProvider>
  );
  expect(getByTestId("progress-button").getAttribute("href")).toEqual(
    "https://www.playpickup.com"
  );
});
