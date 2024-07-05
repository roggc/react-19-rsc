"use client";
import Counter from "../counter";

const Comp1 = ({ greeting }) => {
  return (
    <>
      <div>{greeting}</div>
      <Counter />
    </>
  );
};
export default Comp1;
