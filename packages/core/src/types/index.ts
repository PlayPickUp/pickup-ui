import {
	ChangeEvent,
	CSSProperties,
	MouseEvent,
	ReactElement,
	ReactNode,
} from "react";

/**
 *
 * Theme Specific Types
 *
 */
export interface ThemeProviderProps {
	children: any;
	withReset?: boolean;
	theme?: DefaultTheme;
}

export interface PurpleMap {
	light: string;
	base: string;
	dark: string;
}

export interface GreenMap {
	light: string;
	base: string;
}

export interface GreyMap {
	light: string;
	base: string;
	dark: string;
}

export interface RedMap {
	light: string;
	base: string;
}

export interface DefaultThemeColors {
	primary: PurpleMap;
	secondary: GreyMap;
	green: GreenMap;
	purple: PurpleMap;
	black: string;
	white: string;
	success: string;
	grey: GreyMap;
	red: RedMap;
	error: string;
}

export interface FontFamilies {
	body: string;
	headline: string;
}

interface FontProperties {
	fontFamily: string;
	fontWeight: number | string;
	fontStyle: string;
	fontSize: number | string;
	lineHeight: string;
	letterSpacing: string;
	textTransform?: string;
	color: string;
}

export interface FontStyles {
	title: FontProperties;
	heading2: FontProperties;
	heading3: FontProperties;
	body: FontProperties;
	body2: FontProperties;
}

export interface ResponsiveFonts {
	desktop: FontStyles;
	mobile: FontStyles;
}

export interface DefaultTypography {
	fontFamilies: FontFamilies;
	fontStyles: ResponsiveFonts;
}
export type CreateShadow = (
	a: number,
	b: number,
	c: number,
	d: number,
	e: number,
	f: number,
	g: number,
	h: number,
	i: number,
	j: number,
	k: number,
	l: number
) => string;

export type DefaultSpacing = {
	base: number;
};

export type DefaultShadows = Array<string>;

export interface DefaultZIndex {
	overlay: number;
}

export interface DefaultGradients {
	main: string;
	hover: string;
}

export type MediaQuery = (minWidth: number) => string;

export interface Breakpoints {
	small: number;
	medium: number;
	large: number;
}

export type DefaultTheme = {
	borderRadius: number;
	breakpoints: Breakpoints;
	mediaQuery: MediaQuery;
	colors: DefaultThemeColors;
	gradients: DefaultGradients;
	shadows: DefaultShadows;
	spacing: DefaultSpacing;
	typography: DefaultTypography;
	zIndex: DefaultZIndex;
};

/**
 *
 * Button Component
 *
 */

export type ButtonVariant = "fit" | "full";

export interface ButtonProps {
	children?: ReactNode;
	disabled?: boolean;
	style?: React.CSSProperties;
	variant?: ButtonVariant;
	onClick?: () => unknown;
	element?: keyof JSX.IntrinsicElements;
	to?: string;
	href?: string;
	className?: string;
	useSubmit?: boolean;
	submitText?: string;
}

/**
 *
 * Typography Component
 *
 */

export interface TypographyProps {
	children: ReactNode;
	variant?:
		| "title"
		| "body"
		| "heading2"
		| "heading3"
		| "heading4"
		| "heading5"
		| "heading6"
		| "span";
	className?: string;
	element?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	style?: CSSProperties;
	color?: string;
}

export type TypographyElementMap = Record<string, keyof JSX.IntrinsicElements>;

/**
 *
 * NestedInput Component
 *
 */
export interface NestedInputProps {
	buttonText: string;
	id: string;
	name: string;
	placeholder: string;
	errors?: any;
	touched?: any;
	handleChange: (e: ChangeEvent) => unknown;
}

/**
 *
 * Fab (Floating Action Button) Component
 *
 */

export interface FabProps {
	className?: string;
	innerClassName?: string;
	innerStyle?: React.CSSProperties;
	style?: React.CSSProperties;
	icon: any;
	title: string;
	size?: "small" | "large";
	onClick: (e: MouseEvent) => unknown;
	disabled?: boolean;
	disablePopOver?: boolean;
	color?: string;
	iconColor?: string;
	iconHoverColor?: string;
}

/**
 *
 * Table Component
 *
 */
export interface HeadCell {
	disablePadding: boolean;
	id: keyof TableData;
	label: string;
	numeric?: boolean;
	width?: number | undefined;
}

export type TableData = Record<any, any>;

export type TableOrder = "asc" | "desc";
export interface DataTableProps {
	headCells: HeadCell[];
	rows: Array<Record<string | number, any>>;
	defaultSortColumn: string;
	tableTitle: string;
}

export interface EnhancedTableProps {
	classes: ReturnType<any>;
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: TableOrder;
	orderBy: string;
	rowCount: number;
	headCells: HeadCell[];
}

export interface EnhancedTableToolbarProps {
	numSelected: number;
	tableTitle: string;
}

/**
 *
 * Icon Component
 *
 */
export interface IconBaseProps {
	children: ReactElement;
	color?: string;
	size?: number;
	className?: string;
	style?: React.CSSProperties;
}

/**
 *
 * TextInput Component
 *
 */
export interface TextInputProps {
	className?: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
	id: string;
	innerClassName?: string;
	innerStyle?: React.CSSProperties;
	name: string;
	style?: React.CSSProperties;
	value: string;
	placeholder?: string;
}

/**
 *
 * Label Component
 *
 */
export interface LabelProps {
	htmlFor: string;
	children: string | ReactNode;
	className?: string;
	style?: React.CSSProperties;
	innerClassName?: string;
	innerStyle?: React.CSSProperties;
}

/**
 *
 * TextArea Component
 *
 */
export interface TextAreaProps {
	className?: string;
	style?: React.CSSProperties;
	innerClassName?: string;
	innerStyle?: React.CSSProperties;
	value: string;
	id: string;
	name: string;
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => unknown;
}
