import React from "react";
import Button from "../../packages/core/src/Button";
import ThemeProvider from "../../packages/core/src/ThemeProvider";

import "./playground.css";

const App: React.FC = () => (
	<ThemeProvider>
		<div style={{ padding: 20 }}>
			<Button>Sign In To Make Your pick</Button>
		</div>
	</ThemeProvider>
);

export default App;
