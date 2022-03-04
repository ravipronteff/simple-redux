import React from "react";
import { useDispatch } from "react-redux";

const Button = ({ name, action }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(action);
      }}
    >
      {name}
    </button>
  );
};
export default Button;
