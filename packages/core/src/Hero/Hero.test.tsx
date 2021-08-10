import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Hero from "./index";

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

test("Renders a title and description", () => {
  const { getByTestId } = render(
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
  expect(getByTestId("hero-title").hasChildNodes()).toBeTruthy();
  expect(getByTestId("hero-description").hasChildNodes()).toBeTruthy();
});
