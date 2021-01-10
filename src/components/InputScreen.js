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
import SearchInput from "./SearchInput";
import ProviderCheckboxes from "./ProviderCheckboxes";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";

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
  para: {
    marginTop: "4",
    marginBottom: "4",
    fontSize: "12",
  },
}));

export default function InputScreen({
  checked,
  setChecked,
  handleSubmitSearch,
  handleHistoryClick,
  state,
}) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.height240);
  const current = state.searches[state.currentSearch] || null;
  const youTubeSearchRefinements =
    current && current.youTube && current.youTube.data
      ? current.youTube.data.items.filter(
          (vid) => vid.type === "search-refinements"
        )[0]
      : null;
  console.log("inputscreen ", state);
  const youtubeCount =
    current && current.youTube && current.youTube.data
      ? current.youTube.data.items.filter(
          (vid) => vid.type === "movie" || vid.type === "video"
        ).length
      : 0;

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
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                  {current.youTube && current.youTube.stats.requestEnded ? (
                    <>
                      <Title>YouTube</Title>
                      <Divider />
                      <p className={classes.para}>
                        Started {current.youTube.stats.startedTime}
                      </p>
                      <p className={classes.para}>
                        Results in{" "}
                        {Math.trunc(
                          current.youTube.stats.requestEnded -
                            current.youTube.stats.requestStarted
                        )}{" "}
                        ms
                      </p>
                      <p className={classes.para}>
                        Results: {youtubeCount} of{" "}
                        {current.youTube.data.results}
                      </p>
                    </>
                  ) : null}
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                  {current.bing && current.bing.stats.requestEnded ? (
                    <>
                      <Title>Bing</Title>
                      <Divider />
                      <p className={classes.para}>
                        Started {current.bing.stats.startedTime}
                      </p>
                      <p className={classes.para}>
                        Results in{" "}
                        {Math.trunc(
                          current.bing.stats.requestEnded -
                            current.bing.stats.requestStarted
                        )}{" "}
                        ms
                      </p>
                      <p className={classes.para}>
                        Results:{current.bing.data.value.length} of{" "}
                        {current.bing.data.totalEstimatedMatches}
                      </p>
                    </>
                  ) : null}
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                  {current.vimeo && current.vimeo.stats.requestEnded ? (
                    <>
                      <Title>Vimeo</Title>
                      <Divider />
                      <p className={classes.para}>
                        Started {current.vimeo.stats.startedTime}
                      </p>
                      <p className={classes.para}>
                        Results in{" "}
                        {Math.trunc(
                          current.vimeo.stats.requestEnded -
                            current.vimeo.stats.requestStarted
                        )}{" "}
                        ms
                      </p>
                      <p className={classes.para}>
                        Result count: {current.vimeo.data.data.length} of{" "}
                        {current.vimeo.data.total}
                      </p>
                    </>
                  ) : null}
                </Paper>
              </Grid>
            </>
          ) : null}
          {/* <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>YouTube Search Refinement Suggestions</Title>
              {youTubeSearchRefinements
                ? youTubeSearchRefinements.entrys.map((q, i) => {
                    return (
                      <Button key={q.q} color="primary">
                        {q.q}
                      </Button>
                    );
                  })
                : null}
            </Paper>
          </Grid> */}
        </Grid>
        <Box pt={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Title>Search History</Title>

              {state.searches.length
                ? state.searches
                    .map((aSearch, i) => {
                      return (
                        <Button
                          key={aSearch.queryString}
                          color="primary"
                          disabled={current.queryString === aSearch.queryString}
                          onClick={() => handleHistoryClick(i)}
                        >
                          {aSearch.queryString}
                        </Button>
                      );
                    })
                    .reverse()
                : null}
            </Paper>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
