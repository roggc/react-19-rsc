import CounterS from "./counter-s";
import Client1S from "./client1-s";
import App from "./app";
import WrapperS from "./wrapper-s";

export default function () {
  return (
    <WrapperS>
      <App>
        <CounterS />
        <Client1S />
      </App>
    </WrapperS>
  );
}
