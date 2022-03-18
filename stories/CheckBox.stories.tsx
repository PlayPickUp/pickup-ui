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
    onChange: {
      defaultValue: null,
      description:
        "Allows communication between component state and parent state",
    },
    label: {
      description: "Optional label for checkbox",
    },
  },
  args: {
    checked: true,
    label: "Breaking News",
    onChange: (internal: boolean) => {
      console.log("use " + internal);
    },
  },
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code: `
      <CheckBox
      label="Breaking News"
      checked={false}
      onChange={(internal: boolean)=> {
        console.log("use "+internal)
      }}
      />
      `,
    },
  },
};
