import React from "react";
import { Story, Meta } from "@storybook/react";

import { StatusIcon, defaultTheme as PickUpTheme } from "@playpickup/core";
import { StatusIconProps } from "@playpickup/core/src/types";

export default {
  title: "Core/StatusIcon",
  component: StatusIcon,
  argTypes: {
    status: {
      control: {
        type: "select",
        options: [
          "graded_true",
          "graded_false",
          "disqualified",
          "closed",
          "pending (default)",
        ],
      },
      defaultValue: "pending",
      description:
        "Status of the pick. Pending is default; closed and diesqualified render the same result",
    },
    color: {
      control: "color",
      defaultValue: PickUpTheme.colors.primary.base,
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
      defaultValue: 48,
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
  },
} as Meta;

const Template: Story<StatusIconProps> = (args) => <StatusIcon {...args} />;

export const Default = Template.bind({});
