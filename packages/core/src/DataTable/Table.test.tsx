import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import DataTable from ".";

import { rows, headCells } from "./__mocks__/data.mock";

const ActionToolbar = () => {
  return <div>Edit</div>;
};

// Cannot snapshot DataTable due to dynamic MUI class names

test("Table title renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <DataTable
        rows={rows}
        headCells={headCells}
        defaultSortColumn={"id"}
        tableTitle="Homebase Posts"
        actionToolbar={ActionToolbar}
      />
    </ThemeProvider>
  );
  expect(getByText("Homebase Posts")).toBeTruthy();
});

test("Default sort renders correctly", () => {
  const { getByText } = render(
    <ThemeProvider>
      <DataTable
        rows={rows}
        headCells={headCells}
        defaultSortColumn={"id"}
        tableTitle="Homebase Posts"
        actionToolbar={ActionToolbar}
      />
    </ThemeProvider>
  );
  expect(getByText("ID").childNodes[1].textContent).toEqual(
    "sorted descending"
  );
});

test("Data is received and rendered", () => {
  const { getByText } = render(
    <ThemeProvider>
      <DataTable
        rows={rows}
        headCells={headCells}
        defaultSortColumn={"id"}
        tableTitle="Homebase Posts"
        actionToolbar={ActionToolbar}
      />
    </ThemeProvider>
  );

  expect(getByText("League")).toBeTruthy();
  expect(getByText("MLB")).toBeTruthy();
  expect(getByText("Title")).toBeTruthy();
  expect(
    getByText("Ranking the Cleveland Baseball team's outfield power")
  ).toBeTruthy();
});
