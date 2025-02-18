"use client"
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#6D8B3D",
    },
    secondary: {
      main: "#A4B96D"
    },
    error: {
      main: "#D9534F"
    },
    warning: {
      main: "#E6A700"
    },
    success: {
      main: "#4CAF50"
    },
    text: {
      primary: "#2F2F2F",
      secondary: "#6D6D6D",
      disabled: "#C0C0C0"
    },
    background: {
      default: "#F4F4F2"
    }
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif"
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 1279,
      lg: 1280,
      xl: 2560
    },

  }
})

export default theme