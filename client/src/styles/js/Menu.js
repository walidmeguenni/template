export const Theme=() => ({
  root: {
    "&$selected": {
      backgroundColor: "rgb(25,147,230)",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
});
