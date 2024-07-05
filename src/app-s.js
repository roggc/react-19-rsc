import CounterS from "./counter-s";
import Client1S from "./client1-s";
import App from "./app";
import Wrapper from "./wrapper";

export default function () {
  return (
    <Wrapper>
      <App>
        <CounterS />
        <Client1S />
      </App>
    </Wrapper>
  );
}
