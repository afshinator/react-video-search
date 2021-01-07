import React from "react";
import { reducer } from "../helpers/reducer";
import InputScreen from "./InputScreen";
import fetchVideos from "./../helpers/fetcher";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    dispatch({ type: "setQuery", data: newSearchString });
  };

  const initialState = {
    inputVal: "",
    currentSearch: null,
    searches: [
      // new searches will be stored here; in the shape of resultsObj
    ],
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
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
      }
    }
  }, [state.searches, state.currentSearch]); // TODO

  console.log("MainContent ", state);
  return (
    <Router>
      <Switch>
        <Route path="/about"></Route>
        <Route path="/users"></Route>
        <Route path="/">
          <InputScreen
            checked={checked.current}
            setChecked={setChecked}
            handleSubmitSearch={handleSubmitSearch}
            state={state}
          />
        </Route>
      </Switch>
    </Router>
  );
}
