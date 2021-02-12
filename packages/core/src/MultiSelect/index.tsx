import React, { KeyboardEvent, MouseEvent, useRef } from "react";
import MultiDownshift from "./MultiDownshift";
import classNames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import { ChevronDown } from "@playpickup/icons";

import Icon from "../Icon";
import { getItems } from "./helpers";
import { DefaultTheme, MultiSelectProps, SelectItem } from "../types";
import Label from "../Label";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
	root: {
		position: "relative",
	},
	tagWrapper: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexFlow: "row wrap",
		position: "relative",
		width: "100%",
		height: "auto",
	},
	tag: {
		position: "relative",
		width: "auto",
		backgroundColor: theme.colors.purple.light,
		border: `1px solid ${theme.colors.purple.dark}`,
		borderRadius: "55px",
		padding: `${theme.spacing.base / 2}px ${theme.spacing.base * 3.5}px`,
		margin: `${theme.spacing.base * 2}px ${theme.spacing.base}px 0`,
		fontSize: 12,
		fontFamily: theme.typography.fontFamilies.body,
		color: theme.colors.purple.dark,
		textAlign: "center",
	},
	inputWrapper: {
		position: "relative",
		height: "auto",
		width: "100%",
		fontFamily: theme.typography.fontFamilies.body,
		fontSize: 15,
		lineHeight: "18px",
		letterSpacing: "0.1px",
		color: theme.colors.black,
		backgroundColor: theme.colors.white,
		border: `1px solid ${theme.colors.grey.base}`,
		borderRadius: theme.borderRadius,
		padding: `0 ${theme.spacing.base * 5}px 0 ${theme.spacing.base * 4}px`,
		textAlign: "left",
		"&:focus, &:active": {
			border: `1px solid ${theme.colors.grey.base}`,
			outline: "none",
		},
	},
	input: {
		position: "relative",
		width: "100%",
		height: 44,
		border: "none",
		fontFamily: theme.typography.fontFamilies.body,
		fontSize: 15,
		lineHeight: "18px",
		letterSpacing: "0.1px",
		color: theme.colors.black,
		backgroundColor: theme.colors.white,
		"&:active, &:focus": {
			outline: "none",
		},
	},
	iconButton: {
		position: "absolute",
		right: `${theme.spacing.base * 3}px`,
		top: `${theme.spacing.base * 3.25}px`,
		"&:active, &:focus": {
			outline: "none",
		},
	},
	icon: {
		position: "relative",
		transition: "all 250ms ease-out",
		transform: "rotate(0deg)",
	},
	iconOpen: {
		transform: "rotate(180deg)",
	},
	dropdown: {
		position: "relative",
		top: -3,
		height: "auto",
		width: "100%",
		fontFamily: theme.typography.fontFamilies.body,
		fontSize: 14,
		lineHeight: "18px",
		letterSpacing: "0.1px",
		color: theme.colors.black,
		backgroundColor: theme.colors.white,
		border: `1px solid ${theme.colors.grey.base}`,
		borderTop: "transparent",
		borderRadius: theme.borderRadius,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		textAlign: "left",
		"&:focus, &:active": {
			border: `1px solid ${theme.colors.grey.base}`,
			borderTop: "transparent",
			outline: "none",
		},
	},
	dropdownItem: {
		padding: `${theme.spacing.base * 4}px`,
	},
}));

const MultiSelect: React.FC<MultiSelectProps> = ({
	setFieldValue,
	items,
	name,
	id,
}) => {
	const classes = useStyles();
	const theme: DefaultTheme = useTheme();
	const input = useRef(null);
	return (
		<MultiDownshift
			onChange={setFieldValue}
			itemToString={(item: SelectItem) => (item ? item.label : "")}
		>
			{({
				getInputProps,
				getToggleButtonProps,
				getMenuProps,
				// note that the getRemoveButtonProps prop getter and the removeItem
				// action are coming from MultiDownshift composibility for the win!
				getRemoveButtonProps,
				removeItem,

				isOpen,
				inputValue,
				selectedItems,
				getItemProps,
				highlightedIndex,
				toggleMenu,
			}) => (
				<div className={classes.root}>
					<Label htmlFor={name}>Multi-League</Label>
					<div
						onClick={() => {
							toggleMenu();
							!isOpen && input.current.focus();
						}}
						style={{ position: "relative" }}
					>
						<div
							className={classes.inputWrapper}
							style={{ position: "relative" }}
						>
							{selectedItems.length > 0 ? (
								<div className={classes.tagWrapper}>
									{selectedItems.map((item: SelectItem, i: number) => (
										<div key={`${item.value}${i}`} className={classes.tag}>
											<span>{item.label}</span>
											<button {...getRemoveButtonProps({ item })}>𝘅</button>
										</div>
									))}
								</div>
							) : null}
							{/* {selectedItems.length > 0
? selectedItems.map((item: SelectItem, i: number) => (
<div key={`${item.value}${i}`}>
<div
style={{
display: "grid",
gridGap: 6,
gridAutoFlow: "column",
alignItems: "center",
position: "relative",
}}
>
<span>{item.label}</span>
<button {...getRemoveButtonProps({ item })}>𝘅</button>
</div>
</div>
))
: null} */}
							<input
								{...getInputProps({
									id,
									name,
									ref: input,
									placeholder: "Select items...",
									className: classes.input,
									onKeyDown(event: KeyboardEvent) {
										if (event.key === "Backspace" && !inputValue) {
											removeItem(selectedItems[selectedItems.length - 1]);
										}
									},
								})}
							/>
							<button
								{...getToggleButtonProps({
									// prevents the menu from immediately toggling
									// closed (due to our custom click handler above).
									onClick(event: MouseEvent) {
										event.stopPropagation();
									},
									className: classes.iconButton,
								})}
							>
								<Icon
									className={classNames({
										[classes.icon]: true,
										[classes.iconOpen]: isOpen,
									})}
									color={theme.colors.grey.base}
								>
									<ChevronDown />
								</Icon>
							</button>
						</div>
					</div>
					<ul
						className={classes.dropdown}
						style={{ display: isOpen ? "block" : "none" }}
						{...getMenuProps({ isOpen })}
					>
						{isOpen
							? getItems(items, inputValue).map(
									(item: SelectItem, index: number) => (
										<li
											className={classes.dropdownItem}
											key={`${item.value}${index}`}
											{...getItemProps({
												item,
												index,
												isActive: highlightedIndex === index,
												isSelected: selectedItems.includes(item),
												style: {
													backgroundColor:
														highlightedIndex === index
															? theme.colors.purple.light
															: theme.colors.white,
													fontWeight: selectedItems.includes(item)
														? "bold"
														: "normal",
												},
											})}
										>
											{item.label}
										</li>
									)
							  )
							: null}
					</ul>
				</div>
			)}
		</MultiDownshift>
	);
};

export default MultiSelect;
