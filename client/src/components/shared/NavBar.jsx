import React from "react";
import { BiMenuAltRight, BiSolidCartAlt } from "react-icons/bi";
import logo from "../../assets/logo.png";
import Button from "./Button";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="shadow-md w-full top-0 left-0">
        <div className="md:flex items-center relative z-[1000] justify-between bg-white py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <img className="w-[50px]" src={logo} alt="logo" />
            </span>
            eCommerce
          </div>

          <div className="flex gap-5 text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
            <BiSolidCartAlt />
            <BiMenuAltRight
              onClick={() => setOpen(!open)}
              name={open ? "close" : "menu"}
            />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:shadow-none shadow-md bg-white md:z-[auto] z-[-100] left-0 w-full md:w-auto md:pl-0 pl-9 ${
              open ? "hidden" : "block"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <div className="block md:hidden">
              <NavLink to="login">
                <Button>Login</Button>
              </NavLink>
            </div>
          </ul>
          <div className="hidden md:flex md:items-center">
            <BiSolidCartAlt className="md:text-2xl" />
            <NavLink to="login">
              <Button>Login</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
