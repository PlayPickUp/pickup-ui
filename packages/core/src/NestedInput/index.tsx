import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";

import Typography from "../Typography";
import Button from "../Button";

import { DefaultTheme, NestedInputProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
	root: {
		display: "flex",
		position: "relative",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		alignItems: "center",
		border: (props) =>
			props.inputFocus
				? `1px solid ${theme.colors.grey.dark}`
				: `1px solid ${theme.colors.purple.base}`,
		borderRadius: theme.borderRadius * 2,
		backgroundColor: theme.colors.white,
		width: "100%",
		maxWidth: 360,
		height: 56,
		padding: "0 6px",
	},
	inputContainer: {
		flex: "1 1 auto",
		paddingRight: 8,
	},
	input: {
		height: 48,
		width: "100%",
		fontFamily: theme.typography.fontFamilies.body,
		fontSize: 16,
		lineHeight: "24px",
		letterSpacing: "0.1px",
		color: theme.colors.grey.dark,
		appearance: "none",
		border: "none",
		"&:focus": {
			border: "none",
			outline: "none",
			"& $root": {
				borderColor: theme.colors.grey.dark,
			},
		},
	},
}));

const NestedInput: React.FC<NestedInputProps> = ({
	buttonText,
	errors,
	handleChange,
	id,
	name,
	placeholder,
	touched,
}) => {
	const [inputFocus, setInputFocus] = useState<boolean>(false);
	const classes = useStyles({ inputFocus });
	const theme: DefaultTheme = useTheme();

	const toggleFocus = () => setInputFocus(!inputFocus);

	return (
		<>
			<div className={classes.root}>
				<div className={classes.inputContainer}>
					<input
						data-testid="nested-input"
						className={classes.input}
						id={id}
						name={name}
						onBlur={toggleFocus}
						onFocus={toggleFocus}
						placeholder={placeholder}
						onChange={handleChange}
						type="text"
					/>
				</div>
				<div>
					<Button useSubmit submitText={buttonText} />
				</div>
			</div>
			{errors && errors[name] && touched && touched[name] ? (
				<div style={{ marginTop: theme.spacing.base }}>
					<Typography color={theme.colors.error} variant="body">
						{errors[name]}
					</Typography>
				</div>
			) : null}
		</>
	);
};

export default NestedInput;
