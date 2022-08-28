import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: `"CircularStd-Book", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#e8590c",
    },
    secondary: {
      main: "#e11d48",
    },
  },
});
