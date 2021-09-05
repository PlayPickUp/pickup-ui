import React from "react";
import { Story, Meta } from "@storybook/react";
import { Formik, Field, Form } from "formik";

import {
  MultiSelect,
  MultiSelectProps,
  MultiSelectItem,
} from "@playpickup/core";

const defaultItems: MultiSelectItem[] = [
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
  title: "Forms/MultiSelect",
  component: MultiSelect,
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
      defaultValue: "Select One or More",
      description: "Display label for the select",
    },
    handleChange: {
      defaultValue: (e: React.ChangeEvent<HTMLSelectElement>) => null,
      description: "Function to be used when change events occur",
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
    label: "Select One or More",
    value: null,
    items: defaultItems,
  },
} as Meta;

const Template: Story<MultiSelectProps> = (args) => (
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
          <Field component={MultiSelect} {...args} />
        </Form>
      )}
    </Formik>
  </div>
);

export const Default = Template.bind({});
