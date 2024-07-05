"use client";

import Counter from "../counter";
import Wrapper from "../wrapper";

const Comp1 = ({ greetingPromise }) => {
  return (
    <>
      <div>
        <Wrapper>{greetingPromise}</Wrapper>
      </div>
      <Counter />
    </>
  );
};

export default Comp1;
