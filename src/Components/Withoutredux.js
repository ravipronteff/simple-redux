import React from "react";
import Button1 from "./Button1";
import Display from "./Display";

const Withoutredux = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);
  return (
    <div>
      <Display count={count} />
      <Button1 name="Increment" action={() => increment()} />
      <Button1 name="Decrement" action={() => decrement()} />
      <br />
      <Button1 name="Reset" action={() => reset()} />
    </div>
  );
};

export default Withoutredux;
