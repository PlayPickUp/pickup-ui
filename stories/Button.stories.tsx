import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "@playpickup/core";
import { ButtonProps } from "@playpickup/core/src/types";

export default {
  title: "Core/Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: null,
      description: "Text to be displayed",
    },
    className: {
      defaultValue: null,
      description: "Allows for className additions",
    },
    disabled: {
      defaultValue: false,
      description: "Toggles disabled state",
    },
    element: {
      defaultValue: "button",
      description: "Allows for overriding of the core HTML element",
    },
    href: {
      defaultValue: null,
      description: "Adds href property to button",
    },
    onClick: {
      defaultValue: null,
      description: "Function to fire when clicked",
    },
    style: {
      defaultValue: null,
      description: "CSS style object to pass to component",
    },
    to: {
      defaultValue: null,
      description:
        "Allows the button to use React Router Link component under the hood and uses value as link",
    },
    variant: {
      defaultValue: "fit",
      description: "Button style variant",
    },
    useSubmit: {
      defaultValue: false,
      description: "Overrides inner component to use a submit input",
    },
    submitText: {
      defaultValue: null,
      description: "Submit button text, only used when using 'useSubmit'",
    },
  },
  args: {
    children: "Make your pick",
    className: "",
    disabled: false,
    element: "button",
    href: "",
    onClick: null,
    style: null,
    to: "",
    variant: "fit",
    useSubmit: false,
    submitText: "",
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Fit = Template.bind({});

export const Full = Template.bind({});
Full.args = {
  variant: "full",
};
