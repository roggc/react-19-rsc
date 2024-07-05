"use client";

import { use, useState } from "react";
import comp1 from "./comp1/comp1-action";
import Action from "./action";

export default function ({ promise }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>{use(promise)}</div>
      <button onClick={() => setShow(true)}>show</button>
      {show && <Action name="roger">{comp1}</Action>}
    </>
  );
}
