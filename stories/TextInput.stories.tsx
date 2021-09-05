import React from "react";
import { Story, Meta } from "@storybook/react";
import { Formik, Field, Form } from "formik";

import { TextInput, TextInputProps } from "@playpickup/core";

export default {
  title: "Forms/TextInput",
  component: TextInput,
  argTypes: {
    id: {
      control: "text",
      defaultValue: null,
      description: "ID to be applied to the input",
    },
    name: {
      control: "text",
      defaultValue: null,
      description: "Name to be applied to the input",
    },
    type: {
      control: {
        type: "select",
        options: [
          "button",
          "checkbox",
          "color",
          "date",
          "datetime-local",
          "email",
          "file",
          "hidden",
          "image",
          "month",
          "number",
          "password",
          "radio",
          "range",
          "reset",
          "search",
          "submit",
          "tel",
          "text",
          "time",
          "url",
          "week",
        ],
      },
      defaultValue: "text",
      description: "Input type",
    },
    className: {
      defaultValue: null,
      description: "Additional className to be applied to the input container",
      control: "text",
      table: {
        category: "Styling",
      },
    },
    style: {
      defaultValue: null,
      description: "Style object to apply to the input container",
      control: "object",
      table: {
        category: "Styling",
      },
    },
    value: {
      defaultValue: null,
      control: "text",
      description: "Value of the input",
    },
    handleChange: {
      defaultValue: () => null,
      description: "Function to handle value changes",
    },
    innerClassName: {
      defaultValue: null,
      description: "Additional className to be applied to the input itself",
      control: "text",
      table: {
        category: "Styling",
      },
    },
    innerStyle: {
      defaultValue: null,
      description: "Style object to apply to the input itself",
      control: "object",
      table: {
        category: "Styling",
      },
    },
    placeholder: {
      defaultValue: null,
      description: "Placeholder value to be used",
      control: "text",
    },
    label: {
      defaultValue: null,
      description: "Label text to be rendered",
    },
  },
  args: {
    id: "name",
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Mr. Pickup",
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      console.log(e.target.value),
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => (
  <div style={{ width: "100%", maxWidth: 350 }}>
    <Formik
      initialValues={{
        name: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field component={TextInput} {...args} />
        </Form>
      )}
    </Formik>
  </div>
);

export const Default = Template.bind({});
