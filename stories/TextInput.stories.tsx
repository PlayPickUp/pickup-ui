import React from "react";
import { Story, Meta } from "@storybook/react";

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
    className: {
      defaultValue: null,
      description: "Additional className to be applied to the input container",
      control: "text",
    },
    style: {
      defaultValue: null,
      description: "Style object to apply to the input container",
      control: "object",
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
    },
    innerStyle: {
      defaultValue: null,
      description: "Style object to apply to the input itself",
      control: "object",
    },
    placeholder: {
      defaultValue: null,
      description: "Placeholder value to be used",
      control: "text",
    },
  },
  args: {
    id: "firstName",
    name: "firstName",
    placeholder: "Eric",
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      console.log(e.target.value),
  },
} as Meta;

const Template: Story<TextInputProps> = (args) => (
  <div style={{ width: "100%", maxWidth: 350 }}>
    <TextInput {...args} />
  </div>
);

export const Default = Template.bind({});
