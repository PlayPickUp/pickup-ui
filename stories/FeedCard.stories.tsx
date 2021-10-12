import React from "react";
import { Story, Meta } from "@storybook/react";
import { FeedCard, FeedCardProps } from "@playpickup/core";

export default {
  title: "Core/FeedCard",
  component: FeedCard,
  argTypes: {
    image: {
      defaultValue:
        "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0",
      description: "Hero image at the top of the card",
    },
    publisherIcon: {
      defaultValue: "Publisher Icon",
      description: "The Publisher Icon Image",
    },
    publisherName: {
      defaultValue: "Publisher Name",
      description: "This Publisher Name",
    },
    publishedAt: {
      defaultValue: "Date String",
      description: "The time of publishing",
    },
    title: {
      defaultValue: "Title",
      description: "Title of the card",
    },
    timeLeft: {
      defaultValue: new Date(),
      description: "Time left until Expiration",
    },
    pickCount: {
      defaultValue: 2,
      description: "The Pick count",
    },
  },
  args: {
    image:
      "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0",
    publisherIcon:
      "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg",
    publisherName: "Prime Time Sports",
    publishedAt: "23m",
    title: "Chiefs vs. Ravens Who wins?",
    timeLeft: new Date(),
    pickCount: 2,
    picks: [
      { label: "Ravens", value: "Ravens" },
      { label: "Chiefs", value: "Chiefs" },
    ],
  },
} as Meta;

const Template: Story<FeedCardProps> = (args) => <FeedCard {...args} />;

export const Default = Template.bind({});
