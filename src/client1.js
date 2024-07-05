"use client";

import { use } from "react";

export default function ({ promise }) {
  return <div>{use(promise)}</div>;
}
