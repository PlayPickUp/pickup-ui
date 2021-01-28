import { ChangeEvent, CSSProperties, ReactNode } from "react";

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
