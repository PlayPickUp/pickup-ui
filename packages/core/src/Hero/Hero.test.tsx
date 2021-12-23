import React from "react";
import { render, within } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "../ThemeProvider";
import Hero from "./index";

const breadCrumbs = [
  {
    name: "Crumb 1",
    path: "/crumb1",
  },
  {
    name: "Crumb 2",
    path: "/crumb2",
  },
];

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Hero
        title="Hero Title"
        description="Hero Description"
        image_src="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/bowlero_lanes.jpg"
        image_alt="bowlero"
        eyebrow={{ name: "Eyebrow Title", description: "Eyebrow Description" }}
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Passes and renders props", () => {
  const { getByText, getByAltText, getByRole } = render(
    <ThemeProvider>
      <Router>
        <Hero
          title="Hero Title"
          description="Hero Description"
          image_src="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/bowlero_lanes.jpg"
          image_alt="bowlero"
          eyebrow={{
            name: "Eyebrow Title",
            description: "Eyebrow Description",
          }}
          chip="Chip"
          crumbs={breadCrumbs}
        />
      </Router>
    </ThemeProvider>
  );
  // title
  expect(getByText("Hero Title")).toBeTruthy();
  // description
  expect(getByText("Hero Description")).toBeTruthy();
  // image_src and image_alt
  expect(getByAltText("bowlero").getAttribute("src")).toEqual(
    "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/bowlero_lanes.jpg"
  );
  // eyebrow
  expect(getByText("Eyebrow Title | Eyebrow Description")).toBeTruthy();
  // chip
  expect(getByText("Chip")).toBeTruthy();
  // crumbs
  const list = getByRole("list", { name: /breadcrumbs/i });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  const breadcrumbNames = items.map((item) => item.textContent);
  expect(breadcrumbNames).toMatchInlineSnapshot(`
    Array [
      "Crumb 1/",
      "Crumb 2",
    ]
  `);
});
