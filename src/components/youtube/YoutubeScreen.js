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
import QueryBuilder from "@material-ui/icons/QueryBuilder";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Title from "../Title";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import YoutubeSRCard from "./YoutubeSRCard";
import { Tooltip } from "@material-ui/core";
import ListView from "./ListView";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    // overflow: "auto",
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
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    // justifyContent: "space-around",
  },
  titleCol: {
    // minWidth: '100px',
    marginBottom: "40px",
  },
  col: {
    flex: 1,
  },
}));

export default function YoutubeScreen({
  isChecked,
  searchTerm,
  data,
  myVideoLists,
  myListsDispatch,
}) {
  const classes = useStyles();
  const [viewType, setViewType] = React.useState("default");
  const [sortByDate, setSortByDate] = React.useState(false);
  const titleRow = clsx(classes.row, classes.titleCol);
  const layoutCol = clsx(classes.row, classes.col);

  if (!isChecked) return null;

  const handleCardClick = (index) => {
    myListsDispatch({
      type: "addRefToCurrent",
      data: { index, provider: "youTube" },
    });
  };
  const handleMyListClick = (index) => {
    console.log("click in my list on ", index);
    myListsDispatch({
      type: "removeFromCurrent",
      data: { index }
    })
  };

  let videoList = data.data.items.filter(
    (item) => item.type === "video" || item.type === "movie"
  );
  if (sortByDate) {
    // videoList.sort(function(a,b) {
    // })
  }

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <div className={titleRow}>
          <div className={classes.col}>
            <Typography gutterBottom className={classes.title} component="h3">
              Results for: '{data.data.query}'
            </Typography>
          </div>
          <div className={layoutCol}>
            <Tooltip title="normal layout" aria-label="normal layout">
              <IconButton
                color={viewType === "default" ? "secondary" : "primary"}
                onClick={() => {
                  setViewType("default");
                }}
              >
                <ViewModule fontSize="large" />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="compact layout" aria-label="compact layout">
              <IconButton
                color={viewType === "compact" ? "secondary" : "primary"}
                onClick={() => {
                  setViewType("compact");
                }}
              >
                <ViewStream fontSize="large" />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="list layout" aria-label="list layout">
              <IconButton
                color={viewType === "list" ? "secondary" : "primary"}
                onClick={() => {
                  setViewType("list");
                }}
              >
                <ViewList fontSize="large" />
              </IconButton>
            </Tooltip>
          </div>

          {/* <div className={classes.col}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={sortByDate}
                    onChange={() => {
                      setSortByDate(!sortByDate);
                    }}
                  />
                }
                label="Order by Date"
              />
            </FormGroup>
          </div> */}
        </div>
        <Divider />
        <Title>{myVideoLists.collections[0].title} Collection</Title>
        <div className={classes.row}>
          {myVideoLists.collections[0].listOfVideos.map((ref, i) => {
            return (
              <ListView
                key={i}
                videoData={
                  myVideoLists.latestSearchResults[ref.provider].data.items[
                    ref.index
                  ]
                }
                handleCardClick={handleMyListClick}
                listIndex={ref.index}
              />
            );
          })}
        </div>
        <Divider style={{ marginBottom: "35px" }} />
        <Grid container spacing={3}>
          {videoList.map((vid, i) => {
            return (
              <YoutubeSRCard
                key={vid.id || vid.videoId}
                listIndex={i}
                videoData={vid}
                queryString={data.data.query}
                viewType={viewType}
                handleCardClick={handleCardClick}
                disabled={myVideoLists.collections[0].listOfVideos.reduce(
                  (acc, c) => {
                    console.log("= = = = == ", c, acc);
                    return c.index === i || acc;
                  },
                  false
                )}
              />
            );
          })}
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  );
}
