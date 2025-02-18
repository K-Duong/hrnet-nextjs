"use client";

import React, { useEffect, PropsWithChildren} from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/theme";

const ThemeProviderWrapper: React.FC<PropsWithChildren<{children: React.ReactNode}>> = ({ children }) => {
  useEffect(() => {
    // Remove the server-side injected CSS from MUI SSR.
    const jssStyles = document.getElementById("jss-server-side");
    jssStyles?.remove(); // Using optional chaining for safety
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default ThemeProviderWrapper