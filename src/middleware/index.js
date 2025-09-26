export const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuringMiddleware = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "Eddie" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};
