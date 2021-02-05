import React from "react";
import { Story, Meta } from "@storybook/react";

import { Fab, defaultTheme as PickUpTheme } from "@playpickup/core";
import { FabProps } from "@playpickup/core/src/types";
import { Create } from "@playpickup/icons";

export default {
  title: "Core/Fab",
  component: Fab,
  argTypes: {
    className: {
      defaultValue: "",
      description: "classNames to be passed to the Fab container",
    },
    color: {
      defaultValue: PickUpTheme.colors.white,
      description: "Fab background color",
      control: "color",
    },
    disablePopOver: {
      defaultValue: false,
      description:
        "Enable or disable the title popover when the fab is focused/hovered",
    },
    disabled: {
      defaultValue: false,
      description: "Enable or disable the Fab",
    },
    icon: {
      defaultValue: () => <div />,
      description:
        "Icon component to use inside of the Fab (should be a React component)",
    },
    iconColor: {
      defaultValue: PickUpTheme.colors.grey.base,
      description: "Icon color to be used",
      control: "color",
    },
    iconHoverColor: {
      defaultValue: PickUpTheme.colors.primary.base,
      description: "Icon hover color",
      control: "color",
    },
    innerClassName: {
      defaultValue: "",
      description: "className(s) to be applied to the Fab button directly",
    },
    innerStyle: {
      defaultValue: null,
      description: "Style object to be applied to the Fab button directly",
    },
    onClick: {
      defaultValue: () => null,
      description: "Function to be used when clicked",
    },
    size: {
      defaultValue: "small",
      description: "Size of the Fab",
      control: {
        type: "select",
        options: ["small", "large"],
      },
    },
    style: {
      defautValue: null,
      description: "Style object to be applied to the Fab container",
    },
    title: {
      defaultValue: "",
      description:
        "Title for the Fab - displayed on hover/focus (if not disabled)",
    },
  },
  args: {
    icon: Create,
    onClick: () => null,
    size: "small",
    title: "New Post",
  },
} as Meta;

const Template: Story<FabProps> = (args) => <Fab {...args} />;

export const Small = Template.bind({});
export const Large = Template.bind({});
Large.args = {
  size: "large",
};
