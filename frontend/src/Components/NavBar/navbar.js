import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activelink = { background: "white", color: "black" };
  const normallink = { background: "none", color: "white" };

  return (
    <div>
      <header>
        <div className="logo">Salaza Rooms</div>
        <div className="icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activelink : normallink)}
                className="data"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                style={({ isActive }) => (isActive ? activelink : normallink)}
                className="data"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                style={({ isActive }) => (isActive ? activelink : normallink)}
                className="data"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Service"
                style={({ isActive }) => (isActive ? activelink : normallink)}
                className="log"
              >
                Book Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Dashboard"
                style={({ isActive }) => (isActive ? activelink : normallink)}
                className="sign"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
