// import { createTheme } from "@mui/material";
// export const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#2CE080",
//     },
//   },
// });
// export const theme2 = createTheme({
//   palette: {
//     primary: {
//       main: "#0365F2",
//     },
//   },
// });
// export const typographyTheme = createTheme({
//   typography: {
//     fontFamily: "CeraPro",
//   },
// });

import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    subtitle4: React.CSSProperties;
    subtitle5: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    subtitle4?: React.CSSProperties;
    subtitle5?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    body3: true;
  }
}

// A custom theme for the application
const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
      light: "#d6eaff",
      dark: "#00448c",
    },
    secondary: {
      main: "#0365F2",
      light: "#d6eaff",
      dark: "#00448c",
    },
    warning: {
      main: "#f8d676",
    },
    success: {
      main: "#12cc65",
    },
    common: {
      black: "#03314B",
      white: "#ffffff",
    },
    error: {
      main: "#e6461c",
    },
    background: {
      default: "#fcfdff",
      paper: "#ffffff",
    },
    text: {
      primary: "#0365F2",
      secondary: "#6D787E",

      disabled: "#03314B",
    },
  },
  spacing: 4,

  typography: {
    h1: {
      fontSize: "36px",
      fontWeight: 700,
      fontStyle: "Bold",
      lineHeight: "45px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "34px",
    },
    h3: {
      fontSize: "22px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "32px",
    },
    h4: {
      fontSize: "14px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "21px",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 600,
      fontStyle: "Bold",
      lineHeight: "26px",
    },
    subtitle2: {
      fontSize: "18px",
      fontWeight: 400,
      fontStyle: "regular",
      lineHeight: "22.63px",
    },
    subtitle3: {
      display: "block",
      fontSize: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "22.63px",
    },
    subtitle4: {
      display: "block",
      fontSize: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "22.63px",
    },
    subtitle5: {
      display: "block",
      fontSize: "20px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "25.14px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 500,
      fontStyle: "medium",
      lineHeight: "20.11px",
    },
    body2: {
      display: "block",
      fontSize: "16px",
      fontWeight: 400,
      fontStyle: "regular",
      lineHeight: "20.11px",
      textAlign: "left",
    },
    body3: {
      display: "block",
      fontSize: "16px",
      fontWeight: 500,
      fontStyle: "regular",
      lineHeight: "100%",
    },
    caption: {
      display: "block",
      fontSize: "14px",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "17px",
      textAlign: "left",
    },
    overline: {
      fontSize: "12px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "18px",
    },
    h6: {
      fontSize: "0.8em",
    },
  },
});

export default theme;

export const EXTRA_COLORS = {
  blue: "#1072f1",
  lightBlue: "#e4effd",
  lightBlue_100: "#D7E4F1",
  blusihWhite: "#E6F2FF",
  blueBackground: "#0196FF",
  green: "#29c79f",
  greenCyan: "#B4CEBE",
  lightGreen: "#e3fbf5",
  lightGreenCyan: "#E5F9EE",
  greenBackground: "#15C6A7",
  fauxMintCream: "#F5FFF9",
  cyan: "#DAFCFF",
  mediumCyan: "#00BBCC",
  orange: "#FF8208",
  lightOrange: "#FFF9F4",
  darkRed: "#873019",
  darkRed_100: "#B23413",
  darkRed_200: "#DC2E00",
  redBackground: "#E6461C",
  red: "#e34a30",
  red_100: "#FF5E48",
  teritary_blue: "#EDF7FF",
  lightRed: "#fcebe8",
  paleRed: "#FFF6F3",
  violet: "#8266c9",
  lightViolet: "#f1eef9",
  grey: "#84818a",
  darkGrayish: "#5C6F84",
  black: "#000000",
  yellow: "#C29616",
  lightYellow: "#FDF1D1",
  // Used for element border color
  lightYellowBackground: "#FFFAEB",
  lightYellowBorder: "#FFF2CB",
  darkYellowBorder: "#E6C25B",
  lightGray: "#F1F2F4",
  lightGrayishBlue: "#edf4fc",
  lightBluishBackground: "#F0F8FF",
  bluishBackground: "#FAFDFF",
  skyBlue: "#3396FF",
  accentBlue: "#B9DBFF",
  alphaPrimary: "#E5F2FF",
  accentBlue_100: "#7ABAFF",
  accentBlue_300: "#308AEB",
  accentGreen_400: "#20c9ac1a",
  accentGreen_900: "#20C9AC",
  whiteSmoke: "#f5f5f5",
  blue_100: "#E2EDF9",
  blue_200: "#5CABFF",
  blue_400: "#1081D2",
  blue_500: "#00A5FF",
  redishOrange: "#F89E87",
  mediumRedOrange: "#FFAF9A",
  mediumGray: "#C4C4C4",
  mediumRed: "#E28168",
  mediumOrange: "#F9C7BA",
  lightRedOrange: "#FBE2DB",
  whiteOverlay: "rgba(255, 255, 255, 0.71)",
  warning_300: "#C29616",
  greyMedium: "#9B9B9B",
  pinkDark: "#FA699D",
  orangeMedium: "#FFA043",
  lightPink: "#faf2f5",
  greyBackground: "#ECECEC",
  mediumBlue_100: "#92B3D4",
  aqua: "#00E0F5",
  lightAqua: "#ebf4f5",
  greyOut: 0.3,
  greyOutDefault: 1,
  alphaPrimary_100: "#F2FAFF",
  greyFont: "#748AA1",
};
