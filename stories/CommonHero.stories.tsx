import React from "react";
import { Story, Meta } from "@storybook/react";
import { CommonHero, CommonHeroProps } from "@playpickup/core";

export default {
  title: "Core/CommonHero",
  component: CommonHero,
  argTypes: {
    eyebrow: {
      defaultValue: "Marketplace",
      description: "Usually a page/section label",
    },
    title: {
      defaultValue: "Turn Your Hottest Takes into Fire Swag",
      description: "Main heading",
    },
    text: {
      defaultValue:
        "Play PickUp to get rewarded for pretending you're actually right about everything",
      description: "Description/text below heading",
    },
  },
  args: {
    eyebrow: "Marketplace",
    title: "Turn Your Hottest Takes into Fire Swag",
    text:
      "Play PickUp to get rewarded for pretending you're actually right about everything",
  },
} as Meta;

const Template: Story<CommonHeroProps> = (args) => <CommonHero {...args} />;

export const Default = Template.bind({});
