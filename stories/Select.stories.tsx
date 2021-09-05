import React from "react";
import { Story, Meta } from "@storybook/react";
import { Formik, Field, Form } from "formik";

import { Select, SelectProps, SelectItem } from "@playpickup/core";

const defaultItems: SelectItem[] = [
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

export default {
  title: "Forms/Select",
  component: Select,
  argTypes: {
    id: {
      control: "text",
      defaultValue: "",
      description: "ID of the select",
    },
    name: {
      control: "text",
      defaultValue: "",
      description: "Name of the select",
    },
    label: {
      control: "text",
      defaultValue: "Options",
      description: "Display label for the select",
    },
    className: {
      defaultValue: null,
      description: "Additional className to be applied to the select container",
      control: "text",
    },
    style: {
      defaultValue: null,
      description: "Style object to apply to the select container",
      control: "object",
    },
    innerClassName: {
      defaultValue: null,
      description: "Additional className to be applied to the input itself",
      control: "text",
    },
    innerStyle: {
      defaultValue: null,
      description: "Style object to apply to the input itself",
      control: "object",
    },
    handleChange: {
      defaultValue: (e: React.ChangeEvent<HTMLSelectElement>) => null,
      description: "Function to be used when change events occur",
    },
    placeholder: {
      defaultValue: "Select an item...",
      description: "Placeholder text for the select container",
      control: "text",
    },
    items: {
      defaultValue: defaultItems,
      description: "Option items for the select, each as { label, value }",
      control: "object",
    },
  },
  args: {
    id: "menu",
    name: "menu",
    label: "Options",
    value: null,
    items: defaultItems,
    style: null,
    innerStyle: null,
    className: null,
    innerClassName: null,
  },
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <div style={{ width: "100%", maxWidth: 350 }}>
    <Formik
      initialValues={{
        menu: null,
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Field component={Select} {...args} />
        </Form>
      )}
    </Formik>
  </div>
);

export const Default = Template.bind({});
