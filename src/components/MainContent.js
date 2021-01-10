import React from "react";
import { reducer } from "../helpers/reducer";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import InputScreen from "./InputScreen";
import fetchVideos from "./../helpers/fetcher";
import { Switch, Route } from "react-router-dom";
import StatsScreen from "./StatsScreen";
import YoutubeScreen from "./YoutubeScreen";
import IconButton from "@material-ui/core/IconButton";

export default function MainContent() {
  //  Holding the state of the checkboxes both as local
  // state in the component, and as a ref here. Why a ref?
  // Because I dont want to re-render this component
  // everytime the checkboxes are clicked.  We'll see if
  // this turns out to be a good idea or not.
  const checked = React.useRef({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const setChecked = (newState) => {
    checked.current = newState;
  };

  // This gets prop-drilled to <SearchInput />
  const handleSubmitSearch = (newSearchString) => {
    console.log("got ", newSearchString);
    setAllFetched(false)
    dispatch({ type: "setQuery", data: newSearchString });
  };

  //   const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const initialState = {
    // for the reducer
    currentSearch: null,
    searches: [
      // new searches will be stored here; in the shape of resultsObj
    ],
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [allFetchResolved, setAllFetched] = React.useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const current = state.searches[state.currentSearch] || null;

  React.useEffect(() => {
    if (typeof state.currentSearch === "number") {
      // only kick off api requests if we have no searches have been done yet
      if (state.searches[state.currentSearch].searchTotal === 0) {
        fetchVideos(
          state.searches[state.currentSearch].queryString,
          dispatch,
          checked.current
        );
        return;
      }

      if (state.searches[state.currentSearch].allResolved) {
        if (!allFetchResolved) {
          setAllFetched(true);
          setOpenSnack(true);
          return;
        }
      }
    }
  }, [state.searches, state.currentSearch, allFetchResolved]); // TODO

  console.log("MainContent ", state);
  return (
    <div>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/stats">
          <StatsScreen checked={checked.current} state={state} />
        </Route>
        <Route path="/youtube">
          {current ? (
            <YoutubeScreen
              isChecked={checked.current.checkedA}
              searchTerm={current.queryString}
              data={current.youTube}
            />
          ) : null}
        </Route>
        <Route path="/">
          <InputScreen
            checked={checked.current}
            setChecked={setChecked}
            handleSubmitSearch={handleSubmitSearch}
            state={state}
          />
        </Route>
      </Switch>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        message="Finished fetching all results.✔️"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="primary"
              onClick={handleCloseSnack}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
