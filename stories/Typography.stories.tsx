import React from "react";
import { Story, Meta } from "@storybook/react";

import { Typography } from "@playpickup/core";
import { TypographyProps } from "@playpickup/core/src/types";

export default {
  title: "Core/Typography",
  component: Typography,
  argTypes: {
    children: {
      type: { required: true },
      defaultValue: null,
      description: "Content to be rendered inside of the component",
    },
    variant: {
      defaultValue: "body",
      description: "Style variant to apply to the component text",
      control: {
        type: "select",
        options: [
          "title",
          "body",
          "body2",
          "heading2",
          "heading3",
          "heading4",
          "heading5",
          "heading6",
          "span",
        ],
      },
      table: { category: "Styling" },
    },
    className: {
      description: "Additional classNames to add to the component",
      defaultValue: null,
      table: { category: "Styling" },
      control: "text",
    },
    element: {
      description:
        "Underlying HTML element to render, default value is determined by variant unless this override is provided",
      defaultValue: null,
      control: {
        type: "select",
        options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
    style: {
      description: "Style object to be applied to the component",
      defaultValue: null,
      table: {
        category: "Styling",
      },
      control: "object",
    },
    color: {
      description:
        "Color to be applied to the component's text children - by default this css value is `inherit`",
      defaultValue: null,
      control: {
        type: "color",
      },
      table: {
        category: "Styling",
      },
    },
    useUnescape: {
      defaultValue: false,
      description:
        "Allows the use of unescaping text characters. **NOTE:** If there are no children inside the component when using `useUnescape` it **will** fail. Be sure to check the value exists before rendering.",
    },
  },
  args: {
    children: "PickUp",
    variant: "title",
    color: "#2C2933",
    useUnescape: false,
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
