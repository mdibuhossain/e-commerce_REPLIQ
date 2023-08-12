import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  const getCartDetailsCount = () => {
    const data = JSON.parse(localStorage.getItem("cartDetails"));
    if (data) {
      return Object.keys(data).length;
    } else {
      return 0;
    }
  };
  const [cartCountTop, setCartCountTop] = React.useState(getCartDetailsCount());
  const [stickyClass, setStickyClass] = React.useState("relative");
  const [isLogin, setIsLogin] = React.useState(
    JSON.parse(localStorage.getItem("isLogin"))
  );

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  React.useEffect(() => {
    const updateDataFromLocalStorage = () => {
      const storedData = JSON.parse(localStorage.getItem("isLogin"));
      setIsLogin(storedData);
      setCartCountTop(getCartDetailsCount());
    };

    updateDataFromLocalStorage();

    window.addEventListener("storage", updateDataFromLocalStorage);

    return () => {
      window.removeEventListener("storage", updateDataFromLocalStorage);
    };
  }, []);

  const logOutHandler = () => {
    localStorage.setItem("isLogin", false);
    setIsLogin(false);
  };

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass("sticky top-0 left-0")
        : setStickyClass("relative");
    }
  };
  return (
    <>
      <div className={`navbar shadow-lg z-50 bg-base-100 ${stickyClass}`}>
        <div className="flex-1">
          <Link to="" className="btn btn-ghost normal-case text-xl">
            eCommerce
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartCountTop}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cartCountTop} Items</span>
                <div className="card-actions">
                  <Link to="cart" className="btn btn-primary btn-block">View cart</Link>
                </div>
              </div>
            </div>
          </div>
          {!isLogin ? (
            <div>
              <Link to="/login" className="btn btn-sm btn-success">
                Login
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://64.media.tumblr.com/0ebd9d306b212e7fe202fc150211c268/9ddee3b5d0fd062a-3b/s540x810/fd039b55b8cb1892ff3519fc8ed1e5d46b5670f3.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="dashboard" className="justify-between">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={logOutHandler}>Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
