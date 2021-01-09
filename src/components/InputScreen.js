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
import Divider from "@material-ui/core/Divider";

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
  state,
}) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.height240);
  const current = state.searches[state.currentSearch] || null;
  console.log(current);
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
          {current && current.queryString ? (
            <>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {current.youTube && current.youTube.stats.requestEnded ? (
                    <>
                      <strong>YouTube</strong>
                      <Divider />
                      <p>Started {current.youTube.stats.startedTime}</p>
                      <p>
                        Results in{" "}
                        {Math.trunc(
                          current.youTube.stats.requestEnded -
                            current.youTube.stats.requestStarted
                        )}{" "}
                        ms
                      </p>
                      <p>
                        Results: {current.youTube.data.items.length} of{" "}
                        {current.youTube.data.results}
                      </p>
                    </>
                  ) : null}
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {current.bing && current.bing.stats.requestEnded ? (
                    <>
                      <strong>Bing</strong>
                      <Divider />
                      <p>Started {current.bing.stats.startedTime}</p>
                      <p>
                        Results in{" "}
                        {Math.trunc(
                          current.bing.stats.requestEnded -
                            current.bing.stats.requestStarted
                        )}{" "}
                        ms
                      </p>
                      <p>
                        Results:{current.bing.data.value.length} of{" "}
                        {current.bing.data.totalEstimatedMatches}
                      </p>
                    </>
                  ) : null}
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {current.vimeo && current.vimeo.stats.requestEnded ? (
                    <>
                      <strong>Vimeo</strong>
                      <Divider />
                      <p>Started {current.vimeo.stats.startedTime}</p>
                      <p>
                        Results in{" "}
                        {Math.trunc(
                          current.vimeo.stats.requestEnded -
                            current.vimeo.stats.requestStarted
                        )}{" "}
                        ms
                      </p>
                      <p>Result count: {current.vimeo.data.data.length} of {current.vimeo.data.total}
                      </p>
                    </>
                  ) : null}
                </Paper>
              </Grid>
            </>
          ) : null}
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Orders state={state}/>
            </Paper>
          </Grid> */}
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  );
}
