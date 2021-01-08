import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ViewModule from "@material-ui/icons/ViewModule";
import ViewStream from "@material-ui/icons/ViewStream";
import ViewList from "@material-ui/icons/ViewList";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import SearchInput from "./SearchInput";
import ProviderCheckboxes from "./ProviderCheckboxes";
import SRCard from "./SRCard";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(2),
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
  optionsBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "60px",
  },
}));

export default function YoutubeScreen({ isChecked, searchTerm, data }) {
  const classes = useStyles();
  const [viewType, setViewType] = React.useState("default");
  const fixedHeightPaper = clsx(classes.paper, classes.height240);

  if (!isChecked) return null;
  console.log("in youtube screen ", data);
  const videoList = data.data.items.filter((item) => item.type === "video");

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.optionsBox}>
          <Tooltip title="normal layout" aria-label="normal layout">
            <ViewModule fontSize="large" />
          </Tooltip>
          <Tooltip title="compact layout" aria-label="compact layout">
            <ViewStream fontSize="large" />
          </Tooltip>
          <Tooltip title="list layout" aria-label="list layout">
            <ViewList fontSize="large" />
          </Tooltip>
        </div>
        <Grid container spacing={3}>
          {videoList.map((vid, i) => {
            return <SRCard videoData={vid} />;
          })}
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  );
}
