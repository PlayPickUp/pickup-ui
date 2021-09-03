import React from "react";
import { Story, Meta } from "@storybook/react";

import { Icon, defaultTheme as PickUpTheme } from "@playpickup/core";
import { IconBaseProps } from "@playpickup/core/src/types";

import { Create } from "@playpickup/icons";

export default {
  title: "Core/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: "color",
      defaultValue: PickUpTheme.colors.black,
      description: "Color of the icon",
      table: {
        category: "Styling",
      },
    },
    className: {
      defaultValue: "",
      description: "Additional className to be applied to the icon container",
      control: "text",
      table: {
        category: "Styling",
      },
    },

    size: {
      defaultValue: 20,
      description: "Size of the icon, converts to pixels.",
      control: "number",
      table: {
        category: "Styling",
      },
    },
    style: {
      defaultValue: null,
      description: "Style object to apply to the icon container",
      control: "object",
      table: {
        category: "Styling",
      },
    },
    children: {
      defaultValue: null,
      description:
        "Icon to use from @playpickup/icons, which is a React Element",
    },
  },
} as Meta;

const Template: Story<IconBaseProps> = (args) => (
  <Icon {...args}>
    <Create />
  </Icon>
);

export const Default = Template.bind({});
