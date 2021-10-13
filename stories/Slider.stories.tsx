import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import { Slider, FeedCard, FeedCardProps } from "@playpickup/core";

export default {
  title: "Core/Slider",
  component: Slider,
  args: {
    show: 5,
  },
} as Meta;

const Picks = [
    { label: "Ravens", value: "Ravens" },
    { label: "Chiefs", value: "Chiefs" },
  ];

const Template: Story<FeedCardProps> = (args) => (
  <div
    style={{
      maxWidth: 1200,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 64,
    }}
  >
    <Slider {...args}>
        <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
        <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
        <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
        <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
         <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
         <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
         <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
         <FeedCard
          publisherIcon="https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/crossnet-play.jpg"
          publisherName="Prime Sports"
          publishedAt="23m"
          title="Chiefs vs. Ravens Who wins?"
          image="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/qhsyhehrwlw6he1nfmq0"
          pickCount={2}
          timeLeft={new Date()}
          picks={Picks}
          expanded={false}
        />
    </Slider>
  </div>
);

export const Default = Template.bind({});
