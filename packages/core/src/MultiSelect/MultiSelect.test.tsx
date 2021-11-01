/**
 *
 * NOTE: These tests will fail in MultiDownshift without the plugin
 * '@babel/plugin-proposal-class-properties in the babel.config file
 *
 **/

import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Formik, Field, Form } from "formik";

import ThemeProvider from "../ThemeProvider";
import MultiSelect from ".";
import { SelectItem } from "../types";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Props
const items: SelectItem[] = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
];

const FormComponent: React.FC<{
  onSubmit: jest.Mock;
}> = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await sleep(500);
    onSubmit(values);
  };
  return (
    <ThemeProvider>
      <div>
        <Formik
          initialValues={{
            selectMany: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field
              id="selectMany"
              name="selectMany"
              label="MultiSelect Test"
              items={items}
              component={MultiSelect}
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </ThemeProvider>
  );
};

const handleSubmit = jest.fn();
// We could break these out into a testHelpers file, if they're reused elsewhere
const downArrow = { key: "Down", code: "Down", charCode: 40 };
const enterKey = { key: "Enter", code: "Enter", charCode: 13 };

test("MultiSelect renders without crashing, matches snapshot", () => {
  const { container } = render(<FormComponent onSubmit={handleSubmit} />);
  expect(container).toMatchSnapshot();
});

test("Props are passed and rendered", () => {
  const { getByText, getByPlaceholderText } = render(
    <FormComponent onSubmit={handleSubmit} />
  );

  expect(getByText("MultiSelect Test")).toBeTruthy();

  const input = getByPlaceholderText("Search & Select items...");
  // Down arrow opens menu
  fireEvent.keyDown(input, downArrow);
  expect(getByText("Option 2")).toBeTruthy();
  cleanup;
});

test("Selected item gets added to list", () => {
  const { container, getByPlaceholderText } = render(
    <FormComponent onSubmit={handleSubmit} />
  );

  const input = getByPlaceholderText("Search & Select items...");
  fireEvent.keyDown(input, downArrow);
  fireEvent.keyDown(input, enterKey);

  expect(container.getElementsByTagName("span").length).toEqual(1);
  cleanup;
});

test("Props are passed and rendered", () => {
  const { getByText, getByPlaceholderText } = render(
    <FormComponent onSubmit={handleSubmit} />
  );

  expect(getByText("MultiSelect Test")).toBeTruthy();

  const input = getByPlaceholderText("Search & Select items...");
  // Down arrow opens menu
  fireEvent.keyDown(input, downArrow);
  expect(getByText("Option 2")).toBeTruthy();
  cleanup;
});

/* TO DO: Test remove button */
/* Cannot get the button click to work */
// test("Clicking item button removes it from the list", async () => {
//   const { getByPlaceholderText, getByText } = render(
//     <FormComponent
//       onSubmit={handleSubmit}
//     />
//   );

//   const input = getByPlaceholderText("Search & Select items...");
//   fireEvent.keyDown(input, downArrow);
//   act(() => {
//     fireEvent.keyDown(input, enterKey);
//   });

//   await waitFor(() => {
//     fireEvent.blur(input);
//   });

//   act(() => {
//     fireEvent.click(getByText("Option 1").nextElementSibling);
//   });

//   await waitFor(() => {
//     fireEvent.blur(input);
//   });

//   await waitFor(() => {
//     expect(getByText("Option 1")).toBeFalsy();
//   });
// });
