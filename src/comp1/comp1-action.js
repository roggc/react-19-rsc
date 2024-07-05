"use server";
import Comp1 from "./comp1";

export default function comp1({ name }) {
  const messagePromise = new Promise((res) =>
    setTimeout(() => res("hello x " + name), 1000)
  );
  return <Comp1 greetingPromise={messagePromise} />;
}
