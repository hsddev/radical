import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

function Navbar() {
  return (
    <div className="navbar">
      <HomeIcon className="navbar__logo" />
      <NavLink
        to="/about"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        About
      </NavLink>

      <NavLink
        to="/started"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        Getting Started
      </NavLink>

      <NavLink
        to="/run_project"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        Running a Project
      </NavLink>

      <NavLink
        to="/design"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        Design Principles
      </NavLink>

      <NavLink
        to="/case_studies"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        Case Studies
      </NavLink>

      <NavLink
        to="/dashboard"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        Data Dashboard
      </NavLink>

      <NavLink
        to="/faq"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        Contacts and FAQ's
      </NavLink>

      <NavLink
        to="/indicator"
        exact
        className="navbar__link"
        activeClassName="selected"
      >
        Opportunity Indicator
      </NavLink>
    </div>
  );
}

export default Navbar;
