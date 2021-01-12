import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Tooltip } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  title: {
    fontSize: "14px",
  },
  description: {
    fontSize: "10px",
  },
  ten: {
    fontSize: "10px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  sb: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  mt5: {
    marginTop: "5px",
  },
  by: {
    fontsize: "8px",
    color: "#c08552",
  },
  listViewRoot: {
    width: "100%",
    maxWidth: 360,
  },
});

export default function YoutubeSRCard({
  videoData,
  listIndex,
  queryString,
  viewType,
  handleCardClick,
}) {
  const classes = useStyles();
  const titleRow = clsx(classes.row, classes.sb);
  const miscRow = clsx(classes.row, classes.mt5);
  console.log("videodat ", videoData);

  if (viewType === "list")
    return (
      <ListView
        videoData={videoData}
        handleCardClick={handleCardClick}
        listIndex={listIndex}
      />
    );

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleCardClick(listIndex)}>
        <CardMedia
          component="img"
          alt={`youtube search result for ${queryString}`}
          height="140"
          image={`${videoData.thumbnail}`}
          title={videoData.title}
        />
        <CardContent>
          <div className={titleRow}>
            <Typography gutterBottom className={classes.title} component="h5">
              {videoData.title}
            </Typography>
            <div style={{ fontSize: "8px", color: "red" }}>
              <Tooltip
                title={videoData.author.name}
                aria-label={videoData.author.name}
              >
                <span className={classes.by}>BY</span>
              </Tooltip>
            </div>
          </div>

          <Typography
            className={classes.description}
            color="textSecondary"
            component="p"
          >
            {videoData.description}
          </Typography>

          {viewType === "default" ? (
            <div className={miscRow}>
              <Typography component="p" className={classes.description}>
                Views: {videoData.views}🔹
              </Typography>
              <Typography component="p" className={classes.description}>
                Length: {videoData.duration}🔹
              </Typography>
              <Typography component="p" className={classes.description}>
                Date uploaded: {videoData.uploaded_at}
              </Typography>
            </div>
          ) : null}
        </CardContent>
      </CardActionArea>
      {viewType === "default" ? (
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}

function ListView({ videoData, handleCardClick, listIndex }) {
  const classes = useStyles();
  return (
    <List dense className={classes.listViewRoot}>
      <ListItem key={videoData.id} button onClick={()=> handleCardClick(listIndex)}>
        <ListItemAvatar>
          <Avatar
            variant="square"
            alt={videoData.title}
            src={videoData.thumbnail}
          />
        </ListItemAvatar>
        <ListItemText id={videoData.id} primary={videoData.title} />
        <ListItemSecondaryAction>
          <Checkbox
          // edge="end"
          // onChange={}
          // checked={}
          // inputProps={}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
