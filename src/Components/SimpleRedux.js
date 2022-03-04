import React from "react";
import { useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from "../redux_setup/actions";
import Button from "./Button";

const SimpleRedux = () => {
  const counter = useSelector((state) => state);

  return (
    <div>
      <Button name="Increment" action={increment()} />
      {/* <Button name="Increment By 5" action={incrementByValue()} /> */}
      <h1>{counter.count}</h1>
      <Button name="Decrement" action={decrement()} />
      <br />
      <Button name="Reset" action={reset()} />
    </div>
  );
};

export default SimpleRedux;
