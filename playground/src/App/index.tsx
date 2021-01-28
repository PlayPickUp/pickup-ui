import React from "react";
import { ThemeProvider, Typography } from "@playpickup/core";

const App: React.FC = () => (
  <ThemeProvider>
    <div>
      <Typography variant="title">Hello, PickUp!</Typography>
    </div>
  </ThemeProvider>
);

export default App;
