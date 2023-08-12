import { NavLink, Outlet } from "react-router-dom";

const Layout = ({ pathname }) => {
  return (
    <div className="flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden">
      <div className="border-8 border-sky-300 w-[20vw] bg-sky-300">
        <div className="flex flex-col gap-4 p-5">
          <NavLink to="/" className="btn btn-glass">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Home
            </div>
          </NavLink>
          <div className="divider" />
          <NavLink to={`${pathname}`} className="btn btn-glass">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Overview
            </div>
          </NavLink>
          <NavLink to={`${pathname}/customers`} className="btn btn-glass">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Customers
            </div>
          </NavLink>
          <NavLink to={`${pathname}/products`} className="btn btn-glass">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Products
            </div>
          </NavLink>
          <NavLink to={`${pathname}/addproduct`} className="btn btn-glass">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Add product
            </div>
          </NavLink>
          <NavLink to={`${pathname}/orders`} className="btn btn-glass">
            <div className="rounded-md hover:bg-sky-700 bg-sky-200 transition-all hover:text-sky-50 font-bold p-2 cursor-pointer">
              Orders
            </div>
          </NavLink>
        </div>
      </div>
      <div className="border-8 w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
