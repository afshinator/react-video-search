import React from "react";
import { FallbackProps } from "react-error-boundary";

function ErrorFallback({
  error,
  resetErrorBoundary,
} : FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong in the app:</p>
      <pre>{error.name}</pre>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback