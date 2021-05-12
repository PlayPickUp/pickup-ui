import React from "react";
import { Story, Meta } from "@storybook/react";

import { Fab, defaultTheme as PickUpTheme, FabProps } from "@playpickup/core";
import { Create } from "@playpickup/icons";

export default {
  title: "Core/Fab",
  component: Fab,
  argTypes: {
    className: {
      defaultValue: null,
      description:
        "className(s) to add to the outer container of the component",
      control: {
        type: "text",
      },
      table: {
        category: "Styling",
      },
    },
    innerClassName: {
      defaultValue: null,
      description:
        "className(s) to add to the inner container of the component",
      control: {
        type: "text",
      },
      table: {
        category: "Styling",
      },
    },
    style: {
      defaultValue: null,
      description:
        "Inline style object for the outer container of the component",
      table: {
        category: "Styling",
      },
    },
    innerStyle: {
      defaultValue: null,
      description:
        "Inline style object for the inner container of the component",
      table: {
        category: "Styling",
      },
    },
    icon: {
      type: { name: "text", required: true },
      defaultValue: null,
      description:
        "Icon component to render inside the component. Can be from @playpickup/icons or any other React component",
      control: {
        type: "none",
      },
      table: {
        category: "Styling",
      },
    },
    title: {
      type: { name: "text", required: true },
      defaultValue: null,
      description:
        "Title of the Fab, generally shows when the component is hovered",
    },
    size: {
      defaultValue: "small",
      description: "Overall size of the Fab",
      control: {
        type: "select",
        options: ["small", "large"],
      },
      table: {
        category: "Styling",
      },
    },
    onClick: {
      type: { name: "function", required: true },
      defaultValue: null,
      description: "Click handler to be used on the component",
    },
    disabled: {
      defaultValue: false,
      description: "Disables the component from being used",
    },
    disablePopOver: {
      defaultValue: false,
      description: "Disables the title popover from displaying",
    },
    color: {
      defaultValue: null,
      description: "Controls the background (primary) color of the component",
      control: {
        type: "color",
      },
      table: {
        category: "Styling",
      },
    },
    iconColor: {
      description: "Color of the icon inside of the component",
      defaultValue: PickUpTheme.colors.grey.base,
      control: {
        type: "color",
      },
      table: {
        category: "Styling",
      },
    },
  },
  args: {
    icon: Create,
    onClick: () => null,
    size: "small",
    title: "New Post",
    style: null,
    innerStyle: null,
    innerClassName: null,
    className: null,
    disabled: false,
    disablePopOver: false,
  },
} as Meta;

const Template: Story<FabProps> = (args) => <Fab {...args} />;

export const Small = Template.bind({});
export const Large = Template.bind({});

Large.args = {
  size: "large",
};
