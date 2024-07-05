import { Suspense } from "react";
import ErrorBoundary from "./error-boundary";

export default function ({ children }) {
  return (
    <ErrorBoundary fallback={<div>Something crashed.</div>}>
      <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
    </ErrorBoundary>
  );
}
