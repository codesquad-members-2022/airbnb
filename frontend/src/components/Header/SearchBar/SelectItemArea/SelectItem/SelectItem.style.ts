const selectItemStyles = {
  button: {
    flexDirection: "column",
    padding: 0,
    width: "100%",
    alignItems: "flex-start",

    "&:hover": {
      textDecoration: "none",
      background: "rgba(0,0,0, 0.12)",
    },
  },
  title: {
    color: ({ palette }: { palette: { black: { main: string } } }) =>
      palette.black.main,
  },
  desc: {
    color: ({ palette }: { palette: { grey2: { main: string } } }) =>
      palette.grey2.main,
    fontSize: "16px",
  },
};

export default selectItemStyles;
