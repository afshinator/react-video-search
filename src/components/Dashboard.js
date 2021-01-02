import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

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
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader open={open} handleDrawerOpen={handleDrawerOpen} />
      <AppDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Placeholder />
    </div>
  );
}
