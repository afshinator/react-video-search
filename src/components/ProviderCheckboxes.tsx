import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import Switch from "@material-ui/core/Switch";
import youtube from "../assets/youtube.svg";
import bing from "../assets/bing.svg";
import vimeo from "../assets/vimeo.svg";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    '& span': {
      fontSize: 20
    }
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "120px",
    width: '115px',
    padding: "10px",
  },
  img: {
    width: "60px",
    opacity: ".85",
    transition: 'all .5s',
  },
  offset: {
    marginTop: "-20px",
  },
  grayscale: {
    filter: "grayscale(100%)",
  },
}));

type Props = {
  setChecked: (newState: object) => void;
  current: null | {
    youTube: { status: string };
    bing: { status: string };
    vimeo: { status: string };
  };
};

export default function ProviderCheckboxes({ setChecked, current }: Props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    setChecked(newState);
  };
  const classes = useStyles();
  console.log("current ", current);
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <img
          src={youtube}
          className={classes.img}
          alt="youtube"
          style={{
            filter: `grayscale(${state.checkedA ? 0 : 100}%)`,
          }}
        />
        {current && state.checkedA && current.youTube.status === "pending" ? (
          <CircularProgress />
        ) : (
          <>
            <Switch
              className={classes.offset}
              checked={state.checkedA}
              onChange={handleChange}
              color="primary"
              name="checkedA"
              inputProps={{ "aria-label": "YouTube" }}
            />
            <span>YouTube</span>{" "}
          </>
        )}
      </Card >
      <Card className={classes.card}>
        <img
          src={bing}
          className={classes.img}
          alt="bing"
          style={{
            filter: `grayscale(${state.checkedB ? 0 : 100}%)`,
          }}
        />
        {current && state.checkedB && current.bing.status === "pending" ? (
          <CircularProgress />
        ) : (
          <>
            <Switch
              className={classes.offset}
              checked={state.checkedB}
              onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "Bing" }}
            />
            <span>Bing</span>
          </>
        )}
      </Card>
      <Card className={classes.card}>
        <img
          src={vimeo}
          className={classes.img}
          alt="vimeo"
          style={{
            filter: `grayscale(${state.checkedC ? 0 : 100}%)`,
          }}
        />
        {current && state.checkedC && current.vimeo.status === "pending" ? (
          <CircularProgress />
        ) : (
          <>
            <Switch
              className={classes.offset}
              checked={state.checkedC}
              onChange={handleChange}
              color="primary"
              name="checkedC"
              inputProps={{ "aria-label": "Vimeo" }}
            />
            <span>Vimeo</span>{" "}
          </>
        )}
      </Card>
    </div>
  );
}
