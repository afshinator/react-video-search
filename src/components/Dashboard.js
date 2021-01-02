import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Placeholder from "./Placeholder";
import AppDrawer from "./AppDrawer";
import AppHeader from "./AppHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(   // TODO: is this really necessary?
    () =>   
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  const handleDrawerOpen = () => {  // TODO: do I need to memoize?
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppHeader open={open} handleDrawerOpen={handleDrawerOpen} />
        <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
        <Placeholder />
      </div>
    </ThemeProvider>
  );
}
