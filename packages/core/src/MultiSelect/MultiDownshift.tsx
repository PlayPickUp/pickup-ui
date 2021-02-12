// @ts-nocheck
import React, { ReactNode } from "react";
import Downshift, { DownshiftState } from "downshift";

import { SelectItem } from "../types";

export interface MultiDownshiftProps {
	onChange: any;
	itemToString: (item: SelectItem) => string;
	render?: any;
}

export interface MultiDownshiftState {
	selectedItems: SelectItem[];
}

class MultiDownshift extends React.Component<
	MultiDownshiftProps,
	MultiDownshiftState
> {
	state: MultiDownshiftState = { selectedItems: [] };

	stateReducer = (
		state: DownshiftState<SelectItem>,
		changes: any | Record<any, boolean | string | number>
	): Record<any, boolean | string | number> => {
		switch (changes.type) {
			case Downshift.stateChangeTypes.keyDownEnter:
			case Downshift.stateChangeTypes.clickItem:
				return {
					...changes,
					highlightedIndex: state.highlightedIndex,
					isOpen: true,
					inputValue: "",
				};
			default:
				return changes;
		}
	};

	handleSelection = (
		selectedItem: SelectItem,
		downshift: Record<any, unknown>
	): void => {
		const callOnChange = () => {
			const { onChange } = this.props;
			const { selectedItems } = this.state;
			if (onChange) {
				onChange(selectedItems, this.getStateAndHelpers(downshift));
			}
		};
		if (this.state.selectedItems.includes(selectedItem)) {
			this.removeItem(selectedItem, callOnChange);
		} else {
			this.addSelectedItem(selectedItem, callOnChange);
		}
	};

	removeItem = (item: SelectItem, cb?: () => unknown): void => {
		this.setState(({ selectedItems }) => {
			return {
				selectedItems: selectedItems.filter((i) => i !== item),
			};
		}, cb);
	};

	addSelectedItem = (item: SelectItem, cb: () => unknown): void => {
		this.setState(
			({ selectedItems }) => ({
				selectedItems: [...selectedItems, item],
			}),
			cb
		);
	};

	getRemoveButtonProps = ({ onClick, item, ...props } = {}): Record<
		any,
		unknown
	> => {
		return {
			onClick: (e) => {
				// TODO: use something like downshift's composeEventHandlers utility instead
				onClick && onClick(e);
				e.stopPropagation();
				this.removeItem(item);
			},
			...props,
		};
	};

	getStateAndHelpers = (
		downshift: Record<any, unknown>
	): Record<any, unknown> => {
		const { selectedItems } = this.state;
		const { getRemoveButtonProps, removeItem } = this;
		return {
			getRemoveButtonProps,
			removeItem,
			selectedItems,
			...downshift,
		};
	};

	render(): ReactNode {
		const { render, children = render, ...props } = this.props;
		// TODO: compose together props (rather than overwriting them) like downshift does
		return (
			<Downshift
				{...props}
				stateReducer={this.stateReducer}
				onChange={this.handleSelection}
				selectedItem={null}
			>
				{(downshift) => children(this.getStateAndHelpers(downshift))}
			</Downshift>
		);
	}
}

export default MultiDownshift;
