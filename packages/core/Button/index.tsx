import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import classNames from "classnames";

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

const Button: React.FC<
	ButtonProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({
	className,
	children,
	disabled,
	element: Element = "button",
	href,
	onClick,
	style,
	to,
	...rest
}) => {
	const classes = useStyles();

	if (to) {
		return (
			<Link
				to={to}
				className={classNames(classes.root, className)}
				style={style}
				onClick={onClick}
				{...rest}
			>
				{children}
			</Link>
		);
	}

	return (
		<Element
			className={classNames(classes.root, className)}
			disabled={disabled}
			style={style}
			onClick={onClick}
			href={href}
			{...rest}
		>
			{children}
		</Element>
	);
};

export default Button;
