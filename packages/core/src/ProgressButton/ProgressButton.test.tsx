import React from "react";
import { render } from "@testing-library/react";
import ThemeProvider from "../ThemeProvider";
import ProgressButton from "./index";

test("Renders and matches snapshot", () => {
    Math.random = jest.fn(() => 1);  // <--- This is the key, overriding the system's Math.random function
    const { container } = render(
    <ThemeProvider>
      <ProgressButton status="Not Enough Points" cost={250} fanPoints={125} />
    </ThemeProvider>
  );
    expect(container).toMatchSnapshot();
});
