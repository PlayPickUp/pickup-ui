import React from "react";
import { render } from "@testing-library/react";
import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
import ThemeProvider from "../ThemeProvider";
import Slider from "./index";

test("Renders and matches snapshot", () => {
    const { container } = render(
      <ThemeProvider>
        <Slider>
            <div></div>
        </Slider>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

test("Slider children are passed and rendered", () => {
    const { getByText } = render(
        <ThemeProvider>
            <Slider> <div>Hello, World</div></Slider>
        </ThemeProvider>
    );
    expect(getByText("Hello, World")).toBeTruthy();
});