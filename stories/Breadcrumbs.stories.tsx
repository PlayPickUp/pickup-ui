import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Story, Meta } from "@storybook/react";
import { Breadcrumbs, BreadcrumbsProps } from "@playpickup/core";

const crumbs = [
  {
    name: "Sports Betting",
    path: "/sports-betting",
  },
  {
    name: "Arizona Sports Betting",
    path: "/arizona-sports-betting",
  },
];

export default {
  title: "Core/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    crumbs: {
      defaultValue: crumbs,
      description:
        "An array of name and path objects that build the breadcrumbs",
    },
  },
  args: {
    crumbs: crumbs,
  },
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => (
  <Router>
    <Breadcrumbs {...args} />
  </Router>
);

export const Default = Template.bind({});
