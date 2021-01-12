import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import SearchIcon from "@material-ui/icons/Search";
import MultilineChart from "@material-ui/icons/MultilineChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PermMediaIcon from "@material-ui/icons/PermMedia";

import youtube from "../assets/youtube.svg";
import bing from "../assets/bing.svg";
import vimeo from "../assets/vimeo.svg";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/" style={{ color: "#f1f2ee", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <SearchIcon style={{ color: "#c08552" }} />
        </ListItemIcon>
        <ListItemText primary="Search Input" />
      </ListItem>
    </Link>
    <Link to="/stats" style={{ color: "#f1f2ee", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <MultilineChart style={{ color: "#c08552" }} />
        </ListItemIcon>
        <ListItemText primary="Search Stats" />
      </ListItem>
    </Link>
    <Link to="/youtube" style={{ color: "#f1f2ee", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <img
            src={youtube}
            alt="youtube"
            style={{
              width: "23px",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="YouTube" />
      </ListItem>
    </Link>
    <Link to="/bing" style={{ color: "#f1f2ee", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <img
            src={bing}
            alt="bing"
            style={{
              width: "23px",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Bing" />
      </ListItem>
    </Link>
    <Link to="/vimeo" style={{ color: "#f1f2ee", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <img
            src={vimeo}
            alt="vimeo"
            style={{
              width: "23px",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Vimeo" />
      </ListItem>
    </Link>

    <Link
      to="/collections"
      style={{ color: "#f1f2ee", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <PermMediaIcon style={{ color: "#c08552" }} />
        </ListItemIcon>
        <ListItemText primary="Collections" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset style={{ color: "#8ac6d0" }}>
      Current collection
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="-->" />
    </ListItem>

    <ListSubheader inset style={{ marginTop: "25px", color: "#8ac6d0" }}>
      Saved collections
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
