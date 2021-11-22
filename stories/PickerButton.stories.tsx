import React from "react";
import { Story, Meta } from "@storybook/react";
import { PickerButton, PickerButtonProps } from "@playpickup/core";

export default {
  title: "Core/PickerButton",
  component: PickerButton,
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
    showResult: {
      defaultValue: false,
      description: "Switches the component to show results of pick",
    },
    result: {
      defaultValue: null,
      description: "Result of the pick popularity",
    },
    isPick: {
      defaultValue: false,
      description:
        "Switches component to show itself as the current selection (or pick)",
    },
    isCorrect: {
      defaultValue: false,
      description:
        "Switches component to show itself as a correctly graded pick.",
    },
    isIncorrect: {
      defaultValue: false,
      description:
        "Switches component to show itself as an incorrectly graded pick.",
    },
  },
  args: {
    displayText: "Absolutely 💯",
    onClick: (e) => console.log(e),
    isPick: false,
    result: 33.33,
  },
} as Meta;

const Template: Story<PickerButtonProps> = (args) => <PickerButton {...args} />;

export const Default = Template.bind({});
export const Result = Template.bind({});
export const SelectedPick = Template.bind({});
export const CorrectPick = Template.bind({});
export const IncorrectPick = Template.bind({});
export const ClosedOrDisqualifiedPick = Template.bind({});

Result.args = {
  isPick: false,
  showResult: true,
};

SelectedPick.args = {
  isPick: true,
  showResult: true,
};

CorrectPick.args = {
  isCorrect: true,
  isIncorrect: false,
  showResult: true,
};

IncorrectPick.args = {
  isCorrect: false,
  isIncorrect: true,
  showResult: true,
};

ClosedOrDisqualifiedPick.args = {
  isCorrect: false,
  isIncorrect: false,
  showResult: true,
};
