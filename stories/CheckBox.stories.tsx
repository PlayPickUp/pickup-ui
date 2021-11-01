import React from "react";
import { Story, Meta } from "@storybook/react";

import { CheckBox } from "@playpickup/core";
import { CheckBoxProps } from "@playpickup/core/src/types";

export default {
  title: "Core/CheckBox",
  component: CheckBox,
  argTypes: {
    checked: {
      defaultValue: false,
      description: "Toggles checked state",
      control: "boolean",
    },
  },
  args: {
    checked: true,
  },
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
