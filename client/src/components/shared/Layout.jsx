import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <div className="border-8 border-sky-300 w-[20vw] bg-sky-300">
        <div className="flex flex-col gap-4 p-5">
          <NavLink to="/">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Overview
            </div>
          </NavLink>
          <NavLink to="/customers">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Customers
            </div>
          </NavLink>
          <NavLink to="/orders">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Orders
            </div>
          </NavLink>
          <NavLink to="/products">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Products
            </div>
          </NavLink>
        </div>
      </div>
      <div className="border-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
