import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import { Dropdown } from "@playpickup/core";
import { DropdownProps } from "../packages/core/src/types";

export default {
  title: "Core/Dropdown",
  component: Dropdown,
  argTypes: {
    className: {
      defaultValue: "",
      description: "Dropdown style selector",
      control: {
        type: "select",
        options: ["", "primary", "secondary"],
      },
    },
    disabled: {
      defaultValue: false,
      description: "toggle disable on and off",
    },
  },
  args: {
    className: "",
    disabled: false,
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => {
  const [value, setValue] = useState<number>();

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setValue(Number(event.currentTarget.value));
    console.log(`Value set to ${value}!`);
  };

  return (
    <Dropdown value={value} onChange={handleChange} {...args}>
      <option value={1}>Option 1</option>
      <option value={2}>Option 2</option>
      <option value={3}>Option 3</option>
    </Dropdown>
  );
};

export const Default = Template.bind({});
