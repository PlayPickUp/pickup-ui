import React from "react";
import { Story, Meta } from "@storybook/react";

import { Loader, defaultTheme as PickUpTheme } from "@playpickup/core";
import { IconBaseProps } from "@playpickup/core/src/types";

export default {
  title: "Core/Loader",
  component: Loader,
  argTypes: {
    text: {
      control: "text",
      defaultValue: "Loading",
      description: "Text to be rendered under the PickUp animation",
    },
    className: {
      defaultValue: null,
      description: "Additional className to be applied to the Loader container",
      control: "text",
    },
    style: {
      defaultValue: null,
      description: "Style object to apply to the Loader container",
      control: "object",
    },
    delay: {
      defaultValue: 500,
      control: "number",
      description:
        "Amount of ms to delay showing the loading screen. Allows the control of 'flash of content' when loading happens quickly",
    },
  },
} as Meta;

const Template: Story<IconBaseProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
