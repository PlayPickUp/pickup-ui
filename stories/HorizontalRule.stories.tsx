import React from "react";
import { Story, Meta } from "@storybook/react";
import { HorizontalRule, HorizontalRuleProps } from "@playpickup/core";

export default {
  title: "Core/HorizontalRule",
  component: HorizontalRule,
  argTypes: {
    className: {
      defaultValue: null,
      description: "Allows for className additions or overrides",
      control: "text",
      table: {
        category: "Styling",
      },
    },
    style: {
      defaultValue: null,
      description: "Allows for CSS Styles to be applied",
      control: "object",
      table: {
        category: "Styling",
      },
    },
    showBolt: {
      defaultValue: false,
      description: "Adds a bolt logo to the center of the component",
      control: "boolean",
      table: {
        category: "Styling",
      },
    },
    color: {
      defaultValue: false,
      description: "changes default color of line and bolt",
      control: "text",
      table: {
        category: "styling",
      },
    },
  },
  args: {
    showBolt: false,
  },
} as Meta;

const Template: Story<HorizontalRuleProps> = (args) => (
  <HorizontalRule {...args} />
);

export const Default = Template.bind({});
