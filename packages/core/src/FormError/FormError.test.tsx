import React from "react";
import { render } from "@testing-library/react";
import jssSerializer from 'jss-snapshot-serializer';
expect.addSnapshotSerializer(jssSerializer);
import ThemeProvider from "../ThemeProvider";
import FormError from "../FormError";

const testErrors = { formError: "This error should render", noError: null };

test("Renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <FormError
        errors={testErrors}
        touched={{ formError: true }}
        name={"formError"}
      />
    </ThemeProvider>
  );
  expect(container).toMatchSnapshot();
});

test("Renders correct error message for name", () => {
  const { getByText } = render(
    <ThemeProvider>
      <FormError
        errors={testErrors}
        touched={{ formError: true }}
        name={"formError"}
      />
    </ThemeProvider>
  );
  expect(getByText("This error should render")).toBeTruthy();
});

test("Does not render when no error present", () => {
  const { queryByTestId } = render(
    <ThemeProvider>
      <FormError
        errors={testErrors}
        touched={{ noError: true }}
        name={"noError"}
      />
    </ThemeProvider>
  );
  expect(queryByTestId("formError")).toBeNull();
});

test("Does not render when untouched", () => {
  const { queryByTestId } = render(
    <ThemeProvider>
      <FormError
        errors={testErrors}
        touched={{ noError: false }}
        name={"formError"}
      />
    </ThemeProvider>
  );
  expect(queryByTestId("formError")).toBeNull();
});
