import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Card from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
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
  expect(container).toMatchSnapshot();
});
