import React, { ReactNode } from "react";
import Downshift, {
  DownshiftState,
  ControllerStateAndHelpers,
} from "downshift";
import without from "lodash/without";

import { SelectItem } from "../types";
import { FieldInputProps } from "formik";

export interface MultiDownshiftProps {
  onChange: (field: string, value: string) => void;
  itemToString: (item: SelectItem) => string;
  field: FieldInputProps<any>;
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
    downshift: ControllerStateAndHelpers<SelectItem>
  ): void => {
    const callOnChange = () => {
      const { onChange, field } = this.props;
      const { selectedItems } = this.state;
      if (onChange) {
        const transformedItems = selectedItems.map(
          (item: SelectItem) => item.value
        );
        onChange(field.name, transformedItems.join(","));
        this.getStateAndHelpers(downshift);
      }
    };
    if (this.state.selectedItems.includes(selectedItem)) {
      this.removeItem(selectedItem, callOnChange);
    } else {
      this.addSelectedItem(selectedItem, callOnChange);
    }
  };

  removeItem = (item: SelectItem, cb?: () => unknown): void => {
    const { onChange, field } = this.props;

    const fieldArray = without(field.value.split(","), item.value);
    onChange(field.name, fieldArray.toString());

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

  // @ts-ignore
  getRemoveButtonProps = ({ onClick, item, ...props } = {}): Record<
    any,
    unknown
  > => {
    return {
      onClick: (e) => {
        onClick && onClick(e);
        e.stopPropagation();
        this.removeItem(item);
      },
      ...props,
    };
  };

  getStateAndHelpers = (
    downshift: ControllerStateAndHelpers<SelectItem>
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
