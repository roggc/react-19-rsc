"use server";
import Comp1 from "./comp1";

export default async function comp1({ name }) {
  const message = await new Promise((res) =>
    setTimeout(() => res("hello x " + name), 1000)
  );
  return <Comp1 greeting={message} />;
}
