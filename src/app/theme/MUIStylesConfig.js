"use client";

import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: tokens.color.accent,
      light: tokens.color.accent2,
      dark: "#0F8A6F",
      contrastText: tokens.color.textInverse,
    },
    secondary: {
      main: tokens.color.accent3,
      contrastText: tokens.color.textInverse,
    },
    background: {
      default: tokens.color.bgBase,
      paper: tokens.color.bgSurface,
    },
    text: {
      primary: tokens.color.textPrimary,
      secondary: tokens.color.textSecondary,
      disabled: tokens.color.textTertiary,
    },
    divider: tokens.color.border,
    error: { main: tokens.color.danger },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: tokens.font.body,
    htmlFontSize: 16,
    h1: {
      fontFamily: tokens.font.display,
      fontWeight: 500,
      fontSize: tokens.size["5xl"],
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: tokens.font.display,
      fontWeight: 500,
      fontSize: tokens.size["3xl"],
      lineHeight: 1.08,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: tokens.font.display,
      fontWeight: 500,
      fontSize: tokens.size["2xl"],
      lineHeight: 1.15,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 600,
      fontSize: tokens.size.xl,
      lineHeight: 1.25,
    },
    h5: {
      fontWeight: 600,
      fontSize: tokens.size.lg,
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 600,
      fontSize: tokens.size.md,
      lineHeight: 1.4,
      letterSpacing: "0.005em",
    },
    subtitle1: { fontWeight: 500, fontSize: tokens.size.md, lineHeight: 1.5 },
    subtitle2: {
      fontWeight: 500,
      fontSize: tokens.size.sm,
      lineHeight: 1.5,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: tokens.color.textTertiary,
    },
    body1: { fontSize: tokens.size.base, lineHeight: 1.65 },
    body2: { fontSize: tokens.size.sm, lineHeight: 1.6, color: tokens.color.textSecondary },
    button: {
      fontWeight: 500,
      fontSize: tokens.size.sm,
      letterSpacing: "0.01em",
      textTransform: "none",
    },
    overline: {
      fontWeight: 500,
      fontSize: tokens.size.xs,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: tokens.color.textTertiary,
    },
    caption: { fontSize: tokens.size.xs, lineHeight: 1.5, color: tokens.color.textTertiary },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: tokens.color.bgBase,
          color: tokens.color.textPrimary,
          fontFamily: tokens.font.body,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "::selection": {
          backgroundColor: tokens.color.accentSoft,
          color: tokens.color.textPrimary,
        },
        a: { color: "inherit" },
      },
    },
    MuiLink: {
      defaultProps: { underline: "none" },
    },
    MuiButtonBase: {
      defaultProps: { disableRipple: false },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: tokens.color.bgSurface,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: tokens.color.border },
      },
    },
  },
});

export default theme;
