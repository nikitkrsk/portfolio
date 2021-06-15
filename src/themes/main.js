import { red } from "@material-ui/core/colors";

export const themesConfig = {
  legacy: {
    palette: {
      type: "dark",
      primary: {
        light: "FFFFFF",
        main: "#161616d7",
        dark: "#021835",
      },
      secondary: {
        light: "#7d7e7e",
        main: "#42BADC", //
        dark: "#FD201F",
        contrastText: "#FFFFFF",
      },
      background: {
        paper: "#212121",
        default: "#111111",
      },
      error: red,
    },
    props: {
      MuiSvgIcon: {
        htmlColor: "#42BADC",
      },
    },
    status: {
      danger: "orange",
    },
  },

  light: {
    palette: {
      type: "light",
      primary: {
        light: "#C2C7F1",
        main: "#ffffffd5",
        dark: "#161EB3",
      },
      secondary: {
        light: "#7d7e7e",
        main: "#3CB1D5",
        dark: "#00B2FC",
        contrastText: "#1E1F23",
      },
      background: {
        paper: "#F9F9F9",
        default: "#F5F5F5",
      },
      error: red,
    },
    props: {
      MuiSvgIcon: {
        htmlColor: "#606060",
      },
    },
    status: {
      danger: "orange",
    },
  },
};

export default themesConfig;
