"use client";
import { Suspense } from "react";
import ErrorBoundary from "./error-boundary";

export default function Action({ children, ...props }) {
  return (
    <ErrorBoundary fallback={<div>Something crashed.</div>}>
      <Suspense fallback={<div>loading...</div>}>{children(props)}</Suspense>
    </ErrorBoundary>
  );
}
