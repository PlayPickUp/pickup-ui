import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import { DefaultTheme, LabelProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
	label: {
		display: "block",
		position: "relative",
		fontFamily: theme.typography.fontFamilies.headline,
		fontSize: 16,
		textTransform: "uppercase",
		padding: theme.spacing.base,
	},
}));

const Label: React.FC<LabelProps> = ({
	htmlFor,
	children,
	className,
	style,
	innerClassName,
	innerStyle,
}) => {
	const classes = useStyles();
	return (
		<div data-testid="label-wrapper" className={className} style={style}>
			<label
				data-testid="label"
				className={classNames(classes.label, innerClassName)}
				htmlFor={htmlFor}
				style={innerStyle}
			>
				{children}
			</label>
		</div>
	);
};

export default Label;
