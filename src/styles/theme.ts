import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  colors: {
    highlight: "#FFBA08",
    black: "#000",
    info: {
      dark: "#999999",
      light: "#DADADA",
    },
    text: {
      dark: "#47585B",
      light: "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "text.light",
        color: "text.dark",
      },
    },
  },
});
