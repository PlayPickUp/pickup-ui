import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Dropdown from "./index";

test("Renders and matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <Dropdown>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
      </Dropdown>
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});
