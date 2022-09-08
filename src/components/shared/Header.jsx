import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = ({ blackMode }) => {
  const [showMenu, setShowMenu] = useState("off");

  const hendleShowMenu = () => {
    if (showMenu === "off") {
      setShowMenu("on");
    } else {
      setShowMenu("off");
    }
  };
  console.log(showMenu);

  return (
    <header
      className={`header ${
        blackMode == "off" ? "header-ligth" : "header-black"
      }`}
    >
      <div className="header__div1">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/"
        >
          <h2 className="header_logo">e-commerce</h2>
        </NavLink>
      </div>

      <div className="header__div2">
        <i onClick={hendleShowMenu} className={` header-menu bx bx-menu`}></i>
        <ul
          className={`header__list ${
            showMenu == "on" ? "header__list1" : "header__list2"
          } ${
            blackMode == "off" ? "header-ligth" : "header-black"
          }`}
        >
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/login"
            >
              <i className="bx bxs-user-circle"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/purchases"
            >
              <i className="bx bxs-box"></i>
            </NavLink>
          </li>
          <li className="header__item">
          <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/cart"
            >
              <i className="bx bxs-cart"></i>
              </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
