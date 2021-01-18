import React from "react";
import ThemeProvider from "../packages/core/src/ThemeProvider";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
	(Story) => (
		<ThemeProvider>
			<Story />
		</ThemeProvider>
	),
];
