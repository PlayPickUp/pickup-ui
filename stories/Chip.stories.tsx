import React from "react";
import { Story, Meta } from "@storybook/react";

import { Chip } from "@playpickup/core";
import { ChipProps } from "@playpickup/core/src/types";

export default {
  title: "Core/Chip",
  component: Chip,
  argTypes: {
    isActive: {
      description:
        "Indicates if the component should show an active style state",
      defaultValue: false,
    },
    style: {
      description: "Style object to be applied to the component",
      defaultValue: null,
      table: {
        category: "Styling",
      },
    },
    className: {
      description: "Additional classNames to be applied to the component",
      defaultValue: null,
      table: {
        category: "Styling",
      },
      control: {
        type: "text",
        defaultValue: null,
      },
    },
    color: {
      description: "Color theme to be applied to the component",
      table: {
        category: "Styling",
      },
      control: {
        type: "select",
        options: ["default", "primary", "secondary"],
      },
    },
    disabled: {
      description: "Disables interaction with the chip",
      defaultValue: null,
    },
    label: {
      description: "Text label for the component",
      required: true,
      defaultValue: null,
      type: { name: "string", required: true },
    },
  },
  args: {
    isActive: false,
    style: null,
    className: null,
    color: "default",
    disabled: false,
    label: "All Sports",
  },
  // parameters: {
  //   variant: [
  //     "title",
  //     "body",
  //     "heading2",
  //     "heading3",
  //     "heading4",
  //     "heading5",
  //     "heading6",
  //     "span",
  //   ],
  // },
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
