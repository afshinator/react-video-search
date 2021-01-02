import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ErrorFallback from "./components/AppErrorFallback";

// TODO: I think I want to move the error-boundary to enclose the main
// content, rather than whole app because essentially I have to trust the
// libraries I'm using .
const myErrHandler = (error: Error, info: { componentStack: String }) => {
  console.log("Hey we got this crazy error: ", error, info);
};

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrHandler}>
      <Dashboard />
    </ErrorBoundary>
  );
}

export default App;
