import { useState } from "react";

const useData = () => {
  const [isLogin, setIsLogin] = useState(getDataFromLocalStorage("isLogin"));
  const [cartDetails, setCartDetails] = useState(
    getDataFromLocalStorage("cartDetails")
  );

  function setLogin() {
    setDataToLocalStorage("isLogin", true);
    setIsLogin(true);
  }

  function setLogOut() {
    removeDataFromLocalStorage("isLogin");
    setIsLogin(false);
  }

  function getDataFromLocalStorage(_key) {
    return JSON.parse(localStorage.getItem(_key));
  }

  function removeDataFromLocalStorage(_key) {
    localStorage.removeItem(_key);
  }

  function setDataToLocalStorage(_key, data) {
    localStorage.setItem(_key, JSON.stringify(data));
  }

  return {
    setLogin,
    isLogin,
    setIsLogin,
    setLogOut,
    setCartDetails,
    cartDetails,
    getDataFromLocalStorage,
    removeDataFromLocalStorage,
    setDataToLocalStorage,
  };
};

export default useData;
