import React from "react";
import Button from "../../packages/core/src/Button";
import ThemeProvider from "../../packages/core/src/ThemeProvider";
import Typography from "../../packages/core/src/Typography";

import "./playground.css";

const App: React.FC = () => (
	<ThemeProvider>
		<div style={{ padding: 20 }}>
			<Button>Sign In To Make Your pick</Button>
			<Typography variant="title">PickUp - this is a title</Typography>
			<Typography variant="heading2">This is a heading 2</Typography>
			<Typography variant="body">
				Lorem ipsum dolor sit amet, this is a body typography variant. It is
				pretty coool. Lorem ipsum dolor sit amet!
			</Typography>
		</div>
	</ThemeProvider>
);

export default App;
