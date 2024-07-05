"use client";

import Wrapper from "./wrapper";

export default function Action({ children, ...props }) {
  return <Wrapper>{children(props)}</Wrapper>;
}
