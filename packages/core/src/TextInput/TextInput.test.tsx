import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import TextInput from ".";

const handleChange = jest.fn();

test("TextInput renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <TextInput
        id="firstName"
        name="firstName"
        handleChange={handleChange}
        // TODO: Mock this instead!
        field={{
          name: "firstName",
          onChange: jest.fn(),
          value: "",
          onBlur: jest.fn(),
        }}
        form={{}}
      />
    </ThemeProvider>
  );

  expect(container).toMatchSnapshot();
});

test("TextInput as password renders without crashing, matches snapshot", () => {
  const { container } = render(
    <ThemeProvider>
      <TextInput
        id="firstName"
        name="firstName"
        handleChange={handleChange}
        type="password"
        // TODO: Mock this instead!
        field={{
          name: "firstName",
          onChange: jest.fn(),
          value: "",
          onBlur: jest.fn(),
        }}
        form={{}}
      />
    </ThemeProvider>
  );

  expect(container).toMatchSnapshot();
});
