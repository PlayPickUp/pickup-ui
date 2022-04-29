import React from "react";
import { Story, Meta } from "@storybook/react";
import { Hero, HeroProps } from "@playpickup/core";

const logos = [
  {
    url: "https://picsum.photos/125/60",
    alt: "Image 1",
  },
  {
    url: "https://picsum.photos/125/60",
    alt: "Image 2",
  },
  {
    url: "https://picsum.photos/125/60",
    alt: "Image 3",
  },
];

export default {
  title: "Core/Hero",
  component: Hero,
  argTypes: {
    title: {
      defaultValue: "Hero Title",
      description: "Main header/title of the hero",
    },
    description: {
      defaultValue:
        "A long description about the hero content with some important details (typically 3-4 lines)",
      description: "3-4 line description of the hero content",
    },
    eyebrow: {
      defaultValue: null,
      description: "Add an eyebrow to change hero formatting",
    },
    image_src: {
      defaultValue:
        "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/bowlero_lanes.jpg",
      description: "Source image for the component",
    },
    image_alt: {
      defaultValue: "Bowlero",
      description: "Alt text in case image cannot render",
    },
    chip: {
      defaultValue: "500 Points",
      description: "Typically used for Marketplace points value",
    },
    crumbs: {
      defaultValue: [
        {
          name: "Sports Betting",
          path: "/sports-betting",
        },
        {
          name: "Arizona Sports Betting",
          path: "/arizona-sports-betting",
        },
      ],
      description: "An array of paths for breadcrumbs component",
    },
    ctaButton: {
      defaultValue: {
        label: "Call to Action",
        path: "https://www.google.com",
      },
      description:
        "A button that shows a call to action and navigates the user to an external resource",
    },
    logos: {
      defaultValue: logos,
      description:
        "An optional series of user-provided images at the bottom of the Hero",
    },
  },
  args: {
    title: "Hero Title",
    description:
      "A long description about the hero content with some important details (typically 3-4 lines)",
    eyebrow: {
      name: "Title",
      description: "Short Description",
    },
    image_src:
      "https://playpickup.s3.us-east-2.amazonaws.com/away-team/kasper/homebase/prize-images/bowlero_lanes.jpg",
    image_alt: "Bowlero",
    chip: "500 Points",
    crumbs: [
      {
        name: "Sports Betting",
        path: "/sports-betting",
      },
      {
        name: "Arizona Sports Betting",
        path: "/arizona-sports-betting",
      },
    ],
    ctaButton: {
      label: "Call to Action",
      path: "https://www.google.com",
    },
    logos: logos,
  },
} as Meta;

const Template: Story<HeroProps> = (args) => (
  <div style={{ width: "100%", maxWidth: 856 }}>
    <Hero {...args} />
  </div>
);

export const Default = Template.bind({});
