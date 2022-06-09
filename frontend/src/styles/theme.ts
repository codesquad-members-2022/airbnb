import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#E84C60",
    },
    secondary: {
      main: "#118917",
    },
    black: {
      main: "#010101",
    },
    white: {
      main: "#FFF",
    },
    grey1: {
      main: "#333333",
    },
    grey2: {
      main: "#4F4F4F",
    },
    grey3: {
      main: "#828282",
    },
    grey4: {
      main: "#BDBDBD",
    },
    grey5: {
      main: "#E0E0E0",
    },
    grey6: {
      main: "#F5F5F7",
    },
  },
  elementSize: {
    fullSize: "100%",
    navBarHeight: "100px",
    header: {
      index: {
        height: "640px",
      },
      others: {
        height: "94px",
      },
    },
    smallRoundButton: {
      width: `32px`,
      height: `32px`,
    },
    searchBar: {
      height: 60,
      icon: { miniSize: "16px" },
      closeButton: {
        width: "20px",
        height: "20px",
        icon: {
          width: "13px",
          height: "13px",
        },
      },
      searchButton: {
        width: "40px",
        height: "40px",
        icon: {
          width: "2rem",
          height: "2rem",
        },
      },
      focusedButton: {
        width: "90px",
        height: "40px",
      },
      fullSize: {
        maxWidth: `916px`,
        height: `76px`,
        padding: `16px 16px 16px 40px !important`,
      },
      miniSize: {
        width: "298px",
        height: "48px",
        padding: "8px 8px 8px 24px !important",
      },
      priceChart: {
        width: 365,
        height: 100,
      },
    },
  },
  style: {
    circularBorder: `border-radius: 50%;`,
    alignCenter: {
      flex: ` 
    display:flex;
    justify-content: center;
    align-items: center;
    `,
      margin: "0 auto",
    },
    miniSearchButton: {
      fontWeight: 400,
      fontSize: "12px",
    },
  },
  whiteSpace: {
    inner: "40px",
    searchBarPadding: "64px",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
        },

        a: {
          textDecoration: "none",
          color: "inherit",
        },

        button: {
          fontFamily: ["Noto Sans KR", "sans-serif"].join(","),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "400",
          fontSize: "1rem",
          backgroundColor: "inherit",
          minWidth: "0",
          color: "inherit",

          "&:hover": {
            fontWeight: "700",
            textDecoration: "underline",
            backgroundColor: "unset",
          },

          // 버튼 내부 icon
          span: {
            margin: 0,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,

          "@media (min-width: 600px)": {
            padding: 0,
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: "32px",
          minWidth: "200px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          minWidth: "200px",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          minWidth: "200px",
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  export interface Theme {
    elementSize: {
      fullSize: string;
      navBarHeight: string;
      header: {
        index: {
          height: string;
        };
        others: {
          height: string;
        };
      };
      smallRoundButton: {
        width: string;
        height: string;
      };
      searchBar: {
        height: number;
        icon: { miniSize: string };
        closeButton: {
          width: string;
          height: string;
          icon: {
            width: string;
            height: string;
          };
        };
        searchButton: {
          width: string;
          height: string;
          icon: {
            width: string;
            height: string;
          };
        };
        focusedButton: {
          width: string;
          height: string;
        };
        fullSize: {
          maxWidth: string;
          height: string;
          padding: string;
        };
        miniSize: {
          width: string;
          height: string;
          padding: string;
        };
        priceChart: {
          width: number;
          height: number;
        };
      };
    };
    style: {
      alignCenter: {
        flex: string;
        margin: string;
      };
      miniSearchButton: {
        fontWeight: number;
        fontSize: string;
      };
      circularBorder: string;
    };
    whiteSpace: {
      inner: string;
      searchBarPadding: string;
    };
  }
  export interface ThemeOptions {
    elementSize?: {
      fullSize?: string;
      navBarHeight?: string;
      smallRoundButton?: {
        width?: string;
        height?: string;
      };
      header?: {
        index?: {
          height?: string;
        };
        others?: {
          height?: string;
        };
      };
      searchBar?: {
        height?: number;
        icon?: { miniSize?: string };
        closeButton?: {
          width?: string;
          height?: string;
          icon?: {
            width?: string;
            height?: string;
          };
        };
        searchButton?: {
          width?: string;
          height?: string;
          icon?: {
            width?: string;
            height?: string;
          };
        };
        focusedButton?: {
          width?: string;
          height?: string;
        };
        fullSize?: {
          maxWidth?: string;
          height?: string;
          padding?: string;
        };
        miniSize?: {
          width?: string;
          height?: string;
          padding?: string;
        };
        priceChart?: {
          width?: number;
          height?: number;
        };
      };
    };
    style?: {
      alignCenter?: {
        flex?: string;
        margin?: string;
      };
      miniSearchButton?: {
        fontWeight?: number;
        fontSize?: string;
      };
      circularBorder?: string;
    };
    whiteSpace?: {
      inner?: string;
      searchBarPadding?: string;
    };
  }
  interface Palette {
    black: Palette["primary"];
    white: Palette["primary"];
    grey1: Palette["primary"];
    grey2: Palette["primary"];
    grey3: Palette["primary"];
    grey4: Palette["primary"];
    grey5: Palette["primary"];
    grey6: Palette["primary"];
  }
  interface PaletteOptions {
    black?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
    grey1?: PaletteOptions["primary"];
    grey2?: PaletteOptions["primary"];
    grey3?: PaletteOptions["primary"];
    grey4?: PaletteOptions["primary"];
    grey5?: PaletteOptions["primary"];
    grey6?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    black: true;
    white: true;
    grey4: true;
  }
}

export default theme;
