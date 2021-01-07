import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import SearchInput from "./SearchInput";
import ProviderCheckboxes from "./ProviderCheckboxes";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  height240: {
    height: 240,
  },
  searchbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    // padding: 5,
  },
}));

export default function YoutubeScreen({
  checked,
  setChecked,
  handleSubmitSearch,
  state,
  match
}) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.height240);
  const current = state.searches[state.currentSearch] || null;

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
        
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  );
}
