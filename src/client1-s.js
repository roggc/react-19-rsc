import Client1 from "./client1";
import WrapperS from "./wrapper-s";

export default function Client1S() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => res("foo"), 1000);
  });

  return (
    <WrapperS>
      <Client1 promise={promise} />
    </WrapperS>
  );
}
