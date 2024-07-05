// src/Client1S.js
import Client1 from "./client1";
import Wrapper from "./wrapper";

export default function Client1S() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res("foo"), 5000);
  });

  return (
    <Wrapper>
      <Client1 promise={promise} />
    </Wrapper>
  );
}
