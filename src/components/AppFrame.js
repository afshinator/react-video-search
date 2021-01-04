import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppDrawer from "./AppDrawer";
import AppHeader from "./AppHeader";
import MainContent from './MainContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));


export default function AppFrame() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>   
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#c08552",
          },
          secondary: {
            main: "#8ac6d0",
          },
        },
      }),
    [prefersDarkMode]
  );
  const handleDrawerOpen = () => {  // TODO: when app is more fleshed out see if I get too many unnecessary renders
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
        <MainContent />
      </div>
    </ThemeProvider>
  );
}
