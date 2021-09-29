import React from "react";
import { Story, Meta } from "@storybook/react";
import { PickerButtonGraded, PickerButtonGradedProps } from "@playpickup/core";

export default {
  title: "Core/PickerButtonGraded",
  component: PickerButtonGraded,
  argTypes: {
    className: {
      defaultValue: null,
      description: "Allows for className additions or overrides",
      table: {
        category: "Styling",
      },
    },
    style: {
      defaultValue: null,
      description: "Allows for CSS Styles to be applied",
      table: {
        category: "Styling",
      },
    },
    displayText: {
      defaultValue: null,
      description: "Text to be displayed on inside the button",
    },
    onClick: {
      defaultValue: null,
      description: "On click handler",
    },

    result: {
      defaultValue: null,
      description: "Result of the pick popularity",
    },

    isCorrect: {
      defaultValue: false,
      description:
        "Switches component to show itself as a correctly graded pick. Have isCorrect / isIncorrect as false to show Closed / Disqualified picks",
    },
    isIncorrect: {
      defaultValue: false,
      description:
        "Switches component to show itself as an incorrectly graded pick. Have isCorrect / isIncorrect as false to show Closed / Disqualified picks",
    },
  },
  args: {
    displayText: "You tell me if this is graded",
    onClick: (e) => console.log(e),
    isCorrect: false,
    isIncorrect: false,
    result: 33.33,
  },
} as Meta;

const Template: Story<PickerButtonGradedProps> = (args) => (
  <PickerButtonGraded {...args} />
);

export const Default = Template.bind({});
export const Result = Template.bind({});
export const CorrectPick = Template.bind({});
export const IncorrectPick = Template.bind({});

Result.args = {
  isCorrect: false,
  isIncorrect: false,
};

CorrectPick.args = {
  isCorrect: true,
  isIncorrect: false,
};

IncorrectPick.args = {
  isCorrect: false,
  isIncorrect: true,
};
