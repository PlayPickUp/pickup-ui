import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Button from ".";

test("Renders and matches snapshot", () => {
	const element = render(
		<ThemeProvider>
			<Button href="https://www.playpickup.com">Make your pick</Button>
		</ThemeProvider>
	);
	expect(element).toMatchSnapshot();
});
