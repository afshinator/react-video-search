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

export default function InputScreen({
  checked,
  setChecked,
  handleSubmitSearch,
  current,
}) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.height240);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Choose Video Providers</Title>
              <ProviderCheckboxes setChecked={setChecked} current={current} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <SearchInput
              handleSubmitSearch={handleSubmitSearch}
              current={current}
            />
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}></Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  );
}
