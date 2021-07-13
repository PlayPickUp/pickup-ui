import { FieldInputProps, FormikErrors, FormikTouched } from "formik";
import React, {
  ChangeEvent,
  CSSProperties,
  MouseEvent,
  ReactElement,
  ReactNode,
  SetStateAction,
  Dispatch,
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
  fontStyle?: string;
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
  onClick?: (e?: React.MouseEvent) => unknown;
  element?: keyof JSX.IntrinsicElements;
  to?: string;
  href?: string;
  className?: string;
  useSubmit?: boolean;
  submitText?: string;
  color?: "primary" | "secondary" | "light";
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
    | "body2"
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
  useUnescape?: boolean;
}

export type TypographyElementMap = Record<string, keyof JSX.IntrinsicElements>;

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
  actionToolbar: (props: any) => ReactElement;
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
  actionToolbar: (props: any) => ReactElement;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
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

export interface BaseFormikFields {
  id: string;
  name: string;
  field: FieldInputProps<any>;
  form: Record<any, any>;
}

export type BaseFormikHandleChange = (e: ChangeEvent) => unknown;

export interface BaseFormikFieldsWithHandleChange extends BaseFormikFields {
  handleChange: BaseFormikHandleChange;
}

/**
 *
 * TextInput Component
 *
 */
export interface TextInputProps extends BaseFormikFieldsWithHandleChange {
  className?: string;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  placeholder?: string;
  label?: string;
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
export interface TextAreaProps extends BaseFormikFieldsWithHandleChange {
  className?: string;
  style?: React.CSSProperties;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
  label?: string;
}

/**
 *
 * Select Component
 *
 */ export interface SelectItem {
  label: string;
  value: string;
}

export type BaseFormikSetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => unknown;

export interface SelectProps extends BaseFormikFields {
  className?: string;
  items: SelectItem[];
  label: string;
  placeholder?: string;
  style?: React.CSSProperties;
}

export interface DropdownStyleProps {
  isOpen: boolean;
}

/**
 *
 * NestedInput Component
 *
 */
export interface NestedInputProps extends BaseFormikFieldsWithHandleChange {
  buttonText: string;
  placeholder: string;
}

/**
 *
 * MultiSelect Component
 *
 */
export interface MultiSelectProps extends BaseFormikFields {
  items: SelectItem[];
  label: string;
}

/**
 *
 * Individual Icon Component
 *
 */
export interface IconProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 *
 * Chip Component
 *
 */
export interface ChipProps {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => unknown;
  color?: "default" | "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
  isActive?: boolean;
  label: string;
  element?: keyof JSX.IntrinsicElements;
  href?: string;
}

/**
 *
 * Paper Component
 *
 */
export interface PaperProps {
  padding?: number;
  children: unknown;
  style?: React.CSSProperties;
  className?: string;
}

/**
 *
 * FormError Component
 *
 */
export interface FormErrorProps {
  errors: FormikErrors<unknown>;
  touched: FormikTouched<unknown>;
  name: string;
}

/**
 *
 * Loader Component
 *
 */
export interface LoaderProps {
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  text?: string;
}

/**
 *
 * Picker Button
 *
 */
export interface PickerButtonProps {
  className?: string;
  displayText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  showResult?: boolean;
  result: number | null;
  isPick: boolean;
}
