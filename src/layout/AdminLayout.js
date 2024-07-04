import React, { useState } from "react";

import AppHeader from "../components/appAdminHeader/appAdminHeader";
import AppSidebar from "../components/appAdminSidebar/appAdminSidebar";
import AppadminContent from "../components/AppadminContent";

const AdminLayout = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="App" style={{ overflowY: "hidden" }}>
      <AppHeader setMenuToggle={setMenuToggle} />
      <div className="row">
        <div className="col-2">
          <AppSidebar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        </div>
        <div className="col-10" style={{ height:"100vh",overflowY: "scroll", padding: "10px"}}>
          <AppadminContent />
        </div>
      </div>
    </div>

  );
};

export default AdminLayout;
