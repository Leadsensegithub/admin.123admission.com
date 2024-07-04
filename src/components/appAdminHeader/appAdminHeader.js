import React, { useContext, useState } from "react";
import Logo from '../../assets/Logo/Logo.svg'
import "./appAdminHeader.css";


const AppHeader = ({ setMenuToggle }) => {


  return (
    <div className="admin-app-header">

      <div>
        <div>
          <img src={Logo} style={{ width: "25%" }}></img>
        </div>
      </div>
      <div>
        <div>
          <button className="btn btn-primary">admin</button>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
