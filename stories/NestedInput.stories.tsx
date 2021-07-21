import React from "react";
import { Story, Meta } from "@storybook/react";

import { NestedInput, NestedInputProps } from "@playpickup/core";

export default {
  title: "Forms/NestedInput",
  component: NestedInput,
  argTypes: {
    buttonText: {
      defaultValue: null,
      description: "Text of button to be used.",
    },
    placeholder: {
      defaultValue: null,
      description: "Placeholder value to be used",
      control: "text",
    },
    preventDefault: {
      defaultValue: null,
      description:
        "Function to prevent the browser from executing the default action of the selected element",
    },
    handleClick: {
      defaultValue: () => null,
      description: "Function to fire when clicked",
    },
    onClick: {
      defaultValue: null,
      description: "Function to fire when clicked",
      control: {
        type: "none",
      },
    },
  },
  args: {
    buttonText: "Next",
    placeholder: "",
    preventDefault: true,
    handleClick: null,
    onClick: null,
  },
} as Meta;

const Template: Story<NestedInputProps> = (args) => (
  <div style={{ width: "100%", maxWidth: 350 }}>
    <NestedInput {...args} />
  </div>
);

export const Default = Template.bind({});
