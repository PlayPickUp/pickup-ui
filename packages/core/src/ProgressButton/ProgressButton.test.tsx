import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
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
  expect(container).toBeTruthy();
});
