import React from "react";
import InputScreen from "./InputScreen";

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
  

  const handleSubmitSearch = (newSearchString) => {
    console.log('got ', newSearchString )
    // dispatch({ type: "setQuery", data: newSearchString });
  };

  console.log("MainContent ", checked.current);
  return <InputScreen 
  checked={checked.current} 
  setChecked={setChecked} 
  handleSubmitSearch={handleSubmitSearch}

  />;
}
