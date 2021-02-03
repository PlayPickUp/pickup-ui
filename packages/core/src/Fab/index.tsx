import React, { useState } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import Color from "color";

import { defaultTheme } from "../ThemeProvider/defaultTheme";
import { DefaultTheme, FabProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
	root: {
		display: "flex",
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		width: (props) => (props.size === "small" ? 40 : 48),
		height: (props) => (props.size === "small" ? 40 : 48),
		overflow: "visible",
	},
	button: {
		display: "flex",
		position: "relative",
		alignItems: "center",
		justifyContent: "center",
		width: (props) => (props.size === "small" ? 40 : 48),
		height: (props) => (props.size === "small" ? 40 : 48),
		backgroundColor: (props) =>
			props.color ? props.color : theme.colors.white,
		borderRadius: "50%",
		border: `2px solid ${theme.colors.grey.base}`,
		"&:hover": {
			border: `2px solid ${theme.colors.primary.base}`,
		},
	},
	title: {
		position: "absolute",
		fontFamily: theme.typography.fontFamilies.body,
		fontSize: 12,
		textAlign: "center",
		bottom: `calc(100% + ${theme.spacing.base}px)`,
		left: "auto",
		right: "auto",
		width: "auto",
		minWidth: 100,
		backgroundColor: Color(theme.colors.black).fade(0.05).toString(),
		border: `1px solid ${theme.colors.black}`,
		borderRadius: theme.borderRadius,
		padding: theme.spacing.base,
		color: theme.colors.white,
	},
}));

const Fab: React.FC<FabProps> = ({
	className,
	color,
	disablePopOver = false,
	disabled = false,
	icon: Icon,
	iconColor = defaultTheme.colors.grey.base,
	iconHoverColor = defaultTheme.colors.primary.base,
	innerClassName,
	innerStyle,
	onClick,
	size = "small",
	style,
	title,
	...rest
}) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const classes = useStyles({ size, color });

	const toggleHovered = () => setIsHovered(!isHovered);

	return (
		<div
			data-testid="fab-root"
			className={classNames(classes.root, className)}
			style={style}
		>
			{isHovered && !disablePopOver ? (
				<div className={classes.title} role="label">
					{title}
				</div>
			) : null}

			<button
				data-testid="fab-target"
				className={classNames(classes.button, innerClassName)}
				style={innerStyle}
				onClick={onClick}
				disabled={disabled}
				onFocus={toggleHovered}
				onBlur={toggleHovered}
				onMouseEnter={toggleHovered}
				onMouseLeave={toggleHovered}
				{...rest}
			>
				<Icon color={isHovered ? iconHoverColor : iconColor} />
			</button>
		</div>
	);
};

export default Fab;
