import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./appAdminSidebar.css";
import axios from "../../axios/axios";

import moment from "moment";


const AppSidebar = ({ menuToggle, setMenuToggle }) => {

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [iconToggle, seticonToggle] = useState(true);

  const date = new Date();
  const [open, setOpen] = useState();


  const sideMenu = (index) => {
    console.log("You have", index);

    setDropdownMenu(open != index ? true : !dropdownMenu);
    setOpen(index);
  };

  const Array = [
    {
      Title: "Dashboard",
      NavLink: "/dashboard"
    },
    {
      Title: "University Master",
      NavLink: "/UniversityMasterList"
    },
    {
      Title: "Courses Master",
      NavLink: "/admission"
    },
    {
      Title: "Form Master",
      NavLink: "/banner"
    },
    {
      Title: "Payment Master",
      NavLink: "/student"
    },
    {
      Title: "Website Master",
      NavLink: "/theme"
    },
    {
      Title: "Content Master",
      NavLink: "/aboutus"
    },

  ]

  return (
    <>
      <div className="app-admin-sidebar"

      >
        {Array?.map((d, index) => (<div>
          <NavLink
            to={d?.NavLink}
            className="mr-2 ml-2"
            activeclassName="active"
          >
            <div className="">{d?.Title}</div>
          </NavLink>
        </div>))}

      </div>
    </>
  );
};

export default AppSidebar;
