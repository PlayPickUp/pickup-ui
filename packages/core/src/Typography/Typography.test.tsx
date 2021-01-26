import React from "react";
import { render } from "@testing-library/react";

import ThemeProvider from "../ThemeProvider";
import Typography from "../Typography";

test("Renders without crashing, matches snapshot", () => {
	const { container } = render(
		<ThemeProvider>
			<Typography variant="title">PlayPickUp</Typography>
		</ThemeProvider>
	);
	expect(container).toMatchSnapshot();
});
