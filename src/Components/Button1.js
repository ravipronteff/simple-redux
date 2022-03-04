import React from "react";

const Button1 = ({ name, action }) => {
  return (
    <button type="button" onClick={action}>
      {name}
    </button>
  );
};
export default Button1;
