import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const [state, setState] = useState(globalState);

  const dispatch = (actionType, payload) => {
    const newState = actions[actionType](globalState, payload);
    globalState = { ...globalState, ...newState };
    listeners.forEach((listener) => listener(globalState));
  };

  useEffect(() => {
    if (shouldListen) listeners.push(setState);
    return () => {
      if (shouldListen) listeners = listeners.filter((listener) => !listener);
    };
  }, [shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState = {}) => {
  globalState = { ...globalState, ...initialState };
  actions = { ...actions, ...userActions };
};
