import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
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
