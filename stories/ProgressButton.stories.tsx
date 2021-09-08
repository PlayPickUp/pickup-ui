import React from "react";
import { Story, Meta } from "@storybook/react";

import { ProgressButton } from "@playpickup/core";
import { ProgressButtonProps } from "../packages/core/src/types";

export default {
  title: "Core/ProgressButton",
  component: ProgressButton,
  argTypes: {
    status: {
      defaultValue: "Available Now",
      description: "Prize status for fan",
      control: {
        type: "select",
        options: [
          "Available Now",
          "Not Enough Points",
          "Already Redeemed",
          "Ready to Redeem",
        ],
      },
    },
    prizeEnv: {
      defaultValue: false,
      description: "Does the button live on an individual prize page?",
      control: {
        type: "select",
        options: [true, false],
      },
    },
    cost: {
      defaultValue: 250,
      description: "Prize cost",
    },
    fanPoints: {
      defaultValue: 150,
      description: "Fan marketplace points",
    },
    href: {
      defaultValue: "https://www.playpickup.com",
      description: "Where the button links/routes to",
    },
    onClick: {
      defaultValue: null,
      description: "Optional/alternate function to execute when clicked",
    },
    to: {
      defaultValue: null,
      description: "Optional route for Link in React Router",
    },
    useSubmit: {
      defaultValue: false,
      description: "Set to true to create a button that can submit a form",
    },
  },
  args: {
    status: "Available Now",
    prizeEnv: false,
    cost: 250,
    fanPoints: 150,
    href: "https://www.playpickup.com",
    onClick: null,
    to: null,
    useSubmit: false,
  },
} as Meta;

const Template: Story<ProgressButtonProps> = (args) => (
  <ProgressButton {...args} />
);

export const Default = Template.bind({});
