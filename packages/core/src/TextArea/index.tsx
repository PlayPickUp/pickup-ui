import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

import { DefaultTheme, TextAreaProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
	root: {
		position: "relative",
		width: "100%",
	},
	textarea: {
		position: "relative",
		width: "100%",
		height: 400,
		fontFamily: theme.typography.fontFamilies.body,
		fontSize: 15,
		lineHeight: "18px",
		letterSpacing: "0.1px",
		color: theme.colors.black,
		backgroundColor: theme.colors.white,
		border: `1px solid ${theme.colors.grey.base}`,
		borderRadius: theme.borderRadius,
		resize: "none",
		padding: theme.spacing.base * 4,
	},
}));

const TextArea: React.FC<TextAreaProps> = ({
	className,
	style,
	innerClassName,
	innerStyle,
	value,
	id,
	name,
	handleChange,
}) => {
	const classes = useStyles();
	return (
		<div
			data-testid="textarea-wrapper"
			className={classNames(classes.root, className)}
			style={style}
		>
			<textarea
				id={id}
				name={name}
				onChange={handleChange}
				className={classNames(classes.textarea, innerClassName)}
				style={innerStyle}
				value={value}
				data-testid="textarea"
			/>
		</div>
	);
};

export default TextArea;
