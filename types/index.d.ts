import { ReactNode } from "react";
export interface ThemeProviderProps {
	children: any;
	withReset: boolean;
	theme: DefaultTheme;
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
	color: string;
}
export interface FontStyles {
	title: FontProperties;
	heading2: FontProperties;
	body: FontProperties;
}
export interface DefaultTypography {
	fontFamilies: FontFamilies;
	fontStyles: FontStyles;
}
export declare type CreateShadow = (
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
export declare type DefaultSpacing = {
	base: number;
};
export declare type DefaultShadows = Array<string>;
export interface DefaultZIndex {
	overlay: number;
}
export interface DefaultGradients {
	main: string;
}
export declare type MediaQuery = (minWidth: number) => string;
export interface Breakpoints {
	small: number;
	medium: number;
	large: number;
}
export declare type DefaultTheme = {
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
export declare type ButtonVariant = "fit" | "full";
export interface ButtonProps {
	children: ReactNode;
	disabled?: boolean;
	style?: React.CSSProperties;
	variant: ButtonVariant;
	onClick?: () => unknown;
	element: keyof JSX.IntrinsicElements;
	to?: string;
	href?: string;
	className?: string;
}
export {};
//# sourceMappingURL=index.d.ts.map
