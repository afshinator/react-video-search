import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Title from "./Title";
import ListView from "./youtube/ListView";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    // overflow: "auto",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    // justifyContent: "space-around",
  },
}));

export default function CollectionsScreen({ myVideoLists, myListsDispatch }) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
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
              // handleCardClick={handleMyListClick}
              listIndex={ref.index}
            />
          );
        })}
      </div>
      <Divider />
    </main>
  );
}
