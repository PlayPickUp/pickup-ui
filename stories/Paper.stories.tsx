import React from "react";
import { Story, Meta } from "@storybook/react";
import { Paper, PaperProps } from "@playpickup/core";

export default {
  title: "Core/Paper",
  component: Paper,
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
    padding: {
      defaultValue: null,
      description: "Applies a padding value to the component",
      table: {
        category: "Styling",
      },
    },
    withLogo: {
      defaultValue: false,
      description: "Adds a logo heading to the component",
      control: "boolean",
      table: {
        category: "Styling",
      },
    },
    children: {
      type: { required: true },
      defaultValue: null,
      description: "Content/children for the component",
    },
  },
  args: {
    children: <div>Hello, World</div>,
    padding: 20,
  },
} as Meta;

const Template: Story<PaperProps> = (args) => <Paper {...args} />;

export const Default = Template.bind({});
