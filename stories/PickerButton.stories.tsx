import React from "react";
import { Story, Meta } from "@storybook/react";
import { PickerButton, PickerButtonProps } from "@playpickup/core";

export default {
  title: "Core/PickerButton",
  component: PickerButton,
  argTypes: {
    className: {
      defaultValue: null,
      description: "Allows for className additions or overrides",
      table: {
        category: "Styling",
      },
    },
    style: {
      defaultValue: null,
      description: "Allows for CSS Styles to be applied",
      table: {
        category: "Styling",
      },
    },
    displayText: {
      defaultValue: null,
      description: "Text to be displayed on inside the button",
    },
  },
  args: {
    displayText: "Absolutely 💯",
  },
} as Meta;

const Template: Story<PickerButtonProps> = (args) => <PickerButton {...args} />;

export const Default = Template.bind({});
