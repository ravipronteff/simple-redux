import React from "react";

const WithState = () => {
  const [count, setCount] = React.useState(0);
  const handleCount = () => {
    setCount((prev) => prev + 1); //Increasing count
  };
  console.log("From WithState comp Count", count);
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleCount}>
        Increment
      </button>
    </div>
  );
};

export default WithState;
