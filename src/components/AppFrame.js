import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppDrawer from "./AppDrawer";
import AppHeader from "./AppHeader";
import MainContent from "./MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        overrides: {
          // MuiButton: {
          //   text: {
          //     background: 'linear-gradient(45deg, #c08552 30%, #FF8E53 90%)',
          //     borderRadius: 3,
          //     border: 0,
          //     color: 'white',
          //     height: 28,
          //     padding: '0 30px',
          //     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          //   },
          // },
        },        
      }),
    [prefersDarkMode]
  );
  const handleDrawerOpen = () => {
    // TODO: when app is more fleshed out see if I get too many unnecessary renders
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppHeader open={open} handleDrawerOpen={handleDrawerOpen} />
          <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
          <MainContent />
        </div>
      </ThemeProvider>
    </Router>
  );
}
