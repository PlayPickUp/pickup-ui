import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Breadcrumbs from "./index";

const crumbs = [
  {
    name: "Sports Betting",
    path: "/sports-betting",
  },
  {
    name: "Arizona Sports Betting",
    path: "/arizona-sports-betting",
  },
];

const BreadcrumbsElement = (
  <ThemeProvider>
    <Router>
      <Breadcrumbs crumbs={crumbs} />
    </Router>
  </ThemeProvider>
);

test("Renders and matches snapshot", () => {
  const { container } = render(BreadcrumbsElement);
  expect(container).toMatchSnapshot();
});

test("Renders current location at end of breadcrumbs", () => {
  const { getByText } = render(BreadcrumbsElement);
  expect(getByText("Arizona Sports Betting")).toBeTruthy();
});
