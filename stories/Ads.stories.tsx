import React from "react";
import { Story, Meta } from "@storybook/react";
import { Ad } from "@playpickup/core";
import { AdZoneProps } from "../packages/core/src";
import { Large } from "./Fab.stories";

export default {
  title: "Core/Ad",
  component: Ad,
  argTypes: {
    height: {
      defaultValue: "125",
      description: "Height of Ad",
    },
    width: {
      defaultValue: "600",
      description: "Width of Ad",
    },
    adProps: {
      defaultValue: {
        name: "HelloWorld Ad",
        url: "https://playpickup.com",
        backgroundImage:
          "https://images.ctfassets.net/vr34jcb0tstv/42KLMVnUxtYHYkBNfPh9CH/22f587c10adcd33faa6b3325f1096de0/BetMGM_200_Suns.png",
        foregroundImage:
          "https://images.ctfassets.net/vr34jcb0tstv/2XgjxzpUehZpgDwyeBTyVw/6f4f124a291d84da963b5491e4dc20b3/hero.svg",
        copy: "Hello World! Welcome to AdCopy Space!",
      },
      description: "Ad props",
    },
  },
  args: {
    width: "600",
    height: "125",
    adProps: {
      name: "HelloWorld Ad",
      url: "https://playpickup.com",
      backgroundImage:
        "https://images.ctfassets.net/vr34jcb0tstv/42KLMVnUxtYHYkBNfPh9CH/22f587c10adcd33faa6b3325f1096de0/BetMGM_200_Suns.png",
    },
  },
} as Meta;

const Template: Story<AdZoneProps> = (args) => <Ad {...args} />;

export const Default = Template.bind({});

export const AdCopy = Template.bind({});

AdCopy.args = {
  width: "600",
  height: "125",
  adProps: {
    name: "HelloWorld Ad",
    url: "https://playpickup.com",
    foregroundImage:
      "https://images.ctfassets.net/vr34jcb0tstv/2XgjxzpUehZpgDwyeBTyVw/6f4f124a291d84da963b5491e4dc20b3/hero.svg",
    copy: `<div><h5>TEST AD WITH HTML</h5><br/><p><a href="https://pickup.bet/dukevsunc" style="text-decoration: none">Bet money and WIN!!!  Or lose it all! <br/> we don't control that.</a></p></div>`,
    backgroundImage: "null",
  },
};
