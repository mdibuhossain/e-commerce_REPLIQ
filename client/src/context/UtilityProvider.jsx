import { createContext } from "react";
import useUtility from "../hooks/useData";

export const UtilityContext = createContext();

const UtilityProvider = ({ children }) => {
  const util = { ...useUtility() };
  return (
    <UtilityContext.Provider value={util}>{children}</UtilityContext.Provider>
  );
};

export default UtilityProvider;
