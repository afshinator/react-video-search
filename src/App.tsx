import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ErrorFallback from "./components/AppErrorFallback";

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
