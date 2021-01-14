import React from "react";
import { createUseStyles } from "react-jss";

import { ButtonProps, DefaultTheme } from "../../../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
	root: {
		display: "flex",
		position: "relative",
		flexFlow: "row nowrap",
		justifyContent: "center",
		alignItems: "center",
		minHeight: 47,
		height: "auto",
		width: (props: ButtonProps) => (props.variant === "fit" ? "auto" : "100%"),
		padding: "0 30px",
		appearance: "none",
		borderRadius: theme.borderRadius,
		backgroundColor: theme.gradients.main,
		color: theme.colors.white,
		fallbacks: {
			backgroundColor: theme.colors.primary.base,
		},
	},
}));

const Button: React.FC<ButtonProps> = ({
	children,
	disabled,
	style,
	...rest
}) => {
	const classes = useStyles();
	return (
		<button
			className={classes.root}
			disabled={disabled}
			style={style}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
