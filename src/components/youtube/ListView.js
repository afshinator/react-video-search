import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

export default function ListView({
  videoData,
  handleCardClick,
  listIndex,
  maxWidth = "360px",
}) {
  const styles = maxWidth ? { width: '100%', maxWidth }: { width: "100%" }
  return (
    <List dense style={styles}>
      <ListItem
        key={videoData.id}
        button
        onClick={() => handleCardClick(listIndex)}
      >
        <ListItemAvatar>
          <Avatar
            variant="square"
            alt={videoData.title}
            src={videoData.thumbnail}
          />
        </ListItemAvatar>
        <ListItemText id={videoData.id} primary={videoData.title} />
        <ListItemSecondaryAction>
          {/* <Checkbox
          // edge="end"
          // onChange={}
          // checked={}
          // inputProps={}
          />
          */}
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}
