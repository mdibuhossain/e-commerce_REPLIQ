import { useContext } from "react";
import { UtilityContext } from "../context/UtilityProvider";

const useUtil = () => {
  return useContext(UtilityContext);
};

export default useUtil;
