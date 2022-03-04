import React from "react";

const Stateintro = () => {
  let count = 0;
  const handleCount = () => {
    count = count + 1; //count++
    console.log("From Stateintro comp Count", count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleCount}>
        Increment
      </button>
    </div>
  );
};

export default Stateintro;
