import { matchSorter } from "match-sorter";
import { SelectItem } from "../types";

export const getItems = (
	allItems: SelectItem[],
	filter: string
): SelectItem[] => {
	return filter
		? matchSorter(allItems, filter.toLowerCase(), { keys: ["value"] })
		: allItems;
};
