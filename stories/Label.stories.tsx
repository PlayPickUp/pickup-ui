import React from "react";
import { Story, Meta } from "@storybook/react";

import { Label, LabelProps } from "@playpickup/core";

export default {
  title: "Forms/Label",
  component: Label,
  argTypes: {
    htmlFor: {
      type: { required: true },
      control: "text",
      defaultValue: null,
      description:
        "Allows the assignment of the `for` (`htmlFor` in React) property to attach the label to an input",
    },
    children: {
      type: { required: true },
      control: "text",
      defaultValue: null,
      description: "Text to render as the label",
    },
    className: {
      defaultValue: null,
      description: "Additional className to be applied to the label container",
      control: "text",
    },
    style: {
      defaultValue: null,
      description: "Style object to apply to the label container",
      control: "object",
    },
    innerClassName: {
      defaultValue: null,
      description: "Additional className to be applied to the input itself",
      control: "text",
    },
    innerStyle: {
      defaultValue: null,
      description: "Style object to apply to the input itself",
      control: "object",
    },
  },
  args: {
    htmlFor: "firstName",
    children: "First Name",
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
