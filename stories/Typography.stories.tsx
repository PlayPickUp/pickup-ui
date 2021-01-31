import React from "react";
import { Story, Meta } from "@storybook/react";

import { Typography } from "@playpickup/core";
import { TypographyProps } from "@playpickup/core/src/types";

export default {
  title: "Core/Typography",
  component: Typography,
  argTypes: {
    color: { control: "color" },
    variant: {
      defaultValue: "body",
      description: "Text style and element to be used",
      control: {
        type: "select",
        options: [
          "title",
          "body",
          "heading2",
          "heading3",
          "heading4",
          "heading5",
          "heading6",
          "span",
        ],
      },
    },
    children: {
      defaultValue: "",
      description: "Content to be rendered",
    },
    className: {
      defaultValue: null,
      description: "className(s) to be passed to the component",
    },
  },
  args: {
    children: "PickUp",
    variant: "title",
    className: null,
    style: null,
    element: null,
    color: "#2C2933",
  },
  parameters: {
    variant: [
      "title",
      "body",
      "heading2",
      "heading3",
      "heading4",
      "heading5",
      "heading6",
      "span",
    ],
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
