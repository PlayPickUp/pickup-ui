import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import DataTable from ".";

import { rows, headCells } from "./__mocks__/data.mock";

test("Table title renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <DataTable
        rows={rows}
        headCells={headCells as any}
        defaultSortColumn={"id"}
        tableTitle="Homebase Posts"
      />
    </ThemeProvider>
  );
  expect(getByText("Homebase Posts")).toBeTruthy();
});
