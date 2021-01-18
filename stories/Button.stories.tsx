import React from "react";
import { Story, Meta } from "@storybook/react";

import Button from "../packages/core/src/Button";
import { ButtonProps } from "../types";
import "../playground/src/playground.css";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		// backgroundColor: { control: "color" },
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: "fit",
	children: "Make your pick",
	href: "https://www.playpickup.com",
};
