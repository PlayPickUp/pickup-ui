import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Card from "./index";

const CardElement = (
  <ThemeProvider>
    <Card
      image="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
      eyebrow={{ name: "CROSSNET", description: "$20 Value" }}
      heading="CROSSNET Four-Way Volleyball"
      description="The world's first four-way volleyball game! Set up within minutes in sand, grass, or indoors."
      buttonProps={{
        status: "Not Enough Points",
        cost: 250,
        fanPoints: 150,
        href: "https://www.playpickup.com",
      }}
    />
  </ThemeProvider>
);

test("Renders and matches snapshot", () => {
    Math.random = jest.fn(() => 1);  // <--- This is the key, overriding the system's Math.random function
    const { container } = render(CardElement);
    expect(container).toMatchSnapshot();
});

test("Renders image", () => {
  const { container } = render(CardElement);
  expect(container.getElementsByTagName("img")[0].getAttribute("src")).toEqual(
    "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
  );
});

test("Renders eyebrow", () => {
  const { getByText } = render(CardElement);
  expect(getByText("CROSSNET")).toBeTruthy();
  expect(getByText("$20 Value")).toBeTruthy();
});

test("Renders header", () => {
  const { getByText } = render(CardElement);
  expect(getByText("CROSSNET Four-Way Volleyball")).toBeTruthy();
});

test("Renders description", () => {
  const { getByText } = render(CardElement);
  expect(
    getByText(
      "The world's first four-way volleyball game! Set up within minutes in sand, grass, or indoors."
    )
  ).toBeTruthy();
});

test("Renders buttonProps", () => {
  const { getByText, getByTestId } = render(CardElement);
  expect(getByText("150 / 250 points")).toBeTruthy();
  expect(getByTestId("progress-button").getAttribute("href")).toEqual(
    "https://www.playpickup.com"
  );
});
