import React from "react";
import { ThemeProvider as JSSThemeProvider } from "react-jss";
import PropTypes from "prop-types";
import merge from "lodash/merge";

import { defaultTheme } from "./defaultTheme";

import { ThemeProviderProps } from "../../../types";
import GlobalsAndReset from "./GlobalsAndReset";

const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	withReset = true,
	theme,
	...rest
}) => {
	const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;
	return (
		<JSSThemeProvider theme={mergedTheme} {...rest}>
			{withReset ? <GlobalsAndReset>{children}</GlobalsAndReset> : children}
		</JSSThemeProvider>
	);
};

ThemeProvider.defaultProps = {
	withReset: true,
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
	withReset: PropTypes.bool.isRequired,
	theme: PropTypes.any,
};

export default ThemeProvider;
