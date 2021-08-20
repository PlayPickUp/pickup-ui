import React from "react";
import { Story, Meta } from "@storybook/react";
import { Card, CardProps } from "@playpickup/core";

export default {
  title: "Core/Card",
  component: Card,
  argTypes: {
    image: {
      defaultValue:
        "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg",
      description: "Hero image at the top of the card",
    },
    eyebrow: {
      defaultValue: { name: "CROSSNET", description: "$180 Value" },
      description: "Name and value (or other description) of the card content",
    },
    heading: {
      defaultValue: "CROSSNET Four-Way Volleyball",
      description: "Main heading of the card",
    },
    description: {
      defaultValue:
        "The world's first four-way volleyball game! Set up within minutes in sand, grass, or indoors.",
      description: "A longer description about the content",
    },
    buttonProps: {
      defaultValue: {
        status: "Not Enough Points",
        cost: 250,
        fanPoints: 150,
        href: "https://www.playpickup.com",
      },
      description: "Progress Button props",
    },
  },
  args: {
    image:
      "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg",
    eyebrow: { name: "CROSSNET", description: "$180 Value" },
    heading: "CROSSNET Four-Way Volleyball",
    description:
      "The world's first four-way volleyball game! Set up within minutes in sand, grass, or indoors.",
    buttonProps: {
      status: "Not Enough Points",
      cost: 250,
      fanPoints: 150,
      href: "https://www.playpickup.com",
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
