import { createContext, useReducer } from "react";

const initialLevel = "easy";

export const LevelContext = createContext();
export const LevelDispatchContext = createContext();

function levelReducer(state, action) {
  switch (action.type) {
    case "easy":
      return "easy";
    case "normal":
      return "normal";
    case "hard":
      return "hard";
    default:
      throw new Error(`Unkown action type: ${action.type}`);
  }
}

export function GlobalContextProvider({ children }) {
  const [level, levelDispatch] = useReducer(levelReducer, initialLevel);

  return (
    <LevelContext.Provider value={level}>
      <LevelDispatchContext.Provider value={levelDispatch}>
        {children}
      </LevelDispatchContext.Provider>
    </LevelContext.Provider>
  );
}
