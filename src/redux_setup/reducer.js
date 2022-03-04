const globalState = {
  count: 0,
};

export const reducer = (intialState = globalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: intialState.count + 1 };
    case "INCREMENTBYVALUE":
      return { count: intialState.count + action.payload };
    case "DECREMENT":
      return { count: intialState.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return intialState;
  }
};
