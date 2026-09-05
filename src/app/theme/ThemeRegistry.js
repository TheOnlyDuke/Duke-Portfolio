"use client";

import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { theme } from "./MUIStylesConfig";

const clientCache = createCache({ key: "css", prepend: true });

export function ThemeRegistry({ children }) {
  return (
    <CacheProvider value={clientCache}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </CacheProvider>
  );
}